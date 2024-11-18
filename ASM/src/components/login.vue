<style>
    header {
      background-color: aliceblue;
      /* box-shadow: 1px 1px 2px 1px lightgray; */
    }
  
    .nav-link {
      color: black;
    }
  
    .nav-link:hover {
      color: green;
    }
  
    .navbar-nav .nav-link.active,
    .navbar-nav .nav-link.show {
      color: green;
    }
  
    .button-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  
    .footer-content {
      color: white;
      text-align: center;
    }
</style>

<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">

    <div class="container mt-5">
        <div class="row justify-content-center">
            <!-- Form Đăng Nhập -->
            <div class="col-6">
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
                    <button type="submit" class="btn btn-primary w-100" formaction="/">Đăng Nhập</button>
                </form>
            </div>
        </div>
    </div>
</template>
