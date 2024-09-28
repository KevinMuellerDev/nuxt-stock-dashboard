<template>
  <div class="widg-outer-frame">
    <div class="widg-title">
      <img :src="companieData.logo" alt="">
      <h2>{{ companieData.name }}</h2>
    </div>
    <div class="widg-content">
      <div class="widg-rev-info">
        <span>Revenue Q3 2024</span>
      </div>
      <div class="widg-rev-data">
        <div class="widg-rev-left">
          <span v-if="revenue.length">{{ totalRevenue }}</span>
          <span v-else>Lädt...</span>
        </div>
        <div class="widg-rev-right">
          <span >test</span>
          <span>Lädt...</span>
        </div>

      </div>
      <div class="widg-currency">In Bill USD</div>
    </div>
  </div>
</template>

<script>
import { stockService } from "./service/stockService.ts";
export default {
  name: "CustomCard",
  props: {
    companieData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      revenue: []
    }
  },
  async created() {
    this.revenue = await stockService.getRevenue(this.companieData.abbreviation, this.companieData.revenueRow);
  },
  computed: {
    totalRevenue() {
      // Berechnet die Summe nur, wenn `companies` Daten hat
      return ((this.revenue.reduce((acc, num) => acc + num, 0)) / this.revenue.length).toFixed(2);
    }
  }


};
</script>

<style scoped lang="scss">
@use "~/assets/scss/widget.scss"
</style>