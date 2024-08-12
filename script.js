// script.js
$(document).ready(function() {
    $('#calendar').fullCalendar({
        selectable: true,
        dayClick: function(date) {
            $('#date').val(date.format('YYYY-MM-DD'));
        }
    });

    document.getElementById('reportForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const reportData = {
            name: document.getElementById('name').value,
            date: document.getElementById('date').value,
            workDone: document.getElementById('workDone').value,
            challenges: document.getElementById('challenges').value
        };

        fetch('/submit-report', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reportData),
        })
        .then(response => response.json())
        .then(data => {
            alert('Report submitted successfully!');
            document.getElementById('reportForm').reset();
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    });
});