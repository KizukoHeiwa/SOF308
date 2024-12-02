<template>
    <div class="container d-flex justify-content-center align-items-center vh-100">
      <div class="row w-100">
        <div class="col-12 col-md-6 col-lg-4 mx-auto">
          <div class="card shadow">
            <div class="card-body">
              <h2 class="card-title text-center mb-4">Đăng Ký</h2>
              <form @submit.prevent="handleRegister">
                <!-- Tên đăng nhập -->
                <div class="mb-3">
                  <label for="username" class="form-label">Tên đăng nhập</label>
                  <input type="text" class="form-control" id="username" v-model="username" placeholder="Nhập tên đăng nhập" required />
                  <div v-if="usernameExists" class="text-danger">Tên đăng nhập đã tồn tại.</div>
                </div>
                <!-- Email -->
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input type="email" class="form-control" id="email" v-model="email" placeholder="Nhập email" required />
                  <div v-if="emailExists" class="text-danger">Email đã tồn tại.</div>
                </div>
                <!-- Mật khẩu -->
                <div class="mb-3">
                  <label for="password" class="form-label">Mật khẩu</label>
                  <input type="password" class="form-control" id="password" v-model="password" placeholder="Nhập mật khẩu" required />
                </div>
                <!-- Số điện thoại -->
                <div class="mb-3">
                  <label for="phone" class="form-label">Số điện thoại</label>
                  <input type="tel" class="form-control" id="phone" v-model="phone" placeholder="Nhập số điện thoại" required pattern="^\d{10}$" />
                  <small class="form-text text-muted">Nhập số điện thoại gồm 10 chữ số.</small>
                </div>
                <!-- Nút Đăng ký -->
                <div class="d-grid">
                  <button type="submit" class="btn btn-primary" :disabled="usernameExists || emailExists">Đăng Ký</button>
                </div>
                <!-- Liên kết đến trang đăng nhập -->
                <div class="mt-3 text-center">
                  <p>Đã có tài khoản? <a href="#" @click="goToLogin">Đăng nhập ngay</a></p>
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
      username: '',
      email: '',
      password: '',
      phone: '',
      usernameExists: false,
      emailExists: false
    };
  },
  methods: {
    handleRegister() {
      let users = JSON.parse(localStorage.getItem("users")) || [];
      
      // Kiểm tra xem tên đăng nhập hoặc email đã tồn tại chưa
      this.usernameExists = users.some(user => user.username === this.username);
      this.emailExists = users.some(user => user.email === this.email);

      if (!this.usernameExists && !this.emailExists) {
        const newUser = {
          username: this.username,
          email: this.email,
          password: this.password,
          phone: this.phone,
        };
        
        users.push(newUser); // Thêm người dùng mới vào danh sách
        localStorage.setItem("users", JSON.stringify(users)); // Lưu lại danh sách người dùng
        
        // Lưu người dùng hiện tại vào localStorage
        localStorage.setItem("user", JSON.stringify(newUser));

        alert("Đăng ký thành công!");
        this.$router.push("/login"); // Chuyển hướng đến trang đăng nhập
      } else {
        alert("Tên đăng nhập hoặc email đã tồn tại.");
      }
    },
    goToLogin() {
      this.$router.push("/login"); // Chuyển hướng đến trang đăng nhập
    }
  }
};
</script>