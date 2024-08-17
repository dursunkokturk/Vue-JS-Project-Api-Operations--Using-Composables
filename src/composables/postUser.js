/* Data Ekleme Isleminde 
    Data Eklemek Icin Gereken Kodlari Tekrar Tekrar Yazmak Yerine 
    Proje Klasoru Icinde composable Klasoru Olusturduktan Sonra 
    Bir den Fazla Yerde Kullanilacak Islemleri Olusturuyoruz 
    Olusturulan Islemlerin Kullanilacagi Yere Import Etmek Yeterli Oluyor */



/* reactive Kullanma Amaci 
    Obje Icindeki HTML Elementi Icinde 
    Data Yazdirma Islemi Icin 
    Degisken Adindan Sonra Direkt En Sondaki Attribute Kullanilarak 
    Yazdirma Islemi Yapilabilir */
/* reactive Kullanildiginda 
    Obje Icindeki Deger Sonradan Degistirilemez */
/* ref Kullanma Amaci 
    Obje Icindeki HTML Elementi Icinde 
    Data Yazdirma Isleminin Anlik Olarak Yapilmasini Saglar */
import { reactive,ref } from 'vue';
import Axios from 'axios';
    
/* User.vue Dosyasinda Hata Olursa 
    Mesajla Bildirilmesi Icin Gereken Paketi Kullaniyoruz */
import { useToast } from 'vue-toast-notification';

/* Axios Kullanarak Back-End Tarafinda Request Atiyoruz 
    Gelen Response i 
    postUser Method Uzerinden Kullaniyoruz */
const postUser = (user) => {

    /* Eklenen Data lari Kaydetme Asamasinda Gorunecek Animasyonu 
        Ilk Asamada Kapali Tutuyoruz */
    const loading = ref(false);
    
    const submitForm = () => {
    
        /* Ekleme Butonuna Tiklandiginda 
            Animasyonun Gorunmesini Sagliyoruz */
        loading.value = true;
    
        Axios({
            method:"POST",
            url:'http://localhost:3000/users',
            data:user
        })
        .then(()=>{
            /* Islem Basarili Olursa Verilecek Mesaj */
            $toast.success('Kullanıcı Kaydı Başarılı!');
        })
        .cathch(()=>{
            /* Islem Basarisiz Olursa Verilecek Mesaj */
            $toast.error('Kullanıcı Kaydı Başarısız!');
        })
        .finally(()=>{
            /* Ekleme Islemi Bittiginde 
                Animasyonun Gorunmesini Durduruyoruz */
            loading.value = false;
        })
    }

    /* Request Atma Ve Gelen Response i Barindiran submitForm Methodunu Ve
        Animasyonun Atandifi loading Degiskenini Disaridan Erisime Aciyoruz */
    return {loading,submitForm}
}

/* Proje Klasoru Icinde Olusturulan 
    composable Klasoru Icinde Yer Alan Ve 
    Proje Icinde Istenilen Yerlerde Kullanilabilir Kodlarin 
    Istenildigi Anda Kullanilmasi Icin Disaridan Erisime Aciyoruz */
export default postUser;