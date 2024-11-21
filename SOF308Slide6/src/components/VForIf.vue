<template>
  <div class="bg-primary p-3 rounded text-center text-light mb-3">
    <h1>V-FOR V-IF</h1>
    <ul>
      <template v-for="item in items" :key="item.id">
        <li v-if="item.visible">
          {{ item.id }}. {{ item.name }} - Giá: {{ item.price }}
        </li>
      </template>
    </ul>
  </div>
</template>

<style scoped>

</style>

<script setup>
  import {ref} from 'vue';    
  const items = ref([
    { id: 1, name: 'Nho', price: '$20', visible: true  },
    { id: 2, name: 'Táo', price: '$15', visible: false  },
    { id: 3, name: 'Chuối', price: '$18',visible: true  },
  ]);
  return {items};
</script>