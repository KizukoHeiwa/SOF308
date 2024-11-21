<template v-if="ok">
  <div class="bg-primary p-3 rounded text-center text-light mb-3">
    <h1>V-IF</h1>
    <h1>Title</h1>
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
  </div>
</template>

<style scoped>

</style>
<script setup>
  import {ref} from 'vue';
  const ok = ref(false);

</script>