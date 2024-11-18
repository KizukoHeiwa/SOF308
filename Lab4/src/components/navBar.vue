<template>
        <nav class="navbar navbar-expand-sm bg-success-subtle fixed-top">
            <a class="navbar-brand" href="#">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/768px-LEGO_logo.svg.png" style="width: 100px">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item mr-3">
                        <router-link to="/">Trang chủ</router-link> <!-- Corrected typo -->
                    </li>
                    <li class="nav-item mr-3">
                        <router-link to="/bai3">Bài 3</router-link> <!-- Corrected typo -->
                    </li>
                    <li class="nav-item mr-3">
                        <router-link to="/bai4">Bài 4</router-link> <!-- Corrected typo -->
                    </li>
                </ul>
            </div>
        </nav>
</template>
