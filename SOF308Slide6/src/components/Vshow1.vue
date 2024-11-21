<template>
  <div class="bg-primary p-3 rounded text-center text-light mb-3">
    <h1>V-SHOW</h1>
    <div>
      <button class="btn btn-dark" @click="toggleVisibility">Hiển thị/Ẩn </button>
      <p v-show="isVisible">Thông điệp này được chuyển đổi bởi v-show</p>
    </div>
  </div>
</template>

<style scoped>

</style>

<script setup>
  import {ref} from 'vue';
  
  const isVisible = ref(true);
  const toggleVisibility = () => {
    isVisible.value = !isVisible.value;
  }   
  return {isVisible,toggleVisibility};
</script>