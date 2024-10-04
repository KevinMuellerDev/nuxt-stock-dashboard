export function pieChartData(data: number[]) {
    return {
        labels: ['Apple', 'Amazon', 'Google', 'Meta', 'Microsoft', 'Nvidia', 'Tesla'],
        datasets: [
            {
                data: data,
                backgroundColor: [
                    'rgba(57, 218, 255, 1)',
                    'rgba(49, 191, 226, 1)',
                    'rgba(41, 165, 197, 1)',
                    'rgba(33, 138, 168, 1)',
                    'rgba(25, 111, 140, 1)',
                    'rgba(17, 84, 111, 1)',
                    'rgba(9, 58, 82, 1)',
                ]
            }
        ]
    }
}

export function pieChartOptions() {
    return {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: {
                position: 'right',
                padding: 20,
                labels: {
                    color: 'white'
                }
            },
            datalabels:false
        },
        animation: {
            duration: 1000, // Dauer der Animation in ms
            easing: 'easeInOutQuart', // Geschmeidige Animation
        }
    }
}