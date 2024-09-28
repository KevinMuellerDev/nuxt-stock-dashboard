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