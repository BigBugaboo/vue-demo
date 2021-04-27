<template>
  <Form :formConfig="[{ type: 'input' }, { type: 'select' }]" />
</template>

<script setup>
import Form from './components/form.vue'
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
