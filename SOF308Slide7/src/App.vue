<script setup>


import BindingDemo1 from './components/BindingDemo1.vue';
import HelloWorld from './components/HelloWorld.vue'
import KeyModifiers2 from './components/KeyModifiers2.vue';
import KeyModifiers from './components/KeyModifiers.vue';
import ListentoEvents0 from './components/ListentoEvents0.vue';
import MethodHandler from './components/MethodHandler.vue';
import ParentComponent from './components/ParentComponent.vue';
import ParentSinhvien from './components/ParentSinhvien.vue';
import ParentComponentCustomInput from './components/ParentComponentCustomInput.vue';
import EmployeeClient from './components/EmployeeClient.vue';

</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" name="PhungLV"  />
  <ListentoEvents0></ListentoEvents0>
  <ParentComponent></ParentComponent> <!-- defineEmits -->
  <ParentSinhvien></ParentSinhvien> <!-- Quản lý Sinh viên Emits -->
  <MethodHandler></MethodHandler>
  <KeyModifiers></KeyModifiers>

  <!-- <KeyModifiers2></KeyModifiers2> --> 
  <BindingDemo1></BindingDemo1>
  <ParentComponentCustomInput></ParentComponentCustomInput>
  <EmployeeClient></EmployeeClient>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
