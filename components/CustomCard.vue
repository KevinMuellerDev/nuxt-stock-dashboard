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
  position: relative;
  background: #011F35;
  padding: 20px 32px;
  border-radius: 16px;
  width:100%;
}
</style>