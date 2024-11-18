<template>
    <header>
        <nav class="navbar navbar-expand-sm">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <img :src="items[0].image" alt="logo" width="150px">
                </a>
                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item">
                            <router-link to="/post" class="nav-link">Bài viết</router-link> 
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><i class="fa-solid fa-film"></i> Video</a>
                        </li>
                        <li class="nav-item">
                            <rounter-link to="/post" class="nav-link"><i class="fa-solid fa-circle-info"></i> Giới thiệu</rounter-link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><i class="fa-solid fa-calendar-days"></i> Sự kiện</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
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

    <!-- About and Blog Section -->
    <div class="container my-5">
        <div class="row">
            <div class="col-md-4">
                <h3>Về tôi</h3>
                <div class="card">
                    <img :src="items[4].image" class="card-img-top" alt="Giới thiệu bản thân">
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
                            <h5 class="bg-secondary-subtle p-3">Phương pháp tập Pilates giúp phục hồi chấn thương cột
                                sống <i class="fa-solid fa-message"></i> 16</h5>
                            <div class="card-body">
                                <img :src="items[5].image" class="card-img-top" alt="Blog">
                                <p class="card-text">Ngoài việc giúp duy trì vóc dáng, cải thiện sức bền và độ dẻo dai
                                    cho người tập...
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 d-flex align-items-stretch">
                        <ul class="list-group mb-3">
                            <li class="list-group-item">
                                <div class="row">
                                    <div class="col-sm-4">
                                        <img :src="items[6].image" alt="thumbnail" class="float-start" width="100px">
                                    </div>
                                    <div class="col-sm-8">
                                        <h5 class="fw-bold">Biết ơn đời, đời sẽ thương ta</h5>
                                        <h6><i class="fa-solid fa-message"></i> 30</h6>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="row">
                                    <div class="col-sm-4">
                                        <img :src="items[7].image" alt="thumbnail" class="float-start" width="100px">
                                    </div>
                                    <div class="col-sm-8">
                                        <h5 class="fw-bold">9 tác dụng tuyệt vời của quả cam</h5>
                                        <h6><i class="fa-solid fa-message"></i> 28</h6>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="row">
                                    <div class="col-sm-4">
                                        <img :src="items[8].image" alt="thumbnail" class="float-start" width="100px">
                                    </div>
                                    <div class="col-sm-8">
                                        <h5 class="fw-bold">10 công dụng bất ngờ từ dầu dừa</h5>
                                        <h6><i class="fa-solid fa-message"></i> 15</h6>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="row">
                                    <div class="col-sm-4">
                                        <img :src="items[9].image" alt="thumbnail" class="float-start" width="100px">
                                    </div>
                                    <div class="col-sm-8">
                                        <h5 class="fw-bold">Lợi ích khi ăn rau mỗi ngày</h5>
                                        <h6><i class="fa-solid fa-message"></i> 12</h6>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <button href="#" class="btn btn-primary mx-auto d-block mt-3">Xem thêm</button>
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

    <!-- Footer -->
    <footer class="bg-dark text-white text-center p-4">
        &copy;Copyright by FPT Polytechnic
    </footer>
</template>

<script setup>
import logo from '../assets/images/logo-energy-pilates.png';
import banner1 from '../assets/images/banner1.jpg';
import banner2 from '../assets/images/banner2.jpg';
import banner3 from '../assets/images/banner3.jpg';
import avatar from '../assets/images/avatar.png';
import tagpilates from '../assets/images/tap-piltes.jpg';
import corevalue from '../assets/images/corevalue.jpg';
import orange from '../assets/images/orange_300x300.jpg';
import spinach from '../assets/images/spinach_300x300.jpg';
import sesameoil from '../assets/images/sesameoil_300x300.jpg';
import video1 from '../assets/images/video1.jpg';
import video2 from '../assets/images/video2.jpg';
import video3 from '../assets/images/video3.jpg';
import video4 from '../assets/images/video4.jpg';

const items = (
    [
        { image: logo }, //0 
        { image: banner1 }, //1 
        { image: banner2 },//2
        { image: banner3 }, //3
        { image: avatar },//4
        { image: tagpilates },//5
        { image: corevalue },//6
        { image: orange },//7
        { image: sesameoil },//8
        { image: spinach },//9
        { image: video1 },//10
        { image: video2 },//11
        { image: video3 },//12
        { image: video4 },//13








    ]
)
</script>