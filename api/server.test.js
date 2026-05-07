import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import request from 'supertest'
import fs from 'node:fs'
import { createRequire } from 'node:module'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const ROOT = resolve(__dirname, '..')

const require = createRequire(import.meta.url)
const DB_PATH = resolve(ROOT, 'db.json')
const CLEAN_DB = JSON.stringify({ schedules: [] }, null, 2)

function loadServer() {
  const serverPath = resolve(ROOT, 'api/server.js')
  const dbPath = resolve(ROOT, 'db.json')
  delete require.cache[serverPath]
  delete require.cache[dbPath]
  return require(serverPath)
}

describe('Hair Day API', () => {
  let originalDb

  beforeEach(() => {
    originalDb = fs.readFileSync(DB_PATH, 'utf-8')
    fs.writeFileSync(DB_PATH, CLEAN_DB)
  })

  afterEach(() => {
    fs.writeFileSync(DB_PATH, originalDb)
  })

  it('should list empty schedules', async () => {
    const app = loadServer()
    const res = await request(app).get('/schedules')
    expect(res.status).toBe(200)
    expect(res.body).toEqual([])
  })

  it('should create a schedule', async () => {
    const app = loadServer()
    const res = await request(app)
      .post('/schedules')
      .send({ name: 'John', when: '2024-12-01T10:00:00.000Z' })
    expect(res.status).toBe(201)
    expect(res.body.name).toBe('John')
    expect(res.body.id).toBeDefined()
  })

  it('should get a schedule by id', async () => {
    const app = loadServer()
    const created = await request(app)
      .post('/schedules')
      .send({ name: 'Jane', when: '2024-12-02T10:00:00.000Z' })
    const res = await request(app).get(`/schedules/${created.body.id}`)
    expect(res.status).toBe(200)
    expect(res.body.name).toBe('Jane')
  })

  it('should update a schedule', async () => {
    const app = loadServer()
    const created = await request(app)
      .post('/schedules')
      .send({ name: 'Bob', when: '2024-12-03T10:00:00.000Z' })
    const res = await request(app)
      .put(`/schedules/${created.body.id}`)
      .send({ name: 'Bobby', when: '2024-12-03T11:00:00.000Z' })
    expect(res.status).toBe(200)
    expect(res.body.name).toBe('Bobby')
  })

  it('should delete a schedule', async () => {
    const app = loadServer()
    const created = await request(app)
      .post('/schedules')
      .send({ name: 'ToDelete', when: '2024-12-04T10:00:00.000Z' })
    const res = await request(app).delete(`/schedules/${created.body.id}`)
    expect(res.status).toBe(200)
    const list = await request(app).get('/schedules')
    expect(list.body.length).toBe(0)
  })

  it('should handle CORS headers', async () => {
    const app = loadServer()
    const res = await request(app).options('/schedules')
    expect(res.headers['access-control-allow-origin']).toBe('*')
  })
})
