<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Interpolation from './components/Interpolation.vue'
import Attributes from './components/Attributes.vue'
import HelloBootstrap from './components/HelloBootstrap.vue';
</script>

<template>

  <HelloWorld/>
  <Interpolation/>
  <Attributes/>
  <HelloBootstrap/>

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
