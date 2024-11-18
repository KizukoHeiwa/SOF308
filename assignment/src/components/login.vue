<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <!-- Form Đăng Nhập -->
            <div class="col-12">
                <h2 class="text-center mb-4">Form Đăng Nhập</h2>
                <form class="card p-4">
                    <div class="form-group mb-3">
                        <label for="loginEmail">Email</label>
                        <input type="email" class="form-control" id="loginEmail" placeholder="Nhập email" required>
                    </div>
                    <div class="form-group mb-3">
                        <label for="loginPassword">Mật Khẩu</label>
                        <input type="password" class="form-control" id="loginPassword" placeholder="Nhập mật khẩu" required>
                    </div>
                    <button type="submit" class="btn btn-primary w-100">Đăng Nhập</button>
                </form>
            </div>
        </div>
    </div>
</template>
