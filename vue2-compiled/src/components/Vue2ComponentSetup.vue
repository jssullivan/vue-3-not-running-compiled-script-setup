<script setup>
import { ref } from 'vue';
console.log('This setup is ran');
const hello_vue_team = ref(['hello', 'vue', 'team'])
</script>

<template>
  <div>
    <h1>Vue2 Component (Crashes)</h1>
    <template v-for="item in hello_vue_team">
      <div :key="item">{{ item }}</div>
    </template>
  </div>
</template>
