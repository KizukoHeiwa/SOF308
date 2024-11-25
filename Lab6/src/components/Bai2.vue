<template>
    <div class="bg-success p-3 rounded text-center text-light mb-3">
        <h3>Nhập tháng của bạn: </h3>
        <input type="number" v-model="month" class="mb-3" min="1" max="12"/>
        <p v-if="month < 1 || month > 12" style="color: yellow">Vui lòng nhập tháng từ 1 đến 12 !</p>
        <p v-else-if="month >= 1 && month <= 3">Mùa Xuân</p>
        <p v-else-if="month <= 6">Mùa Hè</p>
        <p v-else-if="month <= 9">Mùa Thu</p>
        <p v-else>Mùa Đông</p>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    const month = ref('1');
</script>