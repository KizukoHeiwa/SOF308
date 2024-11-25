<template>
    <div class="bg-success p-3 rounded text-center text-light mb-3 row mt-5">
        <div class="col-4">
            <form @submit.prevent="submitForm">
                <h3>Thêm học sinh</h3>
                <div class="mb-3 mt-3">
                    <label for="name">Họ tên: </label>
                    <input type="text" class="form-control" v-model="student.name" id="name" required />
                </div>

                <div class="mb-3">
                    <label for="score">Điểm: </label>
                    <input type="number" max="10" min="0" class="form-control" v-model="student.score" id="score" required />
                </div>

                <div class="mb-3">
                    <label for="dob">Ngày sinh :</label>
                    <input type="date" class="form-control" v-model="student.dob" id="dob" required />
                </div>

                <button type="submit" class="btn btn-primary">{{ isEditing ? 'Cập nhật' : 'Thêm' }}</button>
            </form>
        </div>

        <div class="col-8">
            <h3>Tìm kiếm sinh viên</h3>
            <form @submit.prevent>
                <label for="search">Search: </label>
                <input type="text" class="form-control" v-model="search" id="search" placeholder="Nhập tên học sinh..." @input="filterStudents" />
            </form>
            <h3>Danh sách học sinh</h3>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>Họ và tên</th>
                        <th>Điểm</th>
                        <th>Ngày sinh</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(stu, index) in filteredStudents" :key="index">
                        <td>{{ stu.name }}</td>
                        <td>{{ stu.score }}</td>
                        <td>{{ stu.dob }}</td>
                        <td>
                            <button class="btn btn-warning" @click="editStudent(index)">Sửa</button>
                        </td>
                        <td>
                            <button class="btn btn-danger" @click="deleteStudent(index)">Xóa</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

// Dữ liệu mẫu ban đầu
const students = ref([
    { name: 'Nguyễn Chí Hùng', score: 8, dob: '2006-01-01' },
    { name: 'Phạm Thị Lan', score: 9, dob: '2006-05-15' }
])

// Biến quản lý trạng thái form
const student = ref({
    name: '',
    score: null,
    dob: ''
})

let isEditing = ref(false)
let editingIndex = ref(null)

// Biến tìm kiếm và danh sách lọc
const filteredStudents = ref([...students.value])

function submitForm() {
    if (isEditing.value) {
        students.value[editingIndex.value] = { ...student.value }
        isEditing.value = false
        editingIndex.value = null
    } else {
        students.value.push({ ...student.value })
    }
    resetForm()
    filterStudents() // Cập nhật danh sách lọc sau khi thêm/cập nhật
}

function editStudent(index) {
    student.value = { ...filteredStudents.value[index] }
    isEditing.value = true
    editingIndex.value = students.value.findIndex(stu => stu === filteredStudents.value[index])
}

function deleteStudent(index) {
    const originalIndex = students.value.findIndex(stu => stu === filteredStudents.value[index])
    students.value.splice(originalIndex, 1)
    filterStudents() // Cập nhật danh sách lọc sau khi xóa
}

function resetForm() {
    student.value = {
        name: '',
        score: null,
        dob: ''
    }
}

function filterStudents() {
    filteredStudents.value = students.value.filter(stu =>
        stu.name.toLowerCase().includes(search.value.toLowerCase())
    )
}
</script>
