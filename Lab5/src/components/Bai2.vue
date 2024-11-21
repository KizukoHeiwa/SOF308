<template>
    <div class="col-12 my-3 text-center">
        <input v-model="userInput" placeholder="Nhập dữ liệu vào đây" />
        <p>Giá trị bạn nhập: {{ userInput }}</p>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    const userInput = ref('FPL');
</script>