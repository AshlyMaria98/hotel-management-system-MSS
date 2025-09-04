// Weekly Data
const weeklyData = [
    { day: "Monday", occupancy: 60, revenue: 8000 },
    { day: "Tuesday", occupancy: 70, revenue: 9500 },
    { day: "Wednesday", occupancy: 80, revenue: 12000 },
    { day: "Thursday", occupancy: 75, revenue: 12500 },
    { day: "Friday", occupancy: 90, revenue: 14000 },
    { day: "Saturday", occupancy: 85, revenue: 13000 },
    { day: "Sunday", occupancy: 70, revenue: 11000 }
];

// Monthly Data (Week-wise)
const monthlyData = [
    { week: "Week 1", occupancy: 70, revenue: 80000 },
    { week: "Week 2", occupancy: 75, revenue: 90000 },
    { week: "Week 3", occupancy: 80, revenue: 95000 },
    { week: "Week 4", occupancy: 78, revenue: 97000 }
];

// Display weekly table
const weeklyTable = document.getElementById('weekly-report');
weeklyData.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${item.day}</td><td>${item.occupancy}</td><td>${item.revenue}</td>`;
    weeklyTable.appendChild(row);
});

// Display monthly table
const monthlyTable = document.getElementById('monthly-report');
monthlyData.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${item.week}</td><td>${item.occupancy}</td><td>${item.revenue}</td>`;
    monthlyTable.appendChild(row);
});

// Function to create bars for cards
function createBars(containerId, data, maxValue) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    data.forEach(value => {
        const bar = document.createElement('div');
        bar.classList.add('bar');
        const heightPercent = (value / maxValue) * 100;
        bar.style.height = `${heightPercent}%`;
        container.appendChild(bar);
    });
}

// Create bar charts
createBars('occupancy-chart', weeklyData.map(d => d.occupancy), 100);
createBars('revenue-chart', weeklyData.map(d => d.revenue), Math.max(...weeklyData.map(d => d.revenue)));

// Update main value in card
document.getElementById('occupancy').textContent = `${weeklyData[3].occupancy}%`;
document.getElementById('revenue').textContent = `$${weeklyData[3].revenue}`;