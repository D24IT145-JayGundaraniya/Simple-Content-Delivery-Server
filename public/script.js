function fetchLogs() {
    fetch('/logs')
        .then(response => response.json())
        .then(data => {
            const logsElement = document.getElementById('logs');
            logsElement.textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            console.error('Error fetching logs:', error);
        });
}