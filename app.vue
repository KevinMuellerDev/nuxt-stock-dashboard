<template>
  <div id="app">
    <div class="head">
      <div class="half-elipse"></div>
      <h1>The Magnificent Seven Companies</h1>
    </div>
    <div class="context">
      <div class="ctx-top" ref="ctxTop">
        <div class="cards" ref="cards" v-on:mousedown="grabbed($event)" v-on:mouseup="grabbable"
             v-on:mousemove="moveWidgets($event)">
          <Widget v-for="companie in companies" v-bind:companieData="companie"></Widget>
        </div>
      </div>
      <div class="ctx-mid">
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
      cards: document.querySelector('.cards') as HTMLElement,
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
      const cards = this.$refs.cards as HTMLElement;

      const rect = ctxTop.getBoundingClientRect();
      this.xPos = event.clientX - rect.left - cards.offsetLeft;
      console.log(this.xPos);

      ctxTop.style.cursor = 'grabbing';
    },

    moveWidgets(event: MouseEvent) {
      if (!this.isClicked) return;
      event.preventDefault();
      const ctxTop = this.$refs.ctxTop as HTMLElement;
      const cards = this.$refs.cards as HTMLElement;

      if (!cards) {
        console.error('Cards element not found');
        return;
      }

      const rect = ctxTop.getBoundingClientRect();
      const newLeft = event.clientX - rect.left - this.xPos;
      console.log(newLeft);

      if (newLeft < -480) {
        cards.style.left = `-480px`;
      }else if(newLeft > -10){
        cards.style.left = `-10px`
      } else{
        cards.style.left = `${newLeft}px`;
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
  }
}

</script>

<style lang="scss">
@use "~/assets/scss/main.scss"
</style>
