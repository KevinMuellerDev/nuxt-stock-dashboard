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
        <CustomCard />
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

let companies = [];

export default {
  name: 'App',
  components: {
    CustomCard,
    Widget
  },
  data() {
    return {
      companies: []
    }
  },

  async created() {
    this.data = await stockService.getRevenue('$AAPL');
    console.log("Loaded following data:", this.data);
    this.companies = stockService.companies;
  }
}
</script>

<style lang="scss">
@use "~/assets/scss/main.scss"
</style>
