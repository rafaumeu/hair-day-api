<div align="center">
  <img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=FFCA28&height=150&section=header&text=Hair%20Day%20API&fontSize=35&fontColor=fff&animation=fadeIn&fontAlignY=35&desc=REST%20API%20for%20Salon%20Scheduling&descSize=16&descAlignY=52"/>
</div>

<p align="center">
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-ES2022-F7DF1E?style=for-the-badge&logo=javascript"/>
  <img alt="Node.js" src="https://img.shields.io/badge/Node.js-22-339933?style=for-the-badge&logo=nodejs"/>
  <img alt="json-server" src="https://img.shields.io/badge/json_server-1-FF6B6B?style=for-the-badge"/>
  <img alt="Vitest" src="https://img.shields.io/badge/Vitest-3-6E9F18?style=for-the-badge"/>
  <img alt="Biome" src="https://img.shields.io/badge/Biome-2-60A5FA?style=for-the-badge"/>
  <img alt="Docker" src="https://img.shields.io/badge/Docker-ready-2496ED?style=for-the-badge&logo=docker"/>
</p>

---

## Overview

REST API backend for the **Hair Day** salon scheduling application. Built with **json-server** for rapid prototyping, providing CRUD endpoints for appointments, clients, and services. Fully containerized with Docker and covered by integration tests.

## Features

- CRUD endpoints for salon scheduling resources
- File-based JSON persistence via json-server
- Custom route handlers for business logic
- Input validation and error handling
- Docker containerization
- Integration test suite with Vitest + Supertest

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/appointments` | List all appointments |
| `POST` | `/appointments` | Create appointment |
| `GET` | `/appointments/:id` | Get appointment details |
| `PUT` | `/appointments/:id` | Update appointment |
| `DELETE` | `/appointments/:id` | Delete appointment |
| `GET` | `/clients` | List all clients |
| `POST` | `/clients` | Register client |
| `GET` | `/services` | List available services |

## Tech Stack

| Technology | Purpose |
|---|---|
| **Node.js** | Runtime environment |
| **JavaScript** | Core language |
| **json-server** | REST API framework |
| **Vitest** | Test framework |
| **Supertest** | HTTP assertions |
| **Biome** | Linting + formatting |
| **Docker** | Containerization |

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install

```bash
git clone https://github.com/rafaumeu/hair-day-api.git
cd hair-day-api
npm install
npm start
```

### Docker

```bash
docker compose up -d    # Start on port 3001
docker compose down     # Stop
```

## Testing

```bash
npm test                # Run all tests
npm run test:watch      # Watch mode
```

## License

MIT

<div align="center">
  <img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=FFCA28&height=100&section=footer"/>
  <br/><sub>Built with ❤️ by <a href="https://github.com/rafaumeu">Rafael Zendron</a></sub>
</div>

<p align="center">
  <a href="https://github.com/rafaumeu/hair-day-api/generate"><img src="https://img.shields.io/badge/Use_This_Template-FFCA28?style=for-the-badge&logo=github&logoColor=white" alt="Use this template"/></a>
</p>
