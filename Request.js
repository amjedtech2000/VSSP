document.addEventListener("DOMContentLoaded", function() {
    fetchRequests();
});

function fetchRequests() {
    fetch("fetch_requests.php")
    .then(response => response.json())
    .then(data => {
        displayRequests(data);
    })
    .catch(error => {
        console.error('Error fetching requests:', error);
    });
}

function displayRequests(data) {
    const requestsDiv = document.getElementById("requestsDiv");
    requestsDiv.innerHTML = "";

    // Create table for my requests
    const myRequestsTable = createTable(data.myRequests, "My Requests");
    requestsDiv.appendChild(myRequestsTable);

    // Create table for available tutors
    const availableTutorsTable = createTable(data.availableTutors, "Available Tutors");
    requestsDiv.appendChild(availableTutorsTable);
}

function createTable(data, tableName) {
    const table = document.createElement("table");
    table.innerHTML = `
        <caption>${tableName}</caption>
        <thead>
            <tr>
                <th>Date & Time</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            ${data.map(row => `
                <tr>
                    <td>${row.dateTime}</td>
                    <td>
                        <button onclick="acceptRequest(${row.id})">Accept</button>
                        <button onclick="rejectRequest(${row.id})">Reject</button>
                    </td>
                </tr>
            `).join('')}
        </tbody>
    `;
    return table;
}

function acceptRequest(requestId) {
    // Logic to accept the request
    console.log("Accepted request with ID:", requestId);
}

function rejectRequest(requestId) {
    // Logic to reject the request
    console.log("Rejected request with ID:", requestId);
}
