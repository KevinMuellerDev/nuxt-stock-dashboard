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


useHead({
  title: "title"
})

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
      netIncome: [] as any[]
    }
  },
  methods:{

  },
  async created() {
    this.companies = stockService.companies as Company[];
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
