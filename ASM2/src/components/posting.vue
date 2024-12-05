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
        <h2>Đăng Bài Viết Mới</h2>
        <form class="card">
            <div class="mb-3">
                <label for="title" class="form-label">Tiêu Đề</label>
                <input type="text" class="form-control" id="title" placeholder="Nhập tiêu đề bài viết">
            </div>
            <div class="mb-3">
                <label for="content" class="form-label">Nội Dung</label>
                <textarea class="form-control" id="content" rows="5" placeholder="Nhập nội dung bài viết"></textarea>
            </div>
            <div class="mb-3">
                <label for="image" class="form-label">Thêm Hình Ảnh (tùy chọn)</label>
                <input type="file" class="form-control" id="image">
            </div>
            <button type="submit" class="btn btn-primary">Đăng Bài</button>
        </form>
    </div>
</template>