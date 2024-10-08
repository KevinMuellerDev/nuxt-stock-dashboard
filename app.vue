<template>
  <div id="app">
    <div class="head">
      <div class="half-elipse"></div>
      <h1>The Magnificent Seven Companies</h1>
    </div>
    <div class="context">
      <div class="ctx-top" ref="ctxTop">
        <div id="widget-list" class="widgets" ref="widgets" v-on:mousedown="grabbed($event)" v-on:mouseup="grabbable"
             v-on:mousemove="moveWidgets($event)">
          <Widget v-for="companie in companies" v-bind:companieData="companie"></Widget>
        </div>
      </div>
      <div class="ctx-mid" ref="chartContainer">
        <CustomCard>
          <LineChart v-if="netIncome.length == 7" :netIncome=netIncome />
        </CustomCard>
        <CustomCard>
          <PieChart v-if="revenueBreakdown.length == 7" :revBreakdown=revenueBreakdown />
        </CustomCard>
      </div>
      <div class="ctx-bottom" ref="chartContainerBot">
        <CustomCard>
          <BarChart  v-if="netIncomeTTM.length == 7" :data-bar="netIncomeTTM" />
        </CustomCard>
        <CustomCard>
          <BarChart v-if="grossMarginQuart.length == 7" :data-bar="grossMarginQuart" :percent="true" />
        </CustomCard>
        <CustomCard>

        </CustomCard>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import CustomCard from './components/CustomCard.vue';
import Widget from './components/Widget.vue'
import { stockService } from './service/stockService';



interface Company {
  abbreviation: string;
  netIncomeRow: number;
  grossMarginRow: number;
}

export default {
  name: 'App',
  title: 'title',
  components: {
    CustomCard,
    Widget,
  },
  data() {
    return {
      companies: [] as Company[],
      netIncome: [] as number[][],
      revenueBreakdown: [] as string[],
      netIncomeTTM: [] as number[],
      grossMarginQuart: [] as number[],
      slider: document.querySelector('.ctx-top') as HTMLElement,
      widgets: document.querySelector('.widgets') as HTMLElement,
      xPos: 0 as number,
      isClicked: false as boolean,
      dragSpeed: 0.7 as number
    }
  },
  methods: {
    grabbable() {
      this.isClicked = false;
      const ctxTop = this.$refs.ctxTop as HTMLElement;
      ctxTop.style.cursor = 'grab';
    },

    grabbed(event: MouseEvent) {
      this.isClicked = true;
      const ctxTop = this.$refs.ctxTop as HTMLElement;
      const widgets = this.$refs.widgets as HTMLElement;

      const rect = ctxTop.getBoundingClientRect();
      this.xPos = event.clientX - rect.left - widgets.offsetLeft;

      ctxTop.style.cursor = 'grabbing';
    },

    moveWidgets(event: MouseEvent) {
      if (!this.isClicked) return;
      event.preventDefault();
      const ctxTop = this.$refs.ctxTop as HTMLElement;
      const widgets = this.$refs.widgets as HTMLElement;

      if (!widgets) {
        console.error('widgets element not found');
        return;
      }

      const rect = ctxTop.getBoundingClientRect();
      const newLeft = event.clientX - rect.left - this.xPos;

      if (newLeft < -480) {
        widgets.style.left = `-480px`;
      } else if (newLeft > -10) {
        widgets.style.left = `-10px`
      } else {
        widgets.style.left = `${newLeft}px`;
      }
    },


  },
  async created() {
    window.addEventListener("mouseup", () => {
      this.isClicked = false;
    });

    this.companies = stockService.companies as Company[];

    // Retrieving Net income data
    const netIncomePromises = this.companies.map(async (abbr) => {
      const data = await stockService.getRevenue(abbr.abbreviation, abbr.netIncomeRow);
      return data;
    });
    this.netIncome = await Promise.all(netIncomePromises);

    // Retrieving Revenue breakdown data
    const revenueBreakdownPromises = this.netIncome.map(async (element) => {
      const data = element.reduce((acc: number, num: number) => acc + num, 0).toFixed(2);
      return data
    })
    this.revenueBreakdown = await Promise.all(revenueBreakdownPromises);

    // Retrieving Net income TTM data
    const netIncomeTTMPromises = this.companies.map(async (abbr) => {
      const data = (await stockService.getRevenue(abbr.abbreviation, abbr.netIncomeRow)).slice(-4);
      const processedData =Math.round( (data.reduce((acc: number, num: number) => acc + num, 0)*100)/100)
      return processedData;
    });
    this.netIncomeTTM = await Promise.all(netIncomeTTMPromises);

    // Retrieving Gross Margin from last Quartal

    const grossMarginQuartPromises = this.companies.map(async (abbr) =>{
      const data = (await stockService.getRevenue(abbr.abbreviation, abbr.netIncomeRow)).slice(-1);
      const processedData =Math.round( (data.reduce((acc: number, num: number) => acc + num, 0)*100)/100)
      return processedData
    })
    this.grossMarginQuart = await Promise.all(grossMarginQuartPromises);


  },
  mounted() {
    setTimeout(() => {
      const chartContainer = this.$refs.chartContainer as HTMLElement;
      const chartContainerBot = this.$refs.chartContainerBot as HTMLElement;
      if (chartContainer && chartContainerBot) {
        chartContainer.classList.add('show');
        chartContainerBot.classList.add('show');
      }
    }, 100);
  }
}

</script>

<style lang="scss">
@use "~/assets/scss/main.scss"
</style>
