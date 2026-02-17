const API_URL = "https://student-api-production-da62.up.railway.app/api/students";

let editingStudentId = null;

// CREATE OR UPDATE
function parseJwt(token) {
    const base64Payload = token.split('.')[1];
    const payload = atob(base64Payload);
    return JSON.parse(payload);
}


const token = localStorage.getItem("jwt");

if (!token) {
    window.location.href = "login.html";
}

const decoded = parseJwt(token);
const username = decoded.sub;
const role = decoded.roles ? decoded.roles[0] : decoded.role;

function addStudent() {

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const course = document.getElementById("course").value;

    const student = { name, email, course };

    if (editingStudentId) {

        // UPDATE
        fetch(`${API_URL}/${editingStudentId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(student)
        })
        .then(() => {
            editingStudentId = null;
            clearForm();
            loadStudents();
        });

    } else {

        // CREATE
        fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(student)
        })
        .then(() => {
            clearForm();
            loadStudents();
        });
    }
}

// LOAD STUDENTS
function loadStudents() {
    fetch(API_URL)
        .then(response => response.json())
        .then(data => {

            const tableBody = document.getElementById("studentTableBody");
            tableBody.innerHTML = "";

            data.forEach(student => {

                const row = document.createElement("tr");

                row.innerHTML = `
                    <td>${student.name}</td>
                    <td>${student.email}</td>
                    <td>${student.course}</td>
                    <td>
                        <button onclick="editStudent(${student.id}, '${student.name}', '${student.email}', '${student.course}')">
                            Edit
                        </button>
                        <button onclick="deleteStudent(${student.id})">
                            Delete
                        </button>
                    </td>
                `;

                tableBody.appendChild(row);
            });
        });
}

// DELETE
function deleteStudent(id) {
    fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    })
    .then(() => loadStudents());
}

// EDIT
function editStudent(id, name, email, course) {
    document.getElementById("name").value = name;
    document.getElementById("email").value = email;
    document.getElementById("course").value = course;

    editingStudentId = id;
}

// CLEAR FORM
function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("course").value = "";
}
