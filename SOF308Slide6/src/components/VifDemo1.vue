<template>
  <div class="bg-primary p-3 rounded text-center text-light mb-3">
    <h1>V-IF</h1>
    <span v-if="seen">Bạn đang nhìn thấy tôi</span><br>
    <button @click="seen = !seen">Trigger</button>
  </div>
</template>

<style scoped>

</style>
<script setup>
  import {ref} from'vue';
  const seen = ref(true);
</script>