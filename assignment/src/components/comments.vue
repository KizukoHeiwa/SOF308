<template>
    <div class="container mt-5">
        <div class="row">
            <!-- Cột chứa bài viết -->
            <div class="col-12 col-md-8">
                <div class="card">
                    <div class="card-header">
                        <h4>Bài viết: Hướng dẫn lập trình với Bootstrap</h4>
                    </div>
                    <div class="card-body">
                        <p class="card-text">Đây là bài viết chia sẻ về cách sử dụng Bootstrap trong việc xây dựng giao diện
                            web. Bootstrap cung cấp nhiều thành phần giao diện như nút, form, card, bảng và nhiều thứ khác
                            giúp
                            việc phát triển trở nên dễ dàng hơn.</p>
                    </div>
                    <div class="card-footer text-muted">
                        <small>Tác giả: ABC</small>
                    </div>
                </div>
            </div>

            <!-- Cột chứa danh sách bình luận và form bình luận -->
            <div class="col-12 col-md-4">
                <!-- Danh sách bình luận -->
                <h2>Danh sách bình luận</h2>
                <ul class="list-group mt-4">
                    <!-- Bình luận 1 -->
                    <li class="list-group-item">
                        <div class="d-flex justify-content-between">
                            <strong>Nguyễn Văn A</strong>
                            <small class="text-muted">10 phút trước</small>
                        </div>
                        <p class="mt-2">Đây là một bình luận hay về bài viết này. Cảm ơn tác giả đã chia sẻ!</p>
                    </li>

                    <!-- Bình luận 2 -->
                    <li class="list-group-item">
                        <div class="d-flex justify-content-between">
                            <strong>Trần Thị B</strong>
                            <small class="text-muted">30 phút trước</small>
                        </div>
                        <p class="mt-2">Tôi rất thích những thông tin trong bài viết này, sẽ áp dụng vào công việc của mình.</p>
                    </li>

                    <!-- Bình luận 3 -->
                    <li class="list-group-item">
                        <div class="d-flex justify-content-between">
                            <strong>Nguyễn Thị C</strong>
                            <small class="text-muted">1 giờ trước</small>
                        </div>
                        <p class="mt-2">Bài viết rất chi tiết và dễ hiểu. Tôi mong muốn được đọc thêm nhiều bài viết như vậy.</p>
                    </li>
                </ul>

                <!-- Form nhập bình luận -->
                <div class="mt-4">
                    <h5>Thêm bình luận</h5>
                    <form action="#" method="POST">
                        <div class="mb-3">
                            <label for="commentContent" class="form-label">Nội dung bình luận</label>
                            <textarea class="form-control" id="commentContent" rows="3" placeholder="Viết bình luận của bạn ở đây..."></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Gửi bình luận</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
