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
                    <img :src="items[0].image" alt="logo" width="150px">
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
                            <rounter-link to="/postDetails" class="nav-link"><i class="fa-solid fa-circle-info"></i>
                                Giới thiệu</rounter-link>
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

    <!-- Main Content -->
    <div class="container my-4">
        <div class="row">
            <div class="col-lg-8">
                <h2 class="fw-bold text-primary text-center">Phương pháp tập Pilates giúp phục hồi chấn thương cột sống
                </h2>
                <img :src="items[6].image" alt="Bài tập Pilates" class="my-3" width="100%">
                <p>Tập Pilates có thể vẫn còn khá xa lạ với người Việt, nhưng tại các nước phương Tây thì đây chính là
                    phương
                    pháp tập thể dục giúp duy trì vóc dáng, tăng cường ý chí và cải thiện sự linh hoạt, dẻo dai cho
                    người tập. Đặc
                    biệt, các bài tập Pilates có khả năng trị đau lưng, là giải pháp hữu hiệu để phục hồi chấn thương
                    cột sống. Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia fugit expedita iure
                    perferendis ullam itaque necessitatibus, obcaecati, voluptatum alias laborum earum eligendi animi
                    repudiandae, ex molestias assumenda voluptas? Quaerat, eos!
                </p>

                <h4 class="fw-bold mt-4">Pilates giúp phục hồi chấn thương cột sống nhanh chóng</h4>
                <p>Một trong những căn bệnh ngày càng phổ biến, đặc biệt là dân văn phòng, đó là đau lưng, thoát vị đĩa
                    đệm. Tuy
                    nhiên nếu không được chăm sóc có thể dẫn đến nhiều biến chứng nguy hiểm. Lorem, ipsum dolor sit amet
                    consectetur adipisicing elit. Impedit quis autem amet a corporis ut officiis sunt dolore accusamus.
                    Veritatis amet distinctio id odit, sequi nulla temporibus aliquam dolore cum!</p>
                <img :src="items[5].image" alt="Bài tập Pilates" class="my-3" width="100%">
                <h5 class="fw-bold mt-4">Phương pháp tập Pilates Cat Cow</h5>
                <p>Các bước thực hiện:</p>
                <ul>
                    <li>Bắt đầu với tư thế 4 điểm. Vai và cổ tay của bạn phải thẳng hàng và vuông góc với thảm, lưng của
                        bạn phải
                        bằng phẳng và xương chậu của bạn phải cân đối.</li>
                    <li>Hít vào, võng lưng xuống, mặt hướng ngước lên, mở rộng ngực.</li>
                    <li>Thở ra, cong lưng và nâng cằm vào lòng và đẩy lưng về gần khoang ngực.</li>
                    <li>Lặp đi lặp lại động tác từ 5-7 lần.</li>
                </ul>

                <h5 class="fw-bold mt-4">Lời kết</h5>
                <p>Trên đây là phương pháp tập Pilates giúp phục hồi chấn thương cột sống nhanh chóng. Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Exercitationem quae minima fugit nesciunt corrupti numquam
                    nisi quia quod! Maxime consequatur explicabo dolor at perferendis autem corrupti quisquam quas
                    voluptatum distinctio.</p>
            </div>

            <div class="col-lg-4">
                <div class="mb-4">
                    <h5 class="fw-bold">Bình luận vài viết tại đây</h5>
                    <textarea class="form-control" rows="3" placeholder="Nhập bình luận của bạn"></textarea>
                    <button class="btn btn-success mt-2">Gửi bình luận</button>
                </div>

                <div>
                    <h5 class="fw-bold">Danh sách các bình luận:</h5>
                    <ul class="list-unstyled">
                        <li>• <strong>Bình An:</strong> Bài viết rất hữu ích</li>
                        <li>• <strong>Bình An:</strong>Cảm ơn những chia sẻ bổ ích</li>
                    </ul>
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

const items = (
    [
        { image: logo }, //0 
        { image: banner1 }, //1 
        { image: banner2 },//2
        { image: banner3 }, //3
        { image: avatar },//4
        { image: tagpilates },//5
        { image: tagpilates1 },//6
        { image: corevalue },//7
        { image: orange },//8
        { image: sesameoil },//9
        { image: spinach },//10
        { image: video1 },//11
        { image: video2 },//12
        { image: video3 },//13
        { image: video4 },//14
        { image: eatclean}, //15
        { image: timmach} //16








    ]
)
</script>