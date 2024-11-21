<template v-if="ok">
  <div class="bg-primary p-3 rounded text-center text-light mb-3">
    <h1>V-ELSE IF</h1>
    <button class="btn btn-dark" @click="nextStep">Bước tiếp theo</button>
    <p v-if="step === 1">Bước 1: Giới thiệu</p>
    <p v-else-if="step === 2">Step 2: Cài đặt</p>
    <p v-else-if="step === 3">Step 3: Thực thi</p>
    <p v-else>Các bước đã hoàn thành!</p>
  </div>
</template>

<style scoped>

</style>
<script setup>
  import {ref} from'vue'; 
  const step = ref(1);
  const nextStep = () => {
    if (step.value < 4) {
      step.value++;
    } else {
      step.value = 1;
    }     
  };
</script>