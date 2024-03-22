// JavaScript code
document.getElementById('searchForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  
  // Get selected filter values
  var gender = document.getElementById('genderFilter').value;
  var subject = document.getElementById('subjectFilter').value;
  var university = document.getElementById('universityFilter').value;
  var salary = document.getElementById('salaryFilter').value;

  // Use selected filter values to search teachers and display results
  searchTeachers(gender, subject, university, salary);
});

function searchTeachers(gender, subject, university, salary) {
  // Use PHP or AJAX to send filter values to server and get teacher list
  // Display teacher list in the teacherList div
}

const searchForm = document.getElementById('searchForm');
const resultsDiv = document.getElementById('results');

searchForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const tutorName = document.getElementById('tutorName').value;
    fetchResults(tutorName);
});

function fetchResults(tutorName) {
    // Send tutorName to PHP script using AJAX or fetch API
    // PHP script will query database and return results
    // Display results in table
    const mockData = [
        { id: 1, fullName: "John Doe", dateTime: "2024-03-21 10:00", linkGPS: "http://example.com/gps1" },
        { id: 2, fullName: "Jane Smith", dateTime: "2024-03-22 11:00", linkGPS: "http://example.com/gps2" }
    ];

    displayResults(mockData);
}

function displayResults(data) {
    resultsDiv.innerHTML = "";
    if (data.length === 0) {
        resultsDiv.innerHTML = "<p>No results found</p>";
        return;
    }

    const table = document.createElement('table');
    const headers = ["Id tutor", "Full name", "Date & time", "Link GPS"];
    const headerRow = table.insertRow();
    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });

    data.forEach(rowData => {
        const row = table.insertRow();
        Object.values(rowData).forEach(value => {
            const cell = row.insertCell();
            cell.textContent = value;
        });
    });

    resultsDiv.appendChild(table);
}


document.addEventListener("DOMContentLoaded", function() {
    fetchTutors();
});

function fetchTutors() {
    // Send request to PHP script to fetch tutor data
    fetch("fetch_tutors.php")
    .then(response => response.json())
    .then(data => {
        displayTutors(data);
    })
    .catch(error => {
        console.error('Error fetching tutors:', error);
    });
}

function displayTutors(tutors) {
    const tableBody = document.querySelector("#tutorTable tbody");
    tableBody.innerHTML = "";
    tutors.forEach(tutor => {
        const row = tableBody.insertRow();
        row.innerHTML = `
            <td>${tutor.id}</td>
            <td>${tutor.fullName}</td>
            <td>${tutor.dateTime}</td>
            <td><a href="${tutor.linkGPS}">Link</a></td>
        `;
    });
}
