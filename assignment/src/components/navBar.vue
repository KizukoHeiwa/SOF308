<template>
  <div class="container">
  <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
     <div class="container">
       <!-- Logo -->
       <a class="navbar-brand" href="#">
         <img src="#" alt="logo" width="150px" class="d-inline-block align-middle">
       </a>
       <!-- Navbar Toggler for small screens -->
       <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar" aria-controls="collapsibleNavbar" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
       </button>
       
       <!-- Navbar Links -->
       <div class="collapse navbar-collapse" id="collapsibleNavbar">
         <ul class="navbar-nav me-auto mb-2 mb-lg-0">
           <li class="nav-item">
               <router-link to="/posting" class="nav-link">Bài viết</router-link>
           </li>
           <li class="nav-item">
             <a class="nav-link" href="#"><i class="fa-solid fa-film"></i> Video</a>
           </li>
           <li class="nav-item">
             <a class="nav-link" href="#"><i class="fa-solid fa-circle-info"></i> Giới thiệu</a>
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
               <li><router-link to="/information" class="dropdown-item">Thông tin cá nhân</router-link></li>
             </ul>
           </li>
         </ul>

         <!-- Language Switcher -->
         <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
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
</div>
</template>

