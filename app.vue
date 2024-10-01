<template>
  <div id="app">
    <div class="head">
      <div class="half-elipse"></div>
      <h1>The Magnificent Seven Companies</h1>
    </div>
    <div class="context">
      <div class="ctx-top" ref="ctxTop">
        <div class="widgets" ref="widgets" v-on:mousedown="grabbed($event)" v-on:mouseup="grabbable"
          v-on:mousemove="moveWidgets($event)">
          <Widget v-for="companie in companies" v-bind:companieData="companie"></Widget>
        </div>
      </div>
      <div class="ctx-mid" ref="chartContainer">
        <CustomCard>
          <LineChart v-if="netIncome.length == 7" :netIncome=netIncome />
        </CustomCard>
        <CustomCard />
      </div>
      <div class="ctx-bottom">
        <CustomCard />
        <CustomCard />
        <CustomCard />
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
      netIncome: [] as any[],
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
      console.log(newLeft);

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
    this.companies.forEach(async abbr => {
      const data = await stockService.getRevenue(abbr.abbreviation, abbr.netIncomeRow);
      this.netIncome.push(data)
    });
  },
  mounted() {
    setTimeout(() => {
      const chartContainer = this.$refs.chartContainer as HTMLElement;
      if (chartContainer) {
        chartContainer.classList.add('show');
      }
    }, 100);
  }
}

</script>

<style lang="scss">
@use "~/assets/scss/main.scss"
</style>
