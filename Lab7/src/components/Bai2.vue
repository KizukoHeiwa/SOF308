<template>
    <div v-if="!isLoggedIn" class="p-3 mb-3 col-sm-4 m-auto rounded-3 bg-success text-light">
        <h3 class="text-center">Form Đăng nhập</h3>
        <form @submit.prevent="login">
            <div class="mb-3 mt-3">
                <label>Email:</label>
                <input type="email" class="form-control" v-model="email" placeholder="Nhập email">
                <p v-if="emailError" style="color: yellow;">{{ emailError }}</p>
            </div>
            <div class="mb-3">
                <label>Mật khẩu:</label>
                <input type="password" class="form-control" v-model="password" placeholder="Nhập mật khẩu">
                <p v-if="passwordError" style="color: yellow;">{{ passwordError }}</p>
            </div>
            <button type="submit" class="btn btn-primary">Đăng nhập</button>
        </form>
    </div>

    <div v-else class="p-3 mb-3 col-sm-5 m-auto rounded-3 bg-success text-light">
        <h3>Chào mừng, {{ email }} ! </h3>
        <button @click="logout" class="btn btn-primary">Đăng xuất</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const isLoggedIn = ref(false);
const email = ref('');
const password = ref('');

const emailError = ref('');
const passwordError = ref('');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const login = () => {
    // Reset thông điệp lỗi
    emailError.value = '';
    passwordError.value = '';

    // Validate email
    if (!email.value) {
        emailError.value = 'Email là bắt buộc. ';
    } else if (!emailRegex.test(email.value)) {
        emailError.value = 'Vui lòng nhập email hợp lệ.';
    }

    // Validate mật khẩu
    if (!password.value) {
        passwordError.value = 'Mật khẩu là bắt buộc.';
    }

    // Nếu không có lỗi, xử lý login
    if (!emailError.value && !passwordError.value) {
        isLoggedIn.value = true;
    }
}

const logout = () => {
    isLoggedIn.value = false;
    email.value = '';
    password.value = '';
    emailError.value = '';
    passwordError.value = '';
}

</script>