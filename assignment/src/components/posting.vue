<template>
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