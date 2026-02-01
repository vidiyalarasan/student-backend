# 🎓 Student Management System

A simple yet complete **full-stack web application** for managing students, built using **Spring Boot**, **PostgreSQL**, and **Vanilla JavaScript**.  
This project focuses on **real backend–frontend integration** and **cloud deployment**, without using heavy frontend frameworks.

---

## 🌐 Live Application

### Frontend (GitHub Pages)
👉 https://vidiyalarasan.github.io/student-project/

### Backend API (Railway)
👉 https://student-api-production-da62.up.railway.app/api/students

---

## 🛠️ Tech Stack

### Backend
- Java 21
- Spring Boot
- Spring Data JPA
- PostgreSQL (Railway Cloud DB)
- Maven

### Frontend
- HTML
- CSS
- JavaScript (Fetch API)

### Deployment
- Backend & Database: **Railway**
- Frontend Hosting: **GitHub Pages**
- Version Control: **GitHub**

---

## ✨ Features

- Add new students via UI
- Manually load students from database
- Delete students
- RESTful API design
- Cloud-hosted PostgreSQL database
- CORS-enabled backend
- Separate frontend and backend deployment

---

## 📁 Project Structure

student-project/
├── backend/ # Spring Boot backend
├── docs/ # Frontend (GitHub Pages)
│ ├── index.html
│ ├── style.css
│ └── script.js
└── README.md


---

## 🔌 REST API Endpoints

| Method | Endpoint | Description |
|------|---------|-------------|
| GET | `/api/students` | Get all students |
| POST | `/api/students` | Add a new student |
| DELETE | `/api/students/{id}` | Delete student by ID |

---

## 🧪 Example API Request

### POST `/api/students`
```json
{
  "name": "Vidiyalarasan",
  "email": "vidiya@gmail.com",
  "course": "Java"
}
```
---
▶️ Run Locally
Backend

cd backend
mvn spring-boot:run

Frontend

Open the file below directly in a browser:

docs/index.html
---
🧠 What I Learned

  - Building REST APIs with Spring Boot

  -  Connecting frontend to backend using Fetch API

  -  PostgreSQL cloud database integration

  -  CORS handling

  -  Deploying backend and database on Railway

  -  Hosting frontend on GitHub Pages

  - Structuring a monorepo project

  - Debugging real production issues
---
🚀 Future Enhancements

  -  Update student details

  -  Search & filter students

  -  Confirmation dialog for delete

  -  Pagination

  -  Better UI/UX styling

  -  API documentation using Swagger
---
👤 Author

Vidiyalarasan
Java Backend Developer (Learning Phase)
---
