<script setup>
import { ref } from 'vue';

const hello_vue_team = ref(['hello', 'vue', 'team'])
</script>

<template>
  <div>
    <h1>Vue3 Component</h1>
    <template v-for="item in hello_vue_team">
      <div :key="item">{{ item }}</div>
    </template>
  </div>
</template>
