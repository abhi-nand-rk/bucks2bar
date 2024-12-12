// inout with id "username" on change
document.getElementById('username').addEventListener('keyup', function () {
    var username = document.getElementById('username').value;
    // regex to check if username has at least 1 capital letter, 1 special character, 1 number and is at least 8 characters long
    var regex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*~])(?=.{8,})/;
    if (regex.test(username)) {
        document.getElementById('username').style.borderColor = 'green';
    } else {
        document.getElementById('username').style.borderColor = 'red';
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('myBarChart').getContext('2d');
    const myBarChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [{
                label: 'Income',
                data: [],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            },
            {
                label: 'Expenses',
                data: [],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    function updateChart() {
        const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
        const incomeData = [];
        const expensesData = [];

        months.forEach(month => {
            const income = document.getElementById(`${month}-income`).value || 0;
            const expenses = document.getElementById(`${month}-expenses`).value || 0;
            incomeData.push(parseFloat(income));
            expensesData.push(parseFloat(expenses));
        });

        myBarChart.data.datasets[0].data = incomeData;
        myBarChart.data.datasets[1].data = expensesData;
        myBarChart.update();
    }

    // Update the chart when the page loads
    updateChart();

    // Add event listeners to update the chart when input values change
    document.querySelectorAll('input').forEach(input => {
        input.addEventListener('input', updateChart);
    });

    document.getElementById('download').addEventListener('click', function () {
        const link = document.createElement('a');
        link.href = document.getElementById('myBarChart').toDataURL('image/png');
        link.download = 'chart.png';
        link.click();
    });
});