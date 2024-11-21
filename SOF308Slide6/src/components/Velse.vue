<template v-if="ok">
  <div class="bg-primary p-3 rounded text-center text-light mb-3">
    <h1>V-ELSE</h1>
    <p>Bấm vào OK nhiều lần để chuyển đổi thông điệp</p>
    <button @click="message = !message">OK</button>
    <h1 v-if="message">Xin chúc mừng bạn!</h1>
    <h1 v-else>Rất tiếc, hẹn gặp lại!</h1>
  </div>
</template>

<style scoped>

</style>
<script setup>
  import {ref} from'vue';
  
  const message = ref(true);
</script>