<script setup>

import FormSinhvien from './components/FormSinhvien.vue';
import HelloWorld from './components/HelloWorld.vue'
import Lab4Bai4 from './components/Lab4Bai4.vue';
import Velse from './components/Velse.vue';
import Velseif from './components/Velseif.vue';
import Velseif2 from './components/Velseif2.vue';
import VFor1 from './components/VFor1.vue';
import VForIf from './components/VForIf.vue';
import VForObject from './components/VForObject.vue';
import VForTemplate from './components/VForTemplate.vue';
import VifDemo1 from './components/VifDemo1.vue';
import VifDemo2 from './components/VifDemo2.vue';
import Vshow1 from './components/Vshow1.vue';
import Vshow2 from './components/Vshow2.vue';
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
  <HelloWorld msg="Vite + Vue" />
  <VifDemo1></VifDemo1>
  <VifDemo2></VifDemo2>
  <Velse></Velse>
  <Velseif></Velseif>
  <Vshow1></Vshow1>
  <Vshow2></Vshow2>
  <Velseif2></Velseif2>
  <VFor1></VFor1>
  <VForObject></VForObject>
  <VForTemplate></VForTemplate>
  <VForIf></VForIf>
  <FormSinhvien></FormSinhvien>

  <Lab4Bai4></Lab4Bai4>
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
