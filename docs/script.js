const API_URL = "https://student-api-production-da62.up.railway.app/api/students";

function loadStudents() {
    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            const list = document.getElementById("studentList");
            list.innerHTML = "";

            data.forEach(student => {
                const li = document.createElement("li");
                li.textContent = student.name + " - " + student.course;
                list.appendChild(li);
            });
        })
        .catch(error => console.error("Error:", error));
}
function addStudent() {
    const student = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        course: document.getElementById("course").value
    };

    fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(student)
    })
    .then(() => {
        loadStudents();
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("course").value = "";
    })
    .catch(err => console.error(err));
}

