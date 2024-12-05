<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">

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

    <!-- Carousel -->
    <div class="container">
        <div id="carouselExampleIndicators" class="carousel slide">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img :src="items[1].image" class="d-block w-100" alt="banner1">
                </div>
                <div class="carousel-item">
                    <img :src="items[2].image" class="d-block w-100" alt="banner2">
                </div>
                <div class="carousel-item">
                    <img :src="items[3].image" class="d-block w-100" alt="banner3">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>

    <div class="container userWrapper" v-if="userLoggedIn">
        <!-- About and Blog Section -->
        <div class="container my-5">
            <div class="row">
                <div class="col-md-4">
                    <h3>Về tôi</h3>
                    <div class="card">
                        <img :src="items[4].image" class="card-img-top" alt="Giới thiệu bản thân">
                        <div class="card-body">
                            <h5 class="card-title">Giới thiệu bản thân</h5>
                            <p class="card-text">Họ và tên: <b>{{ user.username }}</b></p>
                            <p class="card-text">Email: <b>{{ user.email }}</b></p>
                            <p class="card-text">SĐT: <b>{{ user.phone }}</b></p>
                        </div>
                    </div>
                </div>

                <div class="col-md-8">
                    <h3>Blog của tôi</h3>
                    <div class="row">
                        <div class="col-md-6 d-flex align-items-stretch">
                            <div class="card mb-3">
                                <h5 class="bg-secondary-subtle p-3">{{ userPosts[0].title }} <i
                                        class="fa-solid fa-message"></i> {{ userPosts[0].commentsCount }}</h5>
                                <div class="card-body">
                                    <router-link :to="'/postDetail/' + userPosts[0].id" class="text-decoration-none">
                                        <img :src="userPosts[0].image" class="card-img-top" alt="Blog">
                                        <p class="card-text">{{ userPosts[0].content }}</p>
                                    </router-link>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 d-flex align-items-stretch">
                            <ul class="list-group mb-3">
                                <li class="list-group-item" v-for="post in userPosts.splice(1)">
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <router-link :to="'/postDetail/' + post.id" class="text-decoration-none">
                                                <img :src="post.image" alt="thumbnail" class="w-75">
                                            </router-link>
                                        </div>
                                        <div class="col-sm-8">
                                            <h5 class="fw-bold">{{ post.title }}</h5>
                                            <h6><i class="fa-solid fa-message"></i> {{ post.commentsCount }}</h6>
                                        </div>
                                    </div>

                                </li>
                            </ul>
                        </div>
                    </div>
                    <router-link to="/post">
                        <button href="#" class="btn btn-primary mx-auto d-block mt-3">Xem thêm</button>
                    </router-link>
                </div>
            </div>
        </div>


        <div class="container my-5" v-if="!userLoggedIn">
            <div class="row">
                <div class="col-4">
                    <!-- Nav tabs -->
                    <ul class="nav nav-tabs" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" data-bs-toggle="tab" href="#mostRead">Đọc nhiều</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-bs-toggle="tab" href="#mostWatches">Xem nhiều</a>
                        </li>
                    </ul>
                    <!-- Tab panes -->
                    <div class="tab-content">
                        <div id="mostRead" class="container tab-pane active"><br>
                            <div class="row">
                                <div class="col-sm-4 mb-2">
                                    <img :src="items[6].image" alt="thumbnail" class="float-start" width="100px">
                                </div>
                                <div class="col-sm-8">
                                    <h5 class="fw-bold">Biết ơn đời, đời sẽ thương ta</h5>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-sm-4 mb-2">
                                    <img :src="items[7].image" alt="thumbnail" class="float-start" width="100px">
                                </div>
                                <div class="col-sm-8">
                                    <h5 class="fw-bold">9 tác dụng tuyệt vời của quả cam</h5>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-sm-4 mb-2">
                                    <img :src="items[8].image" alt="thumbnail" class="float-start" width="100px">
                                </div>
                                <div class="col-sm-8">
                                    <h5 class="fw-bold">10 công dụng bất ngờ từ dầu dừa</h5>
                                </div>
                            </div>

                        </div>
                        <div id="mostWatches" class="container tab-pane fade"><br>
                            <p>Nội dung tab xem nhiều</p>
                        </div>
                    </div>
                </div>

                <!-- Video Section -->
                <div class="col-8">
                    <div class="row">
                        <h3>Video - Đừng bỏ lỡ</h3>
                        <div class="col-md-6 mb-3">
                            <div class="card">
                                <img :src="items[10].image" class="card-img-top" alt="Video 1">
                                <div class="card-body">
                                    <h5 class="card-title">Đi xa hơn để trưởng thành hơn</h5>
                                    <p class="card-text">Tuổi trẻ chỉ nghĩ đến những chuyến đi...</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <div class="card">
                                <img :src="items[11].image" class="card-img-top" alt="Video 2">
                                <div class="card-body">
                                    <h5 class="card-title">Chút tâm tư những ngày cuối năm</h5>
                                    <p class="card-text">Guồng quay cuộc sống...</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <div class="card">
                                <img :src="items[12].image" class="card-img-top" alt="Video 3">
                                <div class="card-body">
                                    <h5 class="card-title">Ước gì được trở về tuổi thơ</h5>
                                    <p class="card-text">Tuổi trẻ chỉ nghĩ đến những chuyến đi...</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <div class="card">
                                <img :src="items[13].image" class="card-img-top" alt="Video 4">
                                <div class="card-body">
                                    <h5 class="card-title">Ba người thầy vĩ đại</h5>
                                    <p class="card-text">Ta xem vạn vật là thầy...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="text-center mt-4"><a href="#" class="btn btn-primary">Xem thêm</a></div>
                </div>
            </div>
        </div>
    </div>

    <div class="container guestWrapper" v-if="!userLoggedIn">
        <h4 class="fw-bold">Tất cả bài viết</h4>
        <div class="row">
            <div class="col-md-6 mb-4" v-for="(post, index) in paginatedPosts" :key="index">
                <div class="card h-100">
                    <!-- Tiêu đề bài viết và thông tin bình luận -->
                    <h5
                        class="card-title bg-secondary-subtle px-3 py-2 d-flex justify-content-between align-items-center">
                        <span>{{ post.title }}</span>
                        <div>
                            <i class="fa-solid fa-message"></i> {{ post.commentsCount || 0 }}
                        </div>
                    </h5>

                    <router-link :to="'/postDetail/' + post.id" class="text-decoration-none">
                        <div class="card-body">
                            <!-- Hình ảnh bài viết -->
                            <img :src="post.image" class="card-img w-25" alt="bigThumbnail" />
                            <!-- Nội dung bài viết -->
                            <p class="card-text text-muted">{{ post.content }}</p>
                            <!-- Thêm thông tin tác giả -->
                            <div class="d-flex justify-content-between align-items-center">
                                <small class="text-muted">Tác giả: {{ post.author }}</small>
                                <small class="text-muted">{{ post.createdAt }}</small>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>

        <!-- Phân trang -->
        <nav>
            <ul class="pagination justify-content-center">
                <li class="page-item" :class="{ disabled: currentPage === 1 }">
                    <a class="page-link" href="#" @click.prevent="currentPage = 1">«</a>
                </li>
                <li class="page-item" :class="{ disabled: currentPage === 1 }">
                    <a class="page-link" href="#" @click.prevent="currentPage--">‹</a>
                </li>

                <li class="page-item" v-for="page in totalPages" :key="page" :class="{ active: currentPage === page }">
                    <a class="page-link" href="#" @click.prevent="currentPage = page">{{ page }}</a>
                </li>

                <li class="page-item" :class="{ disabled: currentPage === totalPages }">
                    <a class="page-link" href="#" @click.prevent="currentPage++">›</a>
                </li>
                <li class="page-item" :class="{ disabled: currentPage === totalPages }">
                    <a class="page-link" href="#" @click.prevent="currentPage = totalPages">»</a>
                </li>
            </ul>
        </nav>
    </div>

    <!-- Footer -->
    <footer class="bg-dark text-white text-center p-4">
        &copy;Copyright by FPT Polytechnic
    </footer>
</template>

<script setup>

import { ref, onMounted, computed } from 'vue';
import logo from '../assets/images/logo-energy-pilates.png';
import banner1 from '../assets/images/banner1.jpg';
import banner2 from '../assets/images/banner2.jpg';
import banner3 from '../assets/images/banner3.jpg';
import avatar from '../assets/images/avatar.png';
import tagpilates from '../assets/images/tap-piltes.jpg';
import tagpilates1 from '../assets/images/tap-pilates1.jpg';
import corevalue from '../assets/images/corevalue.jpg';
import orange from '../assets/images/orange_300x300.jpg';
import spinach from '../assets/images/spinach_300x300.jpg';
import sesameoil from '../assets/images/sesameoil_300x300.jpg';
import video1 from '../assets/images/video1.jpg';
import video2 from '../assets/images/video2.jpg';
import video3 from '../assets/images/video3.jpg';
import video4 from '../assets/images/video4.jpg';
import timmach from '../assets/images/tim-mach.jpg';
import eatclean from '../assets/images/eat-clean.png';

const items = [
    { image: logo }, // 0 
    { image: banner1 }, // 1 
    { image: banner2 }, // 2
    { image: banner3 }, // 3
    { image: avatar }, // 4
    { image: tagpilates }, // 5
    { image: tagpilates1 }, // 6
    { image: corevalue }, // 7
    { image: orange }, // 8
    { image: sesameoil }, // 9
    { image: spinach }, // 10
    { image: video1 }, // 11
    { image: video2 }, // 12
    { image: video3 }, // 13
    { image: video4 }, // 14
    { image: eatclean }, // 15
    { image: timmach } // 16
];
// State variables
const userLoggedIn = ref(false);
const user = ref(null);
const username = ref(""); // Store username
const posts = ref([]);
const filteredPosts = ref([]); // Filtered posts based on selected category
const currentPage = ref(1);
const postsPerPage = ref(6); // Chỉnh sửa số bài viết mỗi trang
const userPosts = ref([]);
const totalPages = computed(() => Math.ceil(filteredPosts.value.length / postsPerPage.value));


// Check if user is logged in and get user data
onMounted(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
        userLoggedIn.value = true;
        user.value = JSON.parse(storedUser);
        username.value = user.value.username; // Set username from stored user data
    }

    const storedPosts = JSON.parse(localStorage.getItem('posts') || '[]');
    posts.value = storedPosts;
    filteredPosts.value = storedPosts; // Hiện tất cả các posts
    userPosts.value = storedPosts.filter(post => post.author === username.value); // Lọc các bài viết của người dùng
});

const filterPosts = (category) => {
    filteredPosts.value = posts.value.filter(post => post.category === category);
    currentPage.value = 1; // Đặt lại về trang đầu tiên khi người dùng lọc chuyên mục
};

// Lấy bài viết cho trang hiện tại
const paginatedPosts = computed(() => {
    const startIndex = (currentPage.value - 1) * postsPerPage.value;
    return filteredPosts.value.slice(startIndex, startIndex + postsPerPage.value);
});


// Logout function
const logout = () => {
    localStorage.removeItem('user');
    userLoggedIn.value = false;
    user.value = null;
    username.value = ""; // Clear tên người dùng khi bấm logout
};
</script>