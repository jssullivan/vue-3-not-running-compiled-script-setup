<script setup>
import { ref } from 'vue';

const test = ref(['hello', 'vue', 'team'])
</script>

<template>
  <div>
    <h1>Vue3 Component</h1>
    <template :key="item" v-for="item in test">
      <div>{{ item }}</div>
    </template>
  </div>
</template>
