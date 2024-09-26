<template>
  <div id="app">
    <div class="head">
      <div class="half-elipse"></div>
      <h1>The Magnificent Seven Companies</h1>
    </div>
    <div class="context">
      <CustomCard>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, accusamus aut dignissimos dicta nemo
          maiores, magni eum qui nam cumque consequatur molestiae tenetur! Vel, voluptatibus tempore. Aliquid suscipit
          dolorum voluptates!</p>
      </CustomCard>
    </div>

  </div>
</template>

<script>
import CustomCard from './components/CustomCard.vue';
export default {
  name: 'App',
  components: {
    CustomCard
  }
}
</script>

<style lang="scss">
@use "~/assets/scss/main.scss"
</style>
