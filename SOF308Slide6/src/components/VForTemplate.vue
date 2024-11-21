<template>
  <div class="bg-primary p-3 rounded text-center text-light mb-3">
    <h1>V-FOR TEMPLATE</h1>
    <div>
      <template v-for="item in items" :key="item.id">
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
      </template>
    </div>
  </div>
</template>

<style scoped>

</style>

<script setup>
  import {ref} from 'vue';    
  const items = ref([
    { id: 1, title: 'Tiêu đề 1', description: 'Mô tả 1...' },
    { id: 2, title: 'Tiêu đề 2', description: 'Mô tả 2...' },
  ]);
  return {items};
</script>