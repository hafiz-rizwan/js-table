function generateTable() {
    let number = parseInt(document.getElementById("numberInput").value);
    let tableContainer = document.getElementById("tableContainer");

    if (isNaN(number) || number < 1 || number > 20) {
        alert("Please enter a valid number between 1 and 20.");
        return;
    }

    let tableHTML = "<h2>Multiplication Table for " + number + "</h2>";
    tableHTML += "<table border='1'>";
    for (let i = 1; i <= 10; i++) {
        tableHTML += "<tr><td>" + number + " x " + i + "</td><td>" + (number * i) + "</td></tr>";
    }
    tableHTML += "</table>";
    tableContainer.innerHTML = tableHTML;
}
