const ctx = document.getElementById('bookingChart').getContext('2d');
const bookingChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Week 1','Week 2','Week 3','Week 4'],
        datasets: [{
            label: 'Bookings',
            data: [120, 150, 180, 200],
            borderColor: '#2196F3',
            backgroundColor: 'rgba(33, 150, 243, 0.2)',
            fill: true,
            tension: 0.3
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: false }
        },
        scales: {
            y: { beginAtZero: true }
        }
    }
});