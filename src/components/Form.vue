<template>
<form>
  <div v-for="(item, index) in formConfig"
      :key="index">
    <div v-if="item.type === 'select'">
      select
    </div>
    <div v-if="item.type === 'input'">
      input
    </div>
  </div>
</form>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  formConfig: Array
})

</script>

<style scoped>
a {
  color: #42b983;
}
</style>
