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

    <header>
        <nav class="navbar navbar-expand-sm">
            <div class="container">
                <a class="navbar-brand" href="/">
                    <img :src="logo" alt="logo" width="150px">
                </a>
                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item">
                            <router-link to="/post" class="nav-link"><i class="fa-solid fa-list"></i> Bài viết</router-link> 
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/"><i class="fa-solid fa-film"></i> Video</a>
                        </li>
                        <li class="nav-item">
                            <router-link to="/post" class="nav-link"><i class="fa-solid fa-circle-info"></i> Giới thiệu</router-link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/"><i class="fa-solid fa-calendar-days"></i> Sự kiện</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown">
                                <i class="fa-solid fa-user"></i> Tài khoản
                            </a>
                            <ul class="dropdown-menu">
                                <li><router-link to="/login" class="dropdown-item">Đăng nhập</router-link></li>
                                <li><router-link to="/register" class="dropdown-item">Đăng ký</router-link></li>
                                <li><router-link to="/information" class="dropdown-item">Thông tin cá nhân</router-link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul class="navbar-nav d-flex">
                        <li class="nav-item">
                            <a class="nav-link">Tiếng Việt</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link">Tiếng Anh</a>
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
                    <img :src="banner1" class="d-block w-100" alt="banner1">
                </div>
                <div class="carousel-item">
                    <img :src="banner2" class="d-block w-100" alt="banner2">
                </div>
                <div class="carousel-item">
                    <img :src="banner3" class="d-block w-100" alt="banner3">
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

    <!-- About and Blog Section -->
    <div class="container my-5">
        <div class="row">
            <div class="col-md-4">
                <h3>Về tôi</h3>
                <div class="card">
                    <img :src="avatar" class="card-img-top" alt="Giới thiệu bản thân">
                    <div class="card-body">
                        <h5 class="card-title">Giới thiệu bản thân</h5>
                        <p class="card-text">TS. Trần Hoàng, Tổ chức Tư vấn sức khỏe quốc tế. Châm ngôn: Ta không được
                            chọn nơi mình
                            sinh ra, nhưng ta được chọn cách mình sẽ sống.</p>
                    </div>
                </div>
            </div>

            <div class="col-md-8">
                <h3>Blog của tôi</h3>
                <div class="row">
                    <div class="col-md-6 d-flex align-items-stretch">
                        <div class="card mb-3">
                            <h5 class="bg-secondary-subtle p-3">{{ listBaiViet[0].title }} <i class="fa-solid fa-message"></i> {{ listBaiViet[0].views }}</h5>
                            <div class="card-body">
                                <img :src="listBaiViet[0].img" class="card-img-top" alt="Blog">
                                <p class="card-text">{{ listBaiViet[0].desc }}</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 d-flex align-items-stretch">
                        <ul class="list-group mb-3">

                            <li class="list-group-item" v-for="baiViet in listBaiViet.slice(1)">
                                <div class="row">
                                    <div class="col-sm-4">
                                        <img :src="baiViet.img" alt="thumbnail" class="float-start" width="100px">
                                    </div>
                                    <div class="col-sm-8">
                                        <h5 class="fw-bold">{{ baiViet.title }}</h5>
                                        <h6><i class="fa-solid fa-message"></i> {{ baiViet.views }}</h6>
                                    </div>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>
                <button href="/" class="btn btn-primary mx-auto d-block mt-3">Xem thêm</button>
            </div>
        </div>
    </div>

    <div class="container my-5">
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

                        <div class="row" v-for="baiViet in listBaiViet.slice(1)">
                            <div class="col-sm-4 mb-2">
                                <img :src="baiViet.img" alt="thumbnail" class="float-start" width="100px">
                            </div>
                            <div class="col-sm-8">
                                <h5 class="fw-bold">{{ baiViet.title }}</h5>
                            </div>
                        </div>

                    </div>
                    <div id="mostWatches" class="container tab-pane fade"><br>

                        <div class="row" v-for="video in listVideos">
                            <div class="col-sm-4 mb-2">
                                <img :src="video.src" alt="thumbnail" class="float-start" width="100px">
                            </div>
                            <div class="col-sm-8">
                                <h5 class="fw-bold">{{ video.title }}</h5>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <!-- Video Section -->
            <div class="col-8">
                <div class="row">
                    <h3>Video - Đừng bỏ lỡ</h3>

                    <div class="col-md-6 mb-3" v-for="video in listVideos">
                        <div class="card">
                            <img :src="video.src" class="card-img-top" alt="Video">
                            <div class="card-body">
                                <h5 class="card-title">{{ video.title }}</h5>
                                <p class="card-text">{{ video.desc }}</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="text-center mt-4"><a href="/" class="btn btn-primary">Xem thêm</a></div>
            </div>
        </div>
    </div>

    <!-- Footer -->
    <footer class="bg-dark text-white text-center p-4">
        &copy;Copyright by FPT Polytechnic
    </footer>
</template>

<script setup>
import { ref } from 'vue';
import logo from '../assets/images/logo-energy-pilates.png';
import banner1 from '../assets/images/banner1.jpg';
import banner2 from '../assets/images/banner2.jpg';
import banner3 from '../assets/images/banner3.jpg';
import avatar from '../assets/images/avatar.png';
import tappilates from '../assets/images/tap-piltes.jpg';
import corevalue from '../assets/images/corevalue.jpg';
import orange from '../assets/images/orange_300x300.jpg';
import spinach from '../assets/images/spinach_300x300.jpg';
import sesameoil from '../assets/images/sesameoil_300x300.jpg';
import video1 from '../assets/images/video1.jpg';
import video2 from '../assets/images/video2.jpg';
import video3 from '../assets/images/video3.jpg';
import video4 from '../assets/images/video4.jpg';

const listBaiViet = ref ([
    {title: 'Phương pháp tập Pilates giúp phục hồi chấn thương cột sống', img: tappilates, desc: 'Ngoài việc giúp duy trì vóc dáng, cải thiện sức bền và độ dẻo dai cho người tập...', views: 16},
    {title: 'Biết ơn đời, đời sẽ thương ta', img: corevalue, desc: '', views: 30},
    {title: '9 tác dụng tuyệt vời của quả cam', img: orange, desc: '', views: 28},
    {title: 'Lợi ích khi ăn rau mỗi ngày' , img: spinach, desc: '', views: 15},
    {title: '10 công dụng bất ngờ từ dầu dừa', img: sesameoil, desc: '', views: 12}
])

const listVideos = ref ([
    {title: 'Đi xa hơn để trưởng thành hơn', src: video1, desc: 'Tuổi trẻ chỉ nghĩ đến những chuyến đi...'},
    {title: 'Chút tâm tư những ngày cuối năm', src: video2, desc: 'Guồng quay cuộc sống...'},
    {title: 'Ước gì được trở về tuổi thơ', src: video3, desc: 'Tuổi thơ...'},
    {title: 'Ba người thầy vĩ đại', src: video4, desc: 'Ta xem vạn vật là thầy...'}
])
</script>