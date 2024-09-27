<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CustomCard",
};

import { stockService } from '~/service/stockService';
const widgetRevenue= await stockService.getRevenue('$AAPL')
console.log(widgetRevenue);
</script>

<style scoped>
.card {
  background: #011F35;
  padding: 20px 32px;
  gap: 20px;
  border-radius: 16px;
  width: calc(100% - 64px);
}
</style>