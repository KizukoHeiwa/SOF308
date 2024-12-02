<template>
    <div class="col-md-12">
        <h2>Đánh giá</h2>
        <div class="card w-50">
            <img class="card-img-top" src="/src/assets/images/img1.jpg" alt="Hình ảnh">
            <div class="card-body">
                <p class="card-text">Đây là rau củ giàu chất cần thiết đối với cơ thể người. Có nhiều cách để bổ sung
                    rau củ, trong đó bổ sung qua đường ăn uống là cách tốt nhất. Có loại rau củ giàu canxi...</p>
                <form @submit.prevent="submitComment">
                    <div class="mb-3">
                        <textarea class="form-control" v-model="commentText"
                            placeholder="Nhập bình luận của bạn"></textarea>
                    </div>
                    <button type="submit" class="btn btn-success">Gửi bình luận</button>
                </form>
            </div>
        </div>
        <div v-if="comments.length > 0" class="mt-3">
            <h3>Danh sách các bình luận:</h3>
            <ul class="list-unstyled">
                <li v-for="(comment, index) in comments" :key="index" class="d-flex align-items-center">
                    <i class="bi bi-person-circle me-2"></i>
                    <strong>{{ comment.name }}</strong>: {{ comment.text }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps(['username']);
//Mảng chứa các bình luận đã gửi
const commentText = ref('');
const comments = ref([]);

function submitComment() {
    if (commentText.value) {
        comments.value.push({
            name: props.username, // Sử dụng tên từ props
            text: commentText.value 
        });
        commentText.value = ''; // Xóa dữ liệu trong form sau khi gửi
    }
}
</script>