const API_URL = "https://student-api-production-da62.up.railway.app/api/students";

function addStudent() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const course = document.getElementById("course").value;

    if (!name || !email || !course) {
        alert("Please fill all fields");
        return;
    }

    fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email,
            course: course
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to add student");
        }
        return response.json();
    })
    .then(() => {
        // clear inputs
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("course").value = "";

        // reload list
        loadStudents();
    })
    .catch(error => {
        console.error(error);
        alert("Error adding student");
    });
}
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
                        <button onclick="deleteStudent(${student.id})">
                            Delete
                        </button>
                    </td>
                `;

                tableBody.appendChild(row);
            });
        });
}
function deleteStudent(id) {
    fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    })
    .then(() => loadStudents())
    .catch(err => console.error(err));
}
loadStudents();

