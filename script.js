// Patient data
let patients = [
    { id: 1, name: "Niranjana K.D", age: 30, condition: "Flu" },
    { id: 2, name: "Avani M.U", age: 25, condition: "Cold" },
    // Add more patients here
];

// Function to display patients
function displayPatients(patientArray) {
    const patientList = document.getElementById("patient-list");
    patientList.innerHTML = '';  // Clear existing rows

    patientArray.forEach(patient => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${patient.id}</td>
            <td>${patient.name}</td>
            <td>${patient.age}</td>
            <td>${patient.condition}</td>
        `;
        patientList.appendChild(row);
    });
}

// Initial display
displayPatients(patients);

// Add patient form submission
document.querySelector("form").addEventListener("submit", event => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const condition = document.getElementById("condition").value;
    const newPatient = { id: patients.length + 1, name, age, condition };
    patients.push(newPatient);
    displayPatients(patients);  // Refresh the list
});

// Search functionality
document.getElementById("search-button").addEventListener("click", () => {
    const searchValue = document.getElementById("search").value.toLowerCase();
    const filteredPatients = patients.filter(patient =>
        patient.name.toLowerCase().includes(searchValue)
    );
    displayPatients(filteredPatients);  // Display filtered list
});

// Optional: Allow pressing Enter to search
document.getElementById("search").addEventListener("keypress", (event) => {
    if (event.key === 'Enter') {
        document.getElementById("search-button").click();
    }
});
