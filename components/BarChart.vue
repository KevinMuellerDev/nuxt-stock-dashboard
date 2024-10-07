<template>
    <h2 v-if="percent === true">Gross Margin in %LQ</h2>
    <h2 v-else> Net Income TTM</h2>
    <Bar :width="100" :data="data" :options="options" />
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
    props: {
        dataBar: {
            required: true,
            type: Array
        },
        percent: {
            required: false,
            type: Boolean
        }
    },
    data() {
        return {
            data: barChartData(this.dataBar) as ChartData<'bar'>,
            options: this.percent ? barChartOptions(true) as ChartOptions<'bar'> : barChartOptions() as ChartOptions<'bar'>
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

canvas {
    padding-bottom: 16px
}
</style>