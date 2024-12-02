<template>
    <div class="container d-flex justify-content-center align-items-center vh-100">
        <div class="row w-100">
            <div class="col-12 col-md-6 col-lg-4 mx-auto">
                <div class="card shadow">
                    <div class="card-body">
                        <h2 class="card-title text-center mb-4">Đăng Nhập</h2>
                        <form @submit.prevent="handleLogin">
                            <!-- Tên đăng nhập -->
                            <div class="mb-3">
                                <label for="username" class="form-label">Tên đăng nhập</label>
                                <input type="text" class="form-control" id="username" v-model="loginUsername"
                                    placeholder="Nhập tên đăng nhập" required />
                            </div>
                            <!-- Mật khẩu -->
                            <div class="mb-3">
                                <label for="password" class="form-label">Mật khẩu</label>
                                <input type="password" class="form-control" id="password" v-model="loginPassword"
                                    placeholder="Nhập mật khẩu" required />
                            </div>
                            <!-- Nút Đăng nhập -->
                            <div class="d-grid">
                                <button type="submit" class="btn btn-primary">Đăng Nhập</button>
                            </div>
                            <!-- Liên kết đến trang đăng ký -->
                            <div class="mt-3 text-center">
                                <p>Chưa có tài khoản? <a href="#" @click="goToRegister">Đăng ký ngay</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loginUsername: '',
            loginPassword: ''
        };
    },
    methods: {
        handleLogin() {
            let users = JSON.parse(localStorage.getItem("users")) || [];

            // Kiểm tra thông tin người dùng trong localStorage
            const user = users.find(u => u.username === this.loginUsername && u.password === this.loginPassword);

            if (user) {
                localStorage.setItem("user", JSON.stringify(user)); // Lưu người dùng vào localStorage
                alert("Đăng nhập thành công!");
                this.$router.push("/"); // Chuyển hướng đến trang home
            } else {
                alert("Tài khoản hoặc mật khẩu sai.");
            }
        },
        goToRegister() {
            this.$router.push("/register"); // Chuyển hướng đến trang đăng ký
        }
    }
};
</script>