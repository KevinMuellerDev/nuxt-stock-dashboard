<template>
    <div class="card">
      <slot></slot>
    </div>
  </template>
  
  <script>
  export default {
    name: "CustomCard",
  };
  </script>
  
  <style scoped>
  .card {
    background: #011F35;
    padding: 20px 32px;
    gap: 20px;
    border-radius: 16px;
  }
  </style>