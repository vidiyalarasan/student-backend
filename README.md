# 🎓 Student Management System

A full-stack **Student Management System** built using **Spring Boot**, **PostgreSQL**, and **Vanilla JavaScript**, with a modern UI and real cloud deployment.

This project demonstrates real-world frontend–backend integration using REST APIs.

---

## 🌍 Live Demo

**Frontend (GitHub Pages):**  
https://vidiyalarasan.github.io/student-project/

**Backend API (Railway):**  
https://student-api-production-da62.up.railway.app/api/students

---

## 🧱 Tech Stack

### Backend
- Java 21
- Spring Boot
- Spring Data JPA
- PostgreSQL (Railway)
- Maven

### Frontend
- HTML
- CSS (custom modern styling)
- JavaScript (Fetch API)

### Deployment
- Backend & Database: Railway
- Frontend: GitHub Pages
- Version Control: GitHub

---

## ✨ Features

- Add students from the UI
- Load students manually
- Delete students
- RESTful API architecture
- Cloud PostgreSQL database
- Modern card-based UI
- Fully deployed frontend and backend

---

## 📂 Project Structure


student-project
|
|-- backend
|-- docs
|   |-- index.html
|   |-- script.js
|   |-- style.css
|-- README.md


---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|------|---------|-------------|
| GET | /api/students | Fetch all students |
| POST | /api/students | Add a new student |
| DELETE | /api/students/{id} | Delete a student |

---

## 🧪 Sample POST Request

```json
{
  "name": "Vidiyalarasan",
  "email": "vidiya@gmail.com",
  "course": "Java"
}```


---

## How to Run Locally

Backend:
cd backend
mvn spring-boot:run

Frontend:
Open docs/index.html in browser

---

## Key Learnings
- Spring Boot REST API development

- Frontend ↔ Backend communication using Fetch API

- Cloud PostgreSQL integration

- GitHub Pages and Railway deployment

C- ORS handling and HTTP methods

- UI/UX improvement without frameworks

- Monorepo project structure

---

## Future Improvements

- Edit / Update student

- Search and filter

- Delete confirmation modal

- Pagination

- Swagger API documentation

- Validation and error handling

---

## Author

Vidiyalarasan
Java Backend Learner
