<template>
  <div class="bg-primary p-3 rounded text-center text-light mb-3">
    <h1>V-FOR</h1>
    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.id }}. {{ item.name }} - Giá: {{ item.price }}
      </li>
    </ul>
    <hr>
    <h1>V-RANGE</h1>
    <ul>
        <li v-for="i in 10">Số {{ i }}</li>
    </ul>
  </div>
</template>

<style scoped>

</style>

<script setup>
  import {ref} from 'vue';    
  const items = ref([
    { id: 1, name: 'Nho', price: '$20' },
    { id: 2, name: 'Táo', price: '$15' },
    { id: 3, name: 'Chuối', price: '$18' },
  ]);
</script>