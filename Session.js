document.addEventListener("DOMContentLoaded", function() {
    fetchSessions();
});

function fetchSessions() {
    fetch("fetch_sessions.php")
    .then(response => response.json())
    .then(data => {
        displaySessions(data);
    })
    .catch(error => {
        console.error('Error fetching sessions:', error);
    });
}

function displaySessions(data) {
    const sessionsDiv = document.getElementById("sessionsDiv");
    sessionsDiv.innerHTML = "";

    // Create table for students
    const studentsTable = createTable(data.students, "Students");
    sessionsDiv.appendChild(studentsTable);

    // Create table for tutors
    const tutorsTable = createTable(data.tutors, "Tutors");
    sessionsDiv.appendChild(tutorsTable);
}

function createTable(data, tableName) {
    const table = document.createElement("table");
    table.innerHTML = `
        <caption>${tableName}</caption>
        <thead>
            <tr>
                <th>ID</th>
                <th>Full Name</th>
                <th>Date & Time</th>
            </tr>
        </thead>
        <tbody>
            ${data.map(row => `
                <tr>
                    <td>${row.id}</td>
                    <td>${row.fullName}</td>
                    <td>${row.dateTime}</td>
                </tr>
            `).join('')}
        </tbody>
    `;
    return table;
}
