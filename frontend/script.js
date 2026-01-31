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
