<template>
    <h2>Revenue last 3 Years</h2>
    <Line :width="656" :height="270" :data="data" :options="options" />
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
    type ChartOptions,
    type ChartData,
} from 'chart.js'
import { Line } from 'vue-chartjs'
import { lineChartData, lineChartOptions } from '~/assets/config/lineChart';

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
            data: lineChartData(this.netIncome) as ChartData<'line'>,
            options: lineChartOptions() as ChartOptions<'line'>,
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