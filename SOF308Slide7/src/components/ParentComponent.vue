
<template>
    <ChildComponent @my-event="handleEvent" />
</template>

<script setup>
    import ChildComponent from './ChildComponent.vue';
    const handleEvent=(data) => {
     alert(data);
    }
</script>

<style scoped>

</style>