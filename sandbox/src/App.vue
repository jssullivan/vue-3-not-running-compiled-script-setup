<script setup>
import { ref } from 'vue';
import {Vue2ComponentSetup, Vue2ComponentDefinedSetup} from 'vue2-compiled'
import {Vue3Component} from 'vue3-compiled'

const renderVue3Component = ref(false);
const renderVue2ComponentDefinedSetup = ref(false);
const renderVue2Component = ref(false);

</script>

<template>
  <div class="">
    <div>
      <p>Example of Mounting Vue 2/3 Compiled components with Script Setup under Vue compat mode</p>
      <button @click="renderVue3Component = true">Mount Vue 3 Script Setup Compiled Component (works)</button>
      <button @click="renderVue2ComponentDefinedSetup = true">Mount Vue 2 defineComponent Compiled Component (works)</button>
      <button @click="renderVue2Component = true">Mount Vue 2 Script Setup Compiled Component (will crash)</button>
    </div>
  <div v-if="renderVue3Component" > 
    <p>Vue 3 Compiled Component renders correctly</p>
    <Vue3Component/>
  </div>

  <div v-if="renderVue2ComponentDefinedSetup"> 
    <p>Vue 2 Compiled Component renders correctly, however there is a warning about "_setupProxy"</p>
    <Vue2ComponentDefinedSetup />

  </div>
  <div v-if="renderVue2Component" > 
    <p>This crashes see console, the variables defined in script setup are unavailable in the template</p>
    <Vue2ComponentSetup />
  </div>
</div>

</template>

<style>
#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
  display: flex;
  flex-direction: column;
}
</style>
