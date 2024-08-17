/* Data Alma Isleminde 
    Her Sayfada Data Almak Icin Gereken Kodlari Tekrar Tekrar Yazmak Yerine 
    Proje Klasoru Icinde composable Klasoru Olusturduktan Sonra 
    Bir den Fazla Yerde Kullanilacak Islemleri Olusturuyoruz 
    Olusturulan Islemlerin Kullanilacagi Yere Import Etmek Yeterli Oluyor */

import Axios from 'axios';
import { reactive } from 'vue';
    
/* User.vue Dosyasinda Hata Olursa 
    Mesajla Bildirilmesi Icin Gereken Paketi Kullaniyoruz */
import { useToast } from 'vue-toast-notification';

const getUsers = () => {
    const $toast = useToast();
    const data = reactive({
        users:[],
        loading:true
    });

    /* Axios Kullanarak Back-End Tarafinda Request Atiyoruz 
        Gelen Response i 
        getUsers Method Uzerinden Kullaniyoruz */
    const loadUsers = async() => {
        try {

            /* Data lari Almak Icin Request Atiyoruz */
            const response = await Axios.get('http://localhost:3000/users');

            /* Gelen Data lari data Degiskeni Uzerinden Yazdiriyoruz */
            data.users = response.data;

            /* Data Gelmeye Baslayinca Animasyonu Durduruyoruz */
            data.loading = false;
        }
        catch (error) {
            /* Islem Basarili Olursa Verilecek Mesaj */
            $toast.error('You Did Not It!');

            /* Data Gelmeye Baslayana Kadar Hata Olusmadi Ise 
                Hata Almayi Durduruyoruz */
            data.loading = false;
        }
    }

    /* Request Atma Ve Gelen Response i Barindiran loadUsers Methodunu Ve
        Response in Atandigi data Degiskenini Disaridan Erisime Aciyoruz */
    return {data,loadUsers}
}

/* Proje Klasoru Icinde Olusturulan 
    composable Klasoru Icinde Yer Alan Ve 
    Proje Icinde Istenilen Yerlerde Kullanilabilir Kodlarin 
    Istenildigi Anda Kullanilmasi Icin Disaridan Erisime Aciyoruz */
export default getUsers;