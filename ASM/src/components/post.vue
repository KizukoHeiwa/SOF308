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
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    <div class="container my-4">
        <div class="row">
            <!-- Sidebar -->
            <div class="col-md-3">
                <h5 class="fw-bold text-center">Chuyên mục</h5>
                <ul class="list-group mb-4">
                    <li class="list-group-item d-flex justify-content-between align-items-center bg-category-item"
                        @click="filterPosts('Chế độ tập')">Chế độ tập
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center bg-category-item"
                        @click="filterPosts('Chế độ dinh dưỡng')">Chế độ dinh dưỡng
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center bg-category-item"
                        @click="filterPosts('Cảm nhận cuộc sống')">Cảm nhận cuộc sống
                    </li>
                </ul>
            </div>

            <!-- Bài viết -->
            <div class="col-md-9">
                <h4 class="fw-bold">Tất cả bài viết</h4>
                <!-- Tìm kiếm bài viết -->
                <div class="mb-3">
                    <input 
                        type="text" 
                        class="form-control" 
                        placeholder="Nhập tiêu đề bài viết..." 
                        v-model="searchQuery" 
                        @input="searchPosts"
                    />
                </div>
                <div class="row">
                    <div class="col-md-6 mb-4" v-for="(post, index) in paginatedPosts" :key="index">
                        <div class="card h-100">
                            <h5
                                class="card-title bg-secondary-subtle px-3 py-2 d-flex justify-content-between align-items-center">
                                <span>{{ post.title }}</span>
                                <div>
                                    <i class="fa-solid fa-message"></i> {{ post.commentsCount || 0 }}
                                </div>
                            </h5>
                            <router-link :to="'/postDetail/' + post.id" class="text-decoration-none">
                                <div class="card-body">
                                    <img :src="post.image" class="card-img" alt="bigThumbnail" />
                                    <p class="card-text text-muted">{{ post.content }}</p>
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
                        <li class="page-item" v-for="page in totalPages" :key="page"
                            :class="{ active: currentPage === page }">
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
        </div>
    </div>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import logo from "../assets/images/logo-energy-pilates.png";
import banner1 from "../assets/images/banner1.jpg";
import banner2 from "../assets/images/banner2.jpg";
import banner3 from "../assets/images/banner3.jpg";

export default {
    setup() {
        const items = [
            { image: logo },
            { image: banner1 },
            { image: banner2 },
            { image: banner3 },
        ];

        const userLoggedIn = ref(false);
        const username = ref("");
        const posts = ref([]);
        const filteredPosts = ref([]);
        const searchQuery = ref("");
        const currentPage = ref(1);
        const postsPerPage = ref(6);

        const totalPages = computed(() =>
            Math.ceil(filteredPosts.value.length / postsPerPage.value)
        );

        const paginatedPosts = computed(() => {
            const startIndex = (currentPage.value - 1) * postsPerPage.value;
            return filteredPosts.value.slice(
                startIndex,
                startIndex + postsPerPage.value
            );
        });

        const searchPosts = () => {
            const lowerQuery = searchQuery.value.toLowerCase();
            filteredPosts.value = posts.value.filter(
                (post) =>
                    post.title.toLowerCase().includes(lowerQuery)
            );
            currentPage.value = 1;
        };

        const filterPosts = (category) => {
            const lowerQuery = searchQuery.value.toLowerCase();
            filteredPosts.value = posts.value.filter(
                (post) =>
                    post.category === category &&
                    post.title.toLowerCase().includes(lowerQuery)
            );
            currentPage.value = 1;
        };

        onMounted(() => {
            const storedPosts = JSON.parse(localStorage.getItem("posts") || "[]");
            posts.value = storedPosts;
            filteredPosts.value = storedPosts;
        });

        return {
            userLoggedIn,
            username,
            items,
            posts,
            filteredPosts,
            currentPage,
            totalPages,
            paginatedPosts,
            searchQuery,
            searchPosts,
            filterPosts,
        };
    },
};
</script>
