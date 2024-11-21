<script setup>
import ClassBinding from './components/ClassBinding.vue';
import ClassBindingArray from './components/ClassBindingArray.vue';
import HelloWorld from './components/HelloWorld.vue'
import OnewayDataBinding from './components/OnewayDataBinding.vue';
import ReactiveDemo from './components/ReactiveDemo.vue';
import ReactiviteObj from './components/ReactiviteObj.vue';
import RefBindingReactive from './components/RefBindingReactive.vue';
import RefBindingObj from './components/RefBindingReactive.vue';
import RefDemo from './components/RefDemo.vue';
import RefReactivity from './components/RefReactivity.vue';
import StyleBinding from './components/StyleBinding.vue';
import StyleBindingDemo from './components/StyleBindingDemo.vue';
import TowwayDataBinding from './components/TowwayDataBinding.vue';
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
  <HelloWorld></HelloWorld>
  <OnewayDataBinding></OnewayDataBinding>
  <TowwayDataBinding></TowwayDataBinding>
  <RefReactivity></RefReactivity>
  <ReactiviteObj></ReactiviteObj>
  <RefDemo></RefDemo>
  <ReactiveDemo></ReactiveDemo>
  <ClassBinding></ClassBinding>
  <ClassBindingArray></ClassBindingArray>
  <StyleBinding></StyleBinding>
  <StyleBindingDemo></StyleBindingDemo>
  <RefBindingReactive></RefBindingReactive>
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
