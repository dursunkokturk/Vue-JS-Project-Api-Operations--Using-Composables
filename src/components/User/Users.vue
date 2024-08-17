<template>

    <!-- Data Gelene Kadar Ekranda Animasyon Gosteriyoruz -->
    <div v-if="data.loading">

        <!-- Main.js Dosyasindaki Animasyonu Kullanmak Icin
            Component Olarak Cagiriyoruz -->
        <app-loading />
    </div>

    <!-- Data Gelme Islemi Bittikten Sonra 
        Data lari Listeliyoruz -->
    <div class="row" v-if="!data.loading">
        <div class="col-md-3 mb-4" v-for="user in data.users" :key="user.id">
            <div class="card" style="width: 18rem;">

                <!-- Rastgele Fotograflarin Alinacagi Sitenin Linkinden Sonra 
                    Fotograflarin Boyut Bilgilerini Giriyoruz
                    + Isaretinden Sonra db.json Dosyasinda Bulunan ve 
                    user Degiskeni Uzerinden Ulastigimiz Data lari 
                    id Bilgini Kullanarak Ekrana Yazdiriyoruz -->
                <img :src="'https://placebeard.it/300/300?' + user.id" class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-text">
                        {{user.firstName}} {{ user.lastName }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

    /* Proje Klasoru Icindeki Bir Kac Yerde Kullanilacak Data lari Barindiran
        composable Klasoru Icinden Import Ediyoruz  */
    import getUsers from '@/composables/getUsers'

    /* Composable Klasoru Icinde Bulunan 
        getUsers.js Dosyasindaki 
        getUsers Method unu
        return Edilen 
        data Degiskenine Atanan Islemleri Ve 
        User Bilgilerini Aliyoruz */
    const {data,loadUsers} = getUsers();

    /* user Bilgilerini Cagiriyoruz */
    loadUsers();
</script>