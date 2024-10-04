export function barChartData(data: number[]) {
    return {
        labels: ['Apple', 'Amazon', 'Google', 'Meta', 'Microsoft', 'Nvidia', 'Tesla'],

        datasets: [
            {
                label: 'Data One',
                backgroundColor: [
                    'rgba(57, 218, 255, 1)',
                    'rgba(49, 191, 226, 1)',
                    'rgba(41, 165, 197, 1)',
                    'rgba(33, 138, 168, 1)',
                    'rgba(25, 111, 140, 1)',
                    'rgba(17, 84, 111, 1)',
                    'rgba(9, 58, 82, 1)',
                ],
                data: data
            }
        ]
    }
}

export function barChartOptions(){
    return{
        responsive: true,
        maintainAspectRatio: false,
        indexAxis:'y',
        plugins:{
            legend:{
                display:false
            },
            datalabels: {
                anchor: 'end',    // Die Position des Labels (am Ende des Balkens)
                align: 'end',     // Die Ausrichtung des Labels
                formatter: (value:number) => value,  // Formatierung des Labels (z.B. um den Wert als Zahl anzuzeigen)
                color: 'white',    // Farbe des Labels
                font: {
                    weight: '400',
                    size:'11px'
                },
                clamp:true,
                clip:true
            },
        },
        scales:{
            y:{
                ticks:{
                    color:'white',
                    stepSize:50
                },
                grid:{
                    color:'rgba(158, 158, 158, 1)'
                }
            },
            x:{
                max:400,
                ticks:{
                    color:'white',
                    stepSize:50
                },
                grid:{
                    color:'rgba(158, 158, 158, 1)'
                }
            }
        }
    }
}
