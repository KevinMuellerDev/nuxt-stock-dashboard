import { stockService } from '~/service/stockService';

export function lineChartData(netIncome:any) {
    return {
        labels: stockService.order,
        datasets: [
            { label: 'Apple', backgroundColor: 'rgba(57, 218, 255, 1)', data: netIncome[0], borderColor: 'rgba(57, 218, 255, 1)', borderWidth: 1, tension: 0.5 },
            { label: 'Amazon', backgroundColor: 'rgba(49, 191, 226, 1)', data: netIncome[1], borderColor: 'rgba(49, 191, 226, 1)', borderWidth: 1, tension: 0.5 },
            { label: 'Google', backgroundColor: 'rgba(41, 165, 197, 1)', data: netIncome[2], borderColor: 'rgba(41, 165, 197, 1)', borderWidth: 1, tension: 0.5 },
            { label: 'Meta', backgroundColor: 'rgba(33, 138, 168, 1)', data: netIncome[3], borderColor: 'rgba(33, 138, 168, 1)', borderWidth: 1, tension: 0.5 },
            { label: 'Microsoft', backgroundColor: 'rgba(25, 111, 140, 1)', data: netIncome[4], borderColor: 'rgba(25, 111, 140, 1)', borderWidth: 1, tension: 0.5 },
            { label: 'Nvidia', backgroundColor: 'rgba(17, 84, 111, 1)', data: netIncome[5], borderColor: 'rgba(17, 84, 111, 1)', borderWidth: 1, tension: 0.5 },
            { label: 'Tesla', backgroundColor: 'rgba(9, 58, 82, 1)', data: netIncome[6], borderColor: 'rgba(9, 58, 82, 1)', borderWidth: 1, tension: 0.5 },
        ]
    }
}

export function lineChartOptions() {
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
        },
        scales: {
            y: {
                ticks: {
                    color: 'white',
                    font: {
                        size: 8,
                    },
                },
                grid: {
                    color: 'rgba(158, 158, 158, 1)'
                }
            },
            x: {
                ticks: {
                    color: 'white',
                    font: {
                        size: 10,
                    },
                },
                grid: {
                    color: 'rgba(158, 158, 158, 1)'
                }
            },
        },
        animation: {
            duration: 1000, // Dauer der Animation in ms
            easing: 'easeInOutQuart', // Geschmeidige Animation
          }
    }
}