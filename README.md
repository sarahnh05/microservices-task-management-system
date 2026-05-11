# Microservices Task Management

Backend Task Management System built with a microservices architecture using Node.js, Express, PostgreSQL, and RabbitMQ.

## Tech Stack

- Node.js
- Express.js
- PostgreSQL (raw SQL)
- RabbitMQ
- JWT Authentication
- Microservices Architecture
- Event-Driven Communication

## Features

### Authentication

- User registration
- User login
- JWT authentication
- Password hashing
- Validation handling

### Todo

- Create task
- Get all tasks
- Get task by ID
- Update task
- Delete task
- Filter by category
- Search feature

## ERD Diagram

```
erDiagram
    USERS {
        uuid id PK
        varchar name
        varchar email
        varchar password
        timestamp created_at
        timestamp updated_at
    }

    TODOS {
        uuid id PK
        uuid user_id FK
        varchar title
        text description
        varchar category
        boolean is_completed
        timestamp created_at
        timestamp updated_at
        timestamp deleted_at
    }

    USERS ||--o{ TODOS : has
```

## API Endpoints

### Auth

- POST /auth/register -> Register new user
- POST /auth/login -> Login user

### Task

- POST /tasks -> Create empty task
- GET /api/tasks-> Get all tasks
- GET /api/tasks/:id -> Get task by id
- PUT /api/tasks/:id -> Update task
- DELETE /api/tasks/:id -> Delete task

## Learning Goals

This project was built to deepen understanding of:

- Microservices architecture
- Event-driven systems
- RabbitMQ messaging
- Raw PostgreSQL queries
- Backend scalability concepts
- Service separation & communication

## Author

Built as part of backend learning journey, by Sarah Nur Haibah
