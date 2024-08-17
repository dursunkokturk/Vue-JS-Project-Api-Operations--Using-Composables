<template>
    <div>

        <!-- Header.vue Dosyasini main.js Dosyasi Uzerinden 
            Global Olarak 
            Component Olarak Cagiriyoruz -->
        <app-header/>
        <div class="container">

            <!-- Hangi Butona Tiklanirsa 
                click Attribute Icindeki 
                activeComponent Degiskenine Atanan Degerin Icerigi Ekranda Gorunecek -->
            <button @click="activeComponent=Users">
                Kullanıcılar
            </button>
            <button @click="activeComponent=AddUser">
                Yeni Kullanıcı Ekle
            </button>
            <Component :is="activeComponent" />
        </div>

        <!-- Local Olarak Cagirdigimiz 
            Footer.vue Dosyasini Component Olarak Kullaniyoruz -->
        <Footer />
    </div>  
</template>

<!-- composition api yi Projede Kullanmak Icin 
    script Tag lari Icinde 
    setup Yazmak Gerekiyor -->
<script setup>

    /* Dosyanin Dizin Yolunu Belirterek Cagirma Islemi
        Local Olarak Dosya Cagirma Islemidir */
    import Footer from '@/components/Fixed/Footer.vue'
    import Users from '@/components/User/Users.vue';
    import AddUser from '@/components/User/AddUser.vue';
    import {shallowRef} from 'vue';

    /* Degiskene Atanan Method Icinde Hangi Deger Belirtilir Ise 
        Sayfa Acildiginda Ekranda O Componente Bagli Dosya Icindeki Data Gorunur */
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