<template>
    <h2>Revenue last 3 Years</h2>
    <Line :data="data" :options="options" />
</template>

<script lang="ts">
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    plugins,
    type ChartOptions,
    type ChartData,
} from 'chart.js'
import { Line } from 'vue-chartjs'
import { stockService } from '~/service/stockService';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)


export default {
    name: 'App',
    components: {
        Line
    },
    props: {
        netIncome: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            data: {
                labels: stockService.order,
                datasets: [
                    { label: 'Apple', backgroundColor: 'rgba(57, 218, 255, 1)', data: this.netIncome[0], borderColor: 'rgba(57, 218, 255, 1)', borderWidth: 1, tension: 0.5 },
                    { label: 'Amazon', backgroundColor: 'rgba(49, 191, 226, 1)', data: this.netIncome[1], borderColor: 'rgba(49, 191, 226, 1)', borderWidth: 1, tension: 0.5 },
                    { label: 'Google', backgroundColor: 'rgba(41, 165, 197, 1)', data: this.netIncome[2], borderColor: 'rgba(41, 165, 197, 1)', borderWidth: 1, tension: 0.5 },
                    { label: 'Meta', backgroundColor: 'rgba(33, 138, 168, 1)', data: this.netIncome[3], borderColor: 'rgba(33, 138, 168, 1)', borderWidth: 1, tension: 0.5 },
                    { label: 'Microsoft', backgroundColor: 'rgba(25, 111, 140, 1)', data: this.netIncome[4], borderColor: 'rgba(25, 111, 140, 1)', borderWidth: 1, tension: 0.5 },
                    { label: 'Nvidia', backgroundColor: 'rgba(17, 84, 111, 1)', data: this.netIncome[5], borderColor: 'rgba(17, 84, 111, 1)', borderWidth: 1, tension: 0.5 },
                    { label: 'Tesla', backgroundColor: 'rgba(9, 58, 82, 1)', data: this.netIncome[6], borderColor: 'rgba(9, 58, 82, 1)', borderWidth: 1, tension: 0.5 },
                ]
            } as ChartData<'line'>,
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        position: 'right'
                    }
                }
            } as ChartOptions<'line'>
        }
    },
    async created() {
        console.log(this.netIncome);
    }
}

</script>

<style scoped lang="css">
h2 {
    color: white;
    margin: 0 0 10px;
    font-weight: 500;
}
</style>