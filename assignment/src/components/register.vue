<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <!-- Đăng ký -->
            <div class="col-12">
                <h2 class="text-center mb-4">Form Đăng Ký Thông Tin</h2>
                <form class="card p-4">
                    <div class="form-group mb-3">
                        <label for="fullName">Họ và Tên</label>
                        <input type="text" class="form-control" id="fullName" placeholder="Nhập họ và tên" required>
                    </div>
                    <div class="form-group mb-3">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" id="email" placeholder="Nhập email" required>
                    </div>
                    <div class="form-group mb-3">
                        <label for="phoneNumber">Số Điện Thoại</label>
                        <input type="text" class="form-control" id="phoneNumber" placeholder="Nhập số điện thoại" required>
                    </div>
                    <div class="form-group mb-3">
                        <label for="password">Mật Khẩu</label>
                        <input type="password" class="form-control" id="password" placeholder="Nhập mật khẩu" required>
                    </div>
                    <div class="form-group mb-3">
                        <label for="confirmPassword">Xác Nhận Mật Khẩu</label>
                        <input type="password" class="form-control" id="confirmPassword" placeholder="Xác nhận mật khẩu" required>
                    </div>
                    <div class="form-group mb-3">
                        <label>Giới Tính</label><br>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="gender" id="genderMale" value="male" required>
                            <label class="form-check-label" for="genderMale">Nam</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="gender" id="genderFemale" value="female" required>
                            <label class="form-check-label" for="genderFemale">Nữ</label>
                        </div>
                    </div>
                    <div class="form-group mb-3">
                        <label for="language">Ngôn Ngữ</label>
                        <select class="form-control" id="language">
                            <option>Tiếng Việt</option>
                            <option>English</option>
                        </select>
                    </div>
                    <div class="form-group form-check mb-3">
                        <input type="checkbox" class="form-check-input" id="agreeTerms" required>
                        <label class="form-check-label" for="agreeTerms">Đồng ý với các điều khoản</label>
                    </div>
                    <button type="submit" class="btn btn-primary w-100">Đăng Ký</button>
                </form>
            </div>
        </div>
    </div>
</template>
