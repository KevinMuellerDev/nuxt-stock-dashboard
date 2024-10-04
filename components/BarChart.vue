<template>
    <h2>Net Income TTM</h2>
    <Bar :width="392" :data="data" :options="options" />
</template>

<script lang="ts">
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
    type ChartData,
    type ChartOptions
} from 'chart.js'
import { Bar } from 'vue-chartjs'
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { barChartData, barChartOptions } from '~/types/barChart';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels)

export default {
    name: 'App',
    components: {
        Bar
    },
    props:{
        grossMargin:{
            required:true,
            type:Array
        }
    },
    data() {
        return {
            data: barChartData(this.grossMargin) as ChartData<'bar'>,
            options: barChartOptions() as ChartOptions<'bar'>
        }
    }
}

</script>

<style lang="scss" scoped>
h2 {
    color: white;
    margin: 0 0 10px;
    font-weight: 500;
}
</style>