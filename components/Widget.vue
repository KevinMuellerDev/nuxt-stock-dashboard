<template>
  <div class="card">
    <img :src="companieData.logo" alt="">
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

<style scoped>
.card {
  display: flex;
  background: #011F35;
  padding: 20px 32px;
  gap: 20px;
  border-radius: 16px;
  width: calc(100% - 64px);
}
</style>