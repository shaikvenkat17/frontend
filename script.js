// Sample alerts data
const alerts = [
    { type: 'Unsafe driving', timestamp: '1 March 2023 at 21:30', driver: 'Ramesh/KA12A3456' },
    { type: 'Distracted driver', timestamp: '1 March 2023 at 21:30', driver: 'Suresh/MH12A3456' }
    // Add more alerts as needed
];

// Function to search alerts
function searchAlerts() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredAlerts = alerts.filter(alert =>
        alert.type.toLowerCase().includes(searchInput) ||
        alert.driver.toLowerCase().includes(searchInput)
    );

    displayAlerts(filteredAlerts);
}

// Function to search alerts by date range
function searchByDateRange() {
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const filteredAlerts = alerts.filter(alert =>
        alert.timestamp >= startDate && alert.timestamp <= endDate
    );

    displayAlerts(filteredAlerts);
}

// Function to display alerts
function displayAlerts(alertsToDisplay) {
    const alertsContainer = document.getElementById('alertsContainer');
    alertsContainer.innerHTML = ''; // Clear previous alerts

    alertsToDisplay.forEach(alert => {
        const alertDiv = document.createElement('div');
        alertDiv.innerHTML = `
            <p>${alert.type} ${alert.timestamp}</p>
            <p>Driver: ${alert.driver}</p>
        `;
        alertsContainer.appendChild(alertDiv);
    });
}

// Function to mark an alert as false alarm
function markAsFalseAlarm() {
    // Implement logic to mark the selected alert as false alarm
    console.log('Marked as False Alarm');
}
