<template>
    <div class="col-12 my-3 text-center">
        <p>{{ message }}</p>
        <button class="btn btn-dark" @click="updateMessage">Thay đổi thông điệp</button>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    const message = ref('Thông điệp ban đầu');
    const updateMessage = () => {
    message.value = 'Thông điệp đã được thay đổi!';
    };
</script>