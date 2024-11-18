<template>
    <h1>{{ greeting }}</h1>
    <button v-bind:title="buttonTitle" @click="changeGreeting">Click để thay đổi</button>
</template>

<script>
    export default{
        data(){
        return {
            greeting: "Xin chào các bạn",
            buttonTitle:"Nhấn để thay đổi lời chào"
        };
    },
    methods:{
        changeGreeting(){
            this.greeting = "Hello, world!";
            this.buttonTitle = "Lời chào mới đã được cập nhật";

        }
    }
}
</script>