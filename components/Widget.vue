<template>
  <div class="widg-outer-frame">
    <div class="widg-title">
      <img :src="companieData.logo" alt="">
      <h2>{{ companieData.name }}</h2>
    </div>

  </div>
</template>

<script>
export default {
  name: "CustomCard",
  props: {
    companieData: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
  @use "~/assets/scss/widget.scss"
</style>