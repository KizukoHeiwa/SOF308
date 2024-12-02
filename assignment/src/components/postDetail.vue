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
                                <li><router-link to="/manage" class="nav-link">Quản lý bài viết</router-link></li>

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

    <!-- Main Content -->
    <div class="container my-4" v-if="post">
        <div class="row">
            <div class="col-lg-8">
                <div class="card mb-4">
                    <h2 class="card-header fw-bold text-primary text-center">{{ post.title }}</h2>
                    <img :src="post.image" alt="Post Image" class="card-img-top" />
                    <div class="card-body">
                        <p>{{ post.content }}</p>
                        <small class="text-muted">By: {{ post.author }} on {{ post.createdAt }}</small>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="card mb-4">
                    <div class="card-body">
                        <h5 class="fw-bold">Bình luận bài viết tại đây</h5>
                        <div v-if="userLoggedIn">
                            <textarea v-model="newComment" class="form-control mb-3" rows="3" placeholder="Nhập bình luận của bạn"></textarea>
                            <button class="btn btn-success w-100" @click="addComment">Gửi bình luận</button>
                        </div>
                        <div v-else>
                            <p>Vui lòng đăng nhập để bình luận.</p>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-body">
                        <h5 class="fw-bold">Danh sách các bình luận:</h5>
                        <ul class="list-unstyled">
                            <li v-for="(comment, index) in comments" :key="index" class="mb-3">
                                <div class="border p-3 rounded shadow-sm comment-box">
                                    <div class="d-flex align-items-center mb-2">
                                        <strong>{{ comment.userName }}</strong>
                                        <span class="text-muted ms-2">{{ comment.time }}</span>
                                    </div>
                                    <p>{{ comment.text }}</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Footer -->
    <footer class="bg-dark text-white text-center p-4">
        &copy;Copyright by FPT Polytechnic
    </footer>

</template>
<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

// Các biến cần thiết
const userLoggedIn = ref(false);
const user = ref(null);
const username = ref(""); // Store username
const newComment = ref(''); // Bình luận mới
const comments = ref([]); // Danh sách bình luận
const route = useRoute();
const postId = route.params.id;
const post = ref(null);
const currentTime = new Date().toLocaleString(); // Lấy thời gian hiện tại
const avatar = ref(null);

// Khi trang được tải, lấy thông tin bài viết, người dùng và các bình luận
onMounted(() => {
    // Lấy bài viết từ localStorage
    const posts = JSON.parse(localStorage.getItem('posts') || '[]');
    post.value = posts.find(p => p.id === parseInt(postId));

    // Lấy thông tin người dùng từ localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
        userLoggedIn.value = true;
        user.value = JSON.parse(storedUser);
        username.value = user.value.username; // Lấy username từ localStorage
        avatar.value = user.value.avatar;
    }

    // Lấy bình luận của bài viết từ localStorage
    const storedComments = JSON.parse(localStorage.getItem('comments') || '[]');
    comments.value = storedComments.filter(comment => comment.postId === postId);
});

// Hàm xử lý đăng xuất
const logout = () => {
    userLoggedIn.value = false;
    user.value = null;
    username.value = "";

};

// Hàm thêm bình luận
const addComment = () => {
    if (newComment.value.trim() === '') {
        alert('Vui lòng nhập bình luận');
        return;
    }

    if (!userLoggedIn.value) {
        alert('Vui lòng đăng nhập để bình luận');
        return;
    }

    // Tạo đối tượng bình luận mới
    const comment = {
        userName: username.value,
        text: newComment.value,
        time: currentTime, // Thêm thời gian vào bình luận
        postId: postId
    };

    // Lưu bình luận vào danh sách bình luận và localStorage
    comments.value.push(comment);
    newComment.value = ''; // Reset textarea

    const storedComments = JSON.parse(localStorage.getItem('comments') || '[]');
    storedComments.push(comment);
    localStorage.setItem('comments', JSON.stringify(storedComments));
};

// Import logo
import logo from '../assets/images/logo-energy-pilates.png';

// Logo items
const items = [
    { image: logo }, //0 
];
</script>
