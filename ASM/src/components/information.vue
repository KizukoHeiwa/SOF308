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
                        <img src="https://via.placeholder.com/100" alt="Ảnh đại diện" class="rounded-circle">
                    </div>

                    <div class="col-6">
                        <!-- Thông tin người dùng -->
                        <h6 class="mb-1">Nguyễn Văn A</h6>
                        <p class="text-muted mb-1">Email: nguyenvana@gmail.com</p>
                        <p class="text-muted mb-1">SĐT: 01234567</p>
                        <h3 class="mb-4">Chỉnh sửa ảnh đại diện</h3>
                        <input type="file" class="form-control-file" accept="image/*">
                    </div>
                </div>

                <!-- Form chỉnh sửa thông tin -->
                <form class="was-validated">
                    <div class="row">
                        <!-- Tên người dùng -->
                        <div class="col-12 mb-3">
                            <label for="fullName" class="form-label">Tên</label>
                            <input type="text" class="form-control" id="fullName" value="Nguyễn Văn A" required>
                        </div>

                        <!-- Email người dùng -->
                        <div class="col-12 mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control" id="email" value="nguyenvana@example.com" required>
                        </div>

                        <!-- Mật khẩu -->
                        <div class="col-12 mb-3">
                            <label for="password" class="form-label">Mật khẩu</label>
                            <input type="password" class="form-control" id="password" placeholder="Nhập mật khẩu mới" required>
                        </div>

                        <!-- Số điện thoại -->
                        <div class="col-12 mb-4">
                            <label for="mobile-phone" class="form-label">Số điện thoại</label>
                            <input type="number" class="form-control" id="mobile-phone" placeholder="Nhập số điện thoại mới" required>
                        </div>
                    </div>

                    <!-- Nút lưu thay đổi -->
                    <button type="submit" class="btn btn-primary" formaction="/">Lưu thay đổi</button>
                </form>
            </div>
        </div>

    </div>
</template>
