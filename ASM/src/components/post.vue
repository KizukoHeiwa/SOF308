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
                            <a class="nav-link" href="/post"><i class="fa-solid fa-list"></i> Bài viết</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/"><i class="fa-solid fa-film"></i> Video</a>
                        </li>
                        <li class="nav-item">
                            <router-link to="/postDetails" class="nav-link"><i class="fa-solid fa-circle-info"></i>
                                Giới thiệu</router-link>
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

    <div class="container my-4">
        <div class="row">
            <!-- Sidebar -->
            <div class="col-md-3">
                <!-- Chuyên mục -->
                <h5 class="fw-bold">Chuyên mục</h5>
                <ul class="list-group mb-4">
                    <li class="list-group-item d-flex justify-content-between align-items-center bg-primary-subtle">Chế
                        độ tập <span class="badge bg-primary">12</span></li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">Chế độ dinh dưỡng
                        <span class="badge bg-primary">15</span></li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">Cảm nhận cuộc sống
                        <span class="badge bg-primary">99</span></li>
                </ul>

                <!-- Bài viết nổi bật -->
                <div class="card">
                    <h4 class="fw-bold bg-secondary-subtle p-2">Bài viết nổi bật</h4>
                    <div class="row p-3">
                        <div class="col-sm-4">
                            <img :src="items[10].image" alt="thumbnail" class="float-start rounded-circle" width="80px">
                        </div>
                        <div class="col-sm-8">
                            <h5>Lợi ích khi ăn rau mỗi ngày</h5>
                            <span class="text-muted"></span>
                        </div>
                    </div>

                    <div class="row p-3">
                        <div class="col-sm-4">
                            <img :src="items[8].image" alt="thumbnail" class="float-start rounded-circle" width="80px">
                        </div>
                        <div class="col-sm-8">
                            <h5>9 tác dụng tuyệt vời của quả cam</h5>
                            <span class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                                expedita ad esse maiores quo error ea eligendi molestias fugiat distinctio,
                                reprehenderit aliquid id veritatis. Perferendis culpa architecto adipisci hic
                                explicabo.</span>
                        </div>
                    </div>

                    <div class="row p-3">
                        <div class="col-sm-4">
                            <img :src="items[9].image" alt="thumbnail" class="float-start rounded-circle" width="80px">
                        </div>
                        <div class="col-sm-8">
                            <h5>10 công dụng bất ngờ từ dầu dừa</h5>
                            <span class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                                expedita ad esse maiores quo error ea eligendi molestias fugiat distinctio,
                                reprehenderit aliquid id veritatis. Perferendis culpa architecto adipisci hic
                                explicabo.</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bài viết -->
            <div class="col-md-9">
                <h4 class="fw-bold">Tất cả bài viết</h4>
                <div class="row">

                    <div class="col-md-6 mb-4 d-flex align-items-stretch" v-for="baiViet in listBaiViet">
                        <div class="card w-100">
                            <h5 class="card-title bg-secondary-subtle px-3 py-2">{{ baiViet.title }} <i class="fa-solid fa-message"></i> {{ baiViet.views }}</h5>
                            <router-link to="/postDetail" class="text-decoration-none">
                                <div class="card-body">
                                    <img :src="baiViet.img" class="card-img" alt="bigThumbnail">
                                    <p class="card-text text-muted">{{ baiViet.desc }}</p>
                                </div>
                            </router-link>
                        </div>
                    </div>

                </div>

                <!-- Phân trang -->
                <nav>
                    <ul class="pagination justify-content-center">
                        <li class="page-item disabled"><a class="page-link" href="/">«</a></li>
                        <li class="page-item active"><a class="page-link" href="/">1</a></li>
                        <li class="page-item"><a class="page-link" href="/">2</a></li>
                        <li class="page-item"><a class="page-link" href="/">3</a></li>
                        <li class="page-item"><a class="page-link" href="/">»</a></li>
                    </ul>
                </nav>
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
import tappilates1 from '../assets/images/tap-pilates1.jpg';
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

const listBaiViet = ref ([
    {
        title: `Phương pháp tập Pilates giúp phục hồi chấn thương cột sống`,
        img: tappilates,
        desc: `Ngoài việc giúp duy trì vóc dáng, cải thiện sức bền
                và độ dẻo dai, các bài tập Pilates còn có khả năng trị liệu,
                là giải pháp hữu hiệu để phục hồi chấn thương cột sống...`,
        views: 16
    },

    {
        title: `Đây là những gì 1 giờ Tập Pilates có thể làm cho cơ thể của bạn`,
        img: tappilates1,
        desc: `Được thiết kế để xây dựng cơ bắp săn chắc, khỏe mạnh hơn,
                bài tập này đã trở thành một cái tên quen thuộc đối với rất nhiều người nổi tiếng theo đuổi...
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente recusandae
                autem mollitia quis, totam reprehenderit sint sunt distinctio repellendus obcaecati
                assumenda consequuntur ullam odio culpa harum at sit facilis consectetur?`,
        views: 8
    },

    {
        title: `Tập Pilates có thể cải thiện sức khỏe tim mạch của bạn`,
        img: timmach,
        desc: `Tập Pilates không chỉ giúp bạn có một cơ thể khỏe mạnh
                và linh hoạt mà còn có nhiều lợi ích cho sức khỏe tim mạch...`,
        views: 5
    },

    {
        title: `EAT CLEAN: Nên Và Không Nên Ăn Thực Phẩm Nào?`,
        img: eatclean,
        desc: `Chúng ta luôn chú trọng lựa chọn thực phẩm sạch
                và duy trì lối sống lành mạnh...`,
        views: 3
    },

    {
        title: `Biết ơn đời, đời sẽ thương ta`,
        img: corevalue,
        desc: ``,
        views: 30
    },

    {
        title: `9 tác dụng tuyệt vời của quả cam`,
        img: orange,
        desc: ``,
        views: 28
    },

    {
        title: `Lợi ích khi ăn rau mỗi ngày` ,
        img: spinach,
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            expedita ad esse maiores quo error ea eligendi molestias fugiat distinctio,
            reprehenderit aliquid id veritatis. Perferendis culpa architecto adipisci hic explicabo.`,
        views: 15
    },

    {
        title: `10 công dụng bất ngờ từ dầu dừa`,
        img: sesameoil,
        desc: ``,
        views: 12
    }
])

const listVideos = ref ([
    {title: 'Đi xa hơn để trưởng thành hơn', src: video1, desc: 'Tuổi trẻ chỉ nghĩ đến những chuyến đi...'},
    {title: 'Chút tâm tư những ngày cuối năm', src: video2, desc: 'Guồng quay cuộc sống...'},
    {title: 'Ước gì được trở về tuổi thơ', src: video3, desc: 'Tuổi thơ...'},
    {title: 'Ba người thầy vĩ đại', src: video4, desc: 'Ta xem vạn vật là thầy...'}
])

const items = (
    [
        { image: logo }, //0 
        { image: banner1 }, //1 
        { image: banner2 },//2
        { image: banner3 }, //3
        { image: avatar },//4
        { image: tappilates },//5
        { image: tappilates1 },//6
        { image: corevalue },//7
        { image: orange },//8
        { image: sesameoil },//9
        { image: spinach },//10
        { image: video1 },//11
        { image: video2 },//12
        { image: video3 },//13
        { image: video4 },//14
        { image: eatclean }, //15
        { image: timmach } //16








    ]
)
</script>