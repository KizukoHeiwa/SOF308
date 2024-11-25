<template>
  <div class="bg-primary p-3 rounded text-center text-light mb-3">
    <h3>Nhập điểm của bạn:</h3>
    <input type="number" v-model="score" min="0" max="10" />
    <p v-if="score >= 9">Xuất sắc</p>
    <p v-else-if="score >= 8">Giỏi</p>
    <p v-else-if="score >= 6.5">Khá</p>
    <p v-else-if="score >= 5">Trung bình</p>
    <p v-else>Yếu</p>
    <span class="test" v-for="i in score">{{ i }}
      <span v-if="i === score"> = {{ score*1 + (score*(score-1))/2 }}</span>
      <span v-else> + </span>
    </span>
  </div>
</template>

<style scoped>

</style>

<script setup>
  import { ref } from 'vue';
  const score = ref(0);
</script>
