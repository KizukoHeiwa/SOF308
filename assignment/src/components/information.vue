<template>
    <div class="container mt-5">
        <h2 class="mb-4">Thông Tin Cá Nhân</h2>
        <div class="card">
            <div class="card-header">
                <h5 class="card-title">Thông tin cá nhân của bạn</h5>
            </div>
            <div class="card-body">
                <!-- Phần thông tin người dùng và ảnh đại diện -->
                <div class="row mb-4">
                    <!-- Ảnh đại diện -->
                    <div class="col-6 d-flex justify-content-center">
                        <!-- Hiển thị ảnh đại diện từ localStorage -->
                        <img :src="user.avatar" class="rounded-circle" width="100" height="100" />
                    </div>

                    <div class="col-6">
                        <!-- Thông tin người dùng -->
                        <h6 class="mb-1">{{ user.username }}</h6>
                        <p class="text-muted mb-1">Email: {{ user.email }}</p>
                        <p class="text-muted mb-1">SĐT: {{ user.phone }}</p>
                        <h3 class="mb-4">Chỉnh sửa ảnh đại diện</h3>
                        <input type="file" class="form-control-file" accept="image/*" @change="updateAvatar" />
                    </div>
                </div>

                <!-- Form chỉnh sửa thông tin -->
                <form class="was-validated" @submit.prevent="updateUserInfo">
                    <div class="row">
                        <!-- Tên người dùng -->
                        <div class="col-12 mb-3">
                            <label for="fullName" class="form-label">Tên</label>
                            <input type="text" class="form-control" id="fullName" v-model="user.username" required />
                        </div>

                        <!-- Email người dùng -->
                        <div class="col-12 mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control" id="email" v-model="user.email" required />
                        </div>

                        <!-- Mật khẩu -->
                        <div class="col-12 mb-3">
                            <label for="password" class="form-label">Mật khẩu mới</label>
                            <input type="password" class="form-control" id="password" v-model="user.password"
                                placeholder="Nhập mật khẩu mới (nếu thay đổi)" />
                        </div>

                        <!-- Số điện thoại -->
                        <div class="col-12 mb-4">
                            <label for="mobile-phone" class="form-label">Số điện thoại</label>
                            <input type="number" class="form-control" id="mobile-phone" v-model="user.phone"
                                placeholder="Nhập số điện thoại mới" required />
                        </div>
                    </div>

                    <!-- Nút lưu thay đổi -->
                    <button type="submit" class="btn btn-primary">Lưu thay đổi</button>
                </form>

                <!-- Nút quay lại trang chủ -->
                <button class="btn btn-secondary mt-4" @click="goHome">Quay lại trang chủ</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const user = ref({
    username: '',
    email: '',
    password: '',
    phone: '',
    avatar: '', // Để lưu trữ ảnh đại diện
});

const users = ref([]); // Mảng users sẽ lưu trữ tất cả người dùng

// Lấy thông tin người dùng từ localStorage khi trang được tải
onMounted(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('user'));
    if (loggedInUser) {
        user.value = loggedInUser;
        // Lấy toàn bộ người dùng từ localStorage
        users.value = JSON.parse(localStorage.getItem("users")) || [];
    } else {
        alert('Bạn cần đăng nhập để xem thông tin!');
        router.push('/login'); // Chuyển hướng nếu chưa đăng nhập
    }
});

// Cập nhật thông tin người dùng
const updateUserInfo = () => {
    // Cập nhật lại thông tin người dùng trong mảng users
    const index = users.value.findIndex(u => u.username === user.value.username);
    if (index !== -1) {
        // Cập nhật thông tin người dùng trong mảng users
        users.value[index] = { ...user.value }; 
        // Lưu lại mảng users vào localStorage
        localStorage.setItem("users", JSON.stringify(users.value));
        // Cập nhật lại thông tin người dùng trong localStorage
        localStorage.setItem('user', JSON.stringify(user.value));

        alert('Thông tin đã được cập nhật!');
    }
};

// Cập nhật ảnh đại diện
const updateAvatar = (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            user.value.avatar = reader.result; // Lưu URL ảnh vào avatar
            localStorage.setItem('user', JSON.stringify(user.value)); // Cập nhật avatar trong localStorage
        };
        reader.readAsDataURL(file); // Chuyển đổi hình ảnh thành base64
    }
};

// Quay lại trang chủ
const goHome = () => {
    router.push('/');
};
</script>


<style scoped>
/* Định dạng cho phần chỉnh sửa thông tin */
.card {
    border-radius: 10px;
}

.card-header {
    background-color: #007bff;
    color: white;
}

.card-body {
    padding: 30px;
}

h2 {
    color: #007bff;
}

button {
    width: 100%;
}

/* Căn giữa nút "Quay lại trang chủ" */
button.btn-secondary {
    width: 200px;
}
</style>
