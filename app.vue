<template>
  <div id="app">
    <div class="head">
      <div class="half-elipse"></div>
      <h1>The Magnificent Seven Companies</h1>
    </div>
    <div class="context">
      <div class="ctx-top">
        <CustomCard />
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
import { stockService } from './service/stockService';
export default {
  name: 'App',
  components: {
    CustomCard
  },

  async created() {
    this.data = await stockService.getRevenue('$AAPL');
    console.log("Loaded following data:", this.data);

  },
}
</script>

<style lang="scss">
@use "~/assets/scss/main.scss"
</style>
