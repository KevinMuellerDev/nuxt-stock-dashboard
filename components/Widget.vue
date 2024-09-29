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
          <span v-if="this.revenue.length">{{ lastRevenue }}</span>
          <span v-else>Lädt...</span>
        </div>
        <div class="widg-rev-right">
          <span v-if="this.revenue.length" v-bind:style="this.colorValue > 0 ? 'color: green' : 'color: red'"> {{
            revenueDiff }} </span>
          <span v-else>Lädt...</span>
          <span v-if="this.revenue.length" v-bind:style="this.colorValue > 0 ? 'color: green' : 'color: red'"> {{
            grossMarginDiff }} </span>
          <span v-else>Lädt...</span>
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
      revenue: [],
      percentageDifference: 0,
      colorValue: 0
    }
  },
  async created() {
    this.revenue = await stockService.getRevenue(this.companieData.abbreviation, this.companieData.revenueRow);
  },
  computed: {
    lastRevenue() {
      return this.revenue[this.revenue.length - 1];
    },

    revenueDiff() {
      this.colorValue = (this.revenue[this.revenue.length - 1] - this.revenue[this.revenue.length - 2]).toFixed(2);
      if (this.colorValue >= 0)
        return ('+' + this.colorValue) + '\u{2191}'
      return this.colorValue + ' \u{2193}';
    },

    grossMarginDiff() {
      const absoluteDifference = (this.revenue[this.revenue.length - 1] - this.revenue[this.revenue.length - 2]).toFixed(2);      
      this.percentageDifference = ((absoluteDifference / this.revenue[this.revenue.length - 2]) * 100).toFixed(2);
      if (absoluteDifference >= 0) {
        return `+${this.percentageDifference} \u{0025}`;
      }
      return `${this.percentageDifference} \u{0025}`;
    }
  }


};
</script>

<style scoped lang="scss">
@use "~/assets/scss/widget.scss"
</style>