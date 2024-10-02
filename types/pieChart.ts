import { stockService } from '~/service/stockService';

export function pieChartData(data:number[]) {
    return {
        labels: ['Apple','Amazon','Google','Meta','Microsoft','Nvidia','Tesla'],
        datasets: [
            {
                data: data
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
        },
        animation: {
            duration: 1000, // Dauer der Animation in ms
            easing: 'easeInOutQuart', // Geschmeidige Animation
          }
    }
}