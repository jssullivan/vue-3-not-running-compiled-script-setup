<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Vue2ComponentDefinedSetup',
  setup() {
    const test = ref(['hello', 'vue', 'team'])

    return {
      test
    }
  }
})
</script>

<template>
  <div>
    <h1>Vue2 Component without script setup</h1>
    <template v-for="item in test">
      <div :key="item">{{ item }}</div>
    </template>
  </div>
</template>
