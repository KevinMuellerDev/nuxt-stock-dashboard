<template>
    <h2>Revenue Breakdown</h2>
    <Doughnut id="dc" :data="data" :options="options" />
</template>

<script lang="ts">
import { Chart as ChartJS, ArcElement, Tooltip, Legend, type ChartOptions, type ChartData } from 'chart.js';
import { Doughnut } from 'vue-chartjs';
import { pieChartOptions } from '~/types/pieChart';
import { pieChartData } from '~/types/pieChart';

ChartJS.register(ArcElement, Tooltip, Legend);

export default {
    name: 'PieChart',
    components: {
        Doughnut
    },
    props: {
        revBreakdown: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            data: pieChartData(this.revBreakdown) as ChartData<'doughnut'>,
            options: pieChartOptions() as ChartOptions<'doughnut'>
        }
    }
}
</script>

<style scoped lang="scss">
h2 {
    margin: 0 0 -24px;
    color: white;
    font-weight: 500;
}

canvas {
    position: relative;
    width: 100%;
    height: 100%;

}
</style>