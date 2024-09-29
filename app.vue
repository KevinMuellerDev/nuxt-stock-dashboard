<template>
  <div id="app">
    <div class="head">
      <div class="half-elipse"></div>
      <h1>The Magnificent Seven Companies</h1>
    </div>
    <div class="context">
      <div class="ctx-top">
        <Widget v-for="companie in companies" v-bind:companieData="companie"></Widget>
      </div>
      <div class="ctx-mid">
        <CustomCard>
          <LineChart v-if="this.netIncome.length == 7" :netIncome=this.netIncome />
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

<script>
import CustomCard from './components/CustomCard.vue';
import Widget from './components/Widget.vue'
import { stockService } from './service/stockService';
import LineChart from './components/LineChart.vue';

let companies;

useHead({
  title: "title"
})
export default {

  name: 'App',
  components: {
    CustomCard,
    Widget,
  },
  data() {
    return {
      companies: [],
      netIncome: []
    }
  },

  async created() {
    this.companies = await stockService.companies;
    this.companies.forEach(async abbr => {
      const data = await stockService.getRevenue(abbr.abbreviation,abbr.netIncomeRow);
      this.netIncome.push(data)
    });
  }
}


</script>

<style lang="scss">
@use "~/assets/scss/main.scss"
</style>
