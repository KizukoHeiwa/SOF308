<template>
  <div class="bg-primary p-3 rounded text-center text-light mb-3">
    <h2 class="mb-4">Quản lý Sinh viên</h2>
    <!-- Form thêm sinh viên mới -->
    <form class="col-sm-8" @submit.prevent="addStudent">
      <h3 class="mb-4 text-success">Thêm sinh viên</h3>
      <div class="form-group">
        <label for="name">Tên sinh viên</label>
        <input type="text" v-model="newStudent.name" class="form-control" required>
      </div>
      <div class="form-group">
        <label for="age">Tuổi</label>
        <input type="number" v-model="newStudent.age" class="form-control" required>
      </div>
      <button type="submit" class="btn btn-primary mt-2">Thêm sinh viên</button>
    </form>
    <hr>
    <!-- Danh sách sinh viên -->
    <div class="col-sm-8">
    <h3 class="mb-4 text-danger">Danh sách sinh viên</h3>
    <ul class="list-group">
      <h1>16 - 20 tuổi</h1>
      <div class="1620" v-for="(student, index) in students">
        <li class="list-group-item" v-if="student.age >= 16 && student.age <= 20">
            {{ student.name }} - {{ student.age }} tuổi
        </li>
      </div>

      <h1>21 - 30 tuổi</h1>
      <div class="2130" v-for="(student, index) in students">
        <li class="list-group-item" v-if="student.age >= 21 && student.age <= 30">
            {{ student.name }} - {{ student.age }} tuổi
        </li>
      </div>
    </ul>
    </div>
  </div>
</template>

<style scoped>

</style>
<script setup>
  import { ref } from 'vue';

  // Danh sách sinh viên 
  const students = ref([
    { name: 'Trần Quang Anh', age: 18 },
    { name: 'Lê Thị Lan', age: 19 },
    { name: 'Phạm Văn Bảo', age: 18 }
  ]);

  // Dữ liệu sinh viên mới
  const newStudent = ref({
    name: '',
    age: null
  });
    // Phương thức thêm sinh viên
const addStudent = () => {
  if (newStudent.value.name && newStudent.value.age > 0){
    // Thêm sinh viên vào danh sách
    students.value.push({ 
      name: newStudent.value.name, 
      age: newStudent.value.age 
    });

    // Reset form sau khi thêm
    newStudent.value.name = '';
    newStudent.value.age = null;
    }
  };

</script>