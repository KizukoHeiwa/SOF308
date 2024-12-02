<template>
    <header>
    <nav class="navbar navbar-expand-sm navbar-light bg-light shadow-sm">
        <div class="container">
            <a class="navbar-brand" href="#">
                <router-link to="/">
                    <img :src="items[0].image" alt="logo" width="150px" />
                </router-link>
            </a>
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
                <ul class="navbar-nav me-auto">
                    <!-- Hiển thị nếu chưa đăng nhập -->
                    <li class="nav-item" v-if="!userLoggedIn">
                        <router-link to="/post" class="nav-link">Bài viết</router-link>
                    </li>
                    <li class="nav-item dropdown" v-if="userLoggedIn">
                        <router-link to="/post" class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">
                            <i class="fa-solid fa-user"></i> Bài viết
                        </router-link>
                        <ul class="dropdown-menu">
                            <li><router-link to="/createPost" class="nav-link">Đăng bài viết mới</router-link></li>
                            <li><router-link to="/post" class="nav-link">Tất cả bài viết</router-link></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown" v-if="!userLoggedIn">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                            <i class="fa-solid fa-user"></i> Tài khoản
                        </a>
                        <ul class="dropdown-menu">
                            <li><router-link to="/login" class="nav-link">Đăng nhập</router-link></li>
                            <li><router-link to="/register" class="nav-link">Đăng ký</router-link></li>
                        </ul>
                    </li>

                    <li class="nav-item dropdown" v-if="userLoggedIn">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                            <i class="fa-solid fa-user"></i> {{ username }}
                        </a>
                        <ul class="dropdown-menu">
                            <li><router-link to="/information" class="nav-link">Thông tin cá nhân</router-link></li>
                            <li><a class="nav-link" href="#" @click="logout">Đăng xuất</a></li>
                        </ul>
                    </li>
                </ul>
                <ul class="navbar-nav d-flex">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Tiếng Việt</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Tiếng Anh</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>
    <div class="container my-4">
      <h3 class="fw-bold">Đăng Bài Viết Mới</h3>
  
      <!-- Form đăng bài viết -->
      <form @submit.prevent="submitPost">
        <!-- Tiêu đề bài viết -->
        <div class="mb-3">
          <label for="title" class="form-label">Tiêu đề bài viết</label>
          <input type="text" class="form-control" id="title" v-model="post.title" required />
        </div>
  
        <!-- Chuyên mục bài viết -->
        <div class="mb-3">
          <label for="category" class="form-label">Chuyên mục</label>
          <select class="form-select" id="category" v-model="post.category" required>
            <option value="Chế độ tập">Chế độ tập</option>
            <option value="Chế độ dinh dưỡng">Chế độ dinh dưỡng</option>
            <option value="Cảm nhận cuộc sống">Cảm nhận cuộc sống</option>
          </select>
        </div>
  
        <!-- Nội dung bài viết -->
        <div class="mb-3">
          <label for="content" class="form-label">Nội dung bài viết</label>
          <textarea class="form-control" id="content" v-model="post.content" rows="5" required></textarea>
        </div>
  
        <!-- Chọn ảnh minh họa -->
        <div class="mb-3">
          <label for="image" class="form-label">Chọn ảnh minh họa</label>
          <input type="file" class="form-control" id="image" @change="handleImageUpload" />
        </div>
  
        <!-- Hiển thị ảnh minh họa đã chọn -->
        <div v-if="imagePreview" class="mb-3">
          <h6>Ảnh minh họa:</h6>
          <img :src="imagePreview" alt="image preview" class="img-fluid" width="200px" />
        </div>
  
        <!-- Nút đăng bài -->
        <button type="submit" class="btn btn-primary">Đăng bài</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref,  onMounted} from 'vue';
  import { useRouter } from 'vue-router';
  
const router = useRouter();
const userLoggedIn = ref(false);
const user = ref(null);
const username = ref("");

onMounted(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
        userLoggedIn.value = true;
        user.value = JSON.parse(storedUser);
        username.value = user.value.username; //  Đặt username thành tên của người đăng nhập lên trang
    }
});

const logout = () => {
    localStorage.removeItem('user');
    userLoggedIn.value = false;
    user.value = null;
    username.value = ""; // Clear username on logout
};
  // Dữ liệu bài viết
  const post = ref({
    title: '',
    category: '',
    content: '',
    image: null,
    author: '',
  });
  // Lấy thông tin tác giả từ localStorage
  const storedUser = localStorage.getItem('user');
if (storedUser) {
  const user = JSON.parse(storedUser); // Chuyển đổi chuỗi JSON thành đối tượng
  post.value.author = user.username;
} else {
  post.value.author = 'Chưa xác định'; // Nếu không có người dùng, gán là 'Chưa xác định'
}
  const imagePreview = ref(null);
  
  // Hàm xử lý ảnh khi người dùng chọn ảnh
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            imagePreview.value = reader.result;  // Lưu ảnh dưới dạng base64 cho preview
            post.value.image = reader.result;    // Lưu base64 của ảnh vào post
        };
        reader.readAsDataURL(file);  // Đọc file dưới dạng base64
    }
};
  // Hàm submit bài viết
  const submitPost = () => {
    if (!post.value.title || !post.value.category || !post.value.content || !post.value.image) {
        alert('Vui lòng điền đầy đủ thông tin!');
        return;
    }

    // Lấy ID cuối cùng từ localStorage, nếu chưa có thì đặt là 0
    let lastPostId = parseInt(localStorage.getItem('lastPostId')) || 0;
    
    // Tăng ID lên 1 để tạo ID mới cho bài viết
    const postId = lastPostId + 1;

    // Cập nhật lastPostId trong localStorage
    localStorage.setItem('lastPostId', postId);

    // Tạo bài viết mới với ID tự động tăng
    const newPost = {
        id: postId,  // Dùng ID đã được tăng
        ...post.value,
        createdAt: new Date().toLocaleString(),
        commentsCount: 0,  // Khởi tạo số lượng bình luận
    };

    // Lưu bài viết vào localStorage
    const posts = JSON.parse(localStorage.getItem('posts') || '[]');
    posts.push(newPost);
    localStorage.setItem('posts', JSON.stringify(posts));

    // Điều hướng đến trang danh sách bài viết sau khi đăng
    router.push('/post');
};
// import logo vao trang header
import logo from '../assets/images/logo-energy-pilates.png';
const items = (
    [
        { image: logo }, //0 
]
);
  </script>
  
  