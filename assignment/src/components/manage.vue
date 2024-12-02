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
                            <router-link to="/post" class="nav-link dropdown-toggle" role="button"
                                data-bs-toggle="dropdown">
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

    <div class="container my-4">
        <h3 class="fw-bold">Quản lý bài viết</h3>
        <div v-if="posts.length > 0">
            <div v-for="post in posts" :key="post.id" class="card mb-3">
                <div class="card-body">
                    <img :src="post.image" alt="Post Image" class="card-img-top" />
                    <h5 class="card-title">{{ post.title }}</h5>
                    <p class="card-text">{{ post.content }}</p>
                    <div v-if="post.author === username">
                        <button class="btn btn-warning ms-2" @click="editPost(post)">Sửa bài viết</button>
                        <button class="btn btn-danger ms-2" @click="deletePost(post.id)">Xóa bài viết</button>
                    </div>
                </div>
            </div>
        </div>
        <p v-else>Bạn không có bài viết nào.</p>
    </div>
    <!-- Modal sửa bài viết -->
    <div v-if="showEditModal" class="modal fade show" tabindex="-1" style="display: block;"
        aria-labelledby="editPostModal" aria-hidden="false">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Sửa bài viết</h5>
                    <button type="button" class="btn-close" @click="closeEditModal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="saveEditPost">
                        <div class="mb-3">
                            <label for="postTitle" class="form-label">Tiêu đề</label>
                            <input type="text" class="form-control" id="postTitle" v-model="editPostData.title"
                                required />
                        </div>
                        <div class="mb-3">
                            <label for="postContent" class="form-label">Nội dung</label>
                            <textarea class="form-control" id="postContent" v-model="editPostData.content" rows="3"
                                required></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Lưu thay đổi</button>
                    </form>
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

const posts = ref([]); // Dữ liệu bài viết

const userLoggedIn = ref(false);
const user = ref(null);
const username = ref(""); // Store username
const showEditModal = ref(false); // Kiểm tra trạng thái hiển thị modal sửa bài viết
const editPostData = ref({ title: '', content: '', id: null }); // Lưu dữ liệu bài viết cần sửa

onMounted(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
        userLoggedIn.value = true;
        user.value = JSON.parse(storedUser);
        username.value = user.value.username; // Set username from stored user data   
    }

    // Lấy danh sách bài viết và lọc các bài viết của người dùng đang đăng nhập
    const storedPosts = JSON.parse(localStorage.getItem('posts') || '[]');
    posts.value = storedPosts.filter(post => post.author === username.value); // Lọc các bài viết của người dùng
});

// Hàm xóa bài viết
const deletePost = (postId) => {
    // Lấy danh sách bài viết từ localStorage
    const storedPosts = JSON.parse(localStorage.getItem('posts') || '[]');

    // Xóa bài viết theo ID
    const updatedPosts = storedPosts.filter(post => post.id !== postId);

    // Lưu lại danh sách bài viết đã cập nhật vào localStorage
    localStorage.setItem('posts', JSON.stringify(updatedPosts));

    // Lọc lại danh sách bài viết để chỉ hiển thị bài viết của người dùng hiện tại
    posts.value = updatedPosts.filter(post => post.author === username.value);

    // Hiển thị thông báo xóa thành công
    alert('Đã xóa bài viết');
}


// Hàm mở modal sửa bài viết
const editPost = (post) => {
    editPostData.value = { ...post }; // Gán dữ liệu bài viết vào form sửa
    showEditModal.value = true; // Hiển thị modal sửa bài viết
};

// Hàm đóng modal sửa bài viết
const closeEditModal = () => {
    showEditModal.value = false; // Ẩn modal sửa bài viết
};

// Hàm lưu thay đổi bài viết
const saveEditPost = () => {
    const storedPosts = JSON.parse(localStorage.getItem('posts') || '[]');
    const updatedPosts = storedPosts.map(post => {
        if (post.id === editPostData.value.id) {
            return { ...post, ...editPostData.value }; // Cập nhật bài viết đã sửa
        }
        return post;
    });

    // Lưu lại danh sách bài viết đã cập nhật vào localStorage
    localStorage.setItem('posts', JSON.stringify(updatedPosts));

    // Cập nhật lại danh sách bài viết sau khi sửa
    posts.value = updatedPosts.filter(post => post.author === username.value);

    // Đóng modal và thông báo
    closeEditModal();
    alert('Đã lưu thay đổi');
};

const logout = () => {
    localStorage.removeItem('user');
    userLoggedIn.value = false;
    user.value = null;
    username.value = ""; // Clear username on logout
};
import logo from '../assets/images/logo-energy-pilates.png';
const items = (
    [
        { image: logo }, //0 
    ])
</script>