<template>
    <div>
        <app-header/>
        <div class="container">
            <button @click="activeComponent=Users">
                Kullanıcılar
            </button>
            <button @click="activeComponent=AddUser">
                Yeni Kullanıcı Ekle
            </button>
            <Component :is="activeComponent" />
        </div>
        <Footer />
    </div>  
</template>

<script setup>
    import Footer from '@/components/Fixed/Footer.vue'
    import Users from '@/components/User/Users.vue';
    import AddUser from '@/components/User/AddUser.vue';
    import {shallowRef} from 'vue';

    const activeComponent = shallowRef(Users)
    
</script>

<style>
    *{
      margin:0;
      padding: 0;
      box-sizing: border-box;
    }

    .container{
        min-height: 100vh;
        padding: 30px;
    }
    button{
        padding: 10px;
        border: none;
        background: green;
        color: white;
        border-radius: 30px;
        margin: 20px;
    }
</style>