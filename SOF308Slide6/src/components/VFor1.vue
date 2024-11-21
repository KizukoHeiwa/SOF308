<template>
  <div class="bg-primary p-3 rounded text-center text-light mb-3">
    <h1>V-FOR</h1>
    <ul>
        <li v-for="st in students">{{ st }}</li>
    </ul>
    <hr>
    <ul>
        <li v-for="(st, index) in students">{{ st }} - Vị trí thứ {{ index }}</li>
    </ul>
  </div>
</template>

<style scoped>

</style>

<script setup>
  import {ref} from 'vue';    
  const students = ref([
    'Lê Văn Tèo', 
    'Nguyễn Thị Tường Vy',
    'Lê Phụng Hiếu Kiên', 
    'Lê Quang Trung'
  ]); 
  return {students};
</script>