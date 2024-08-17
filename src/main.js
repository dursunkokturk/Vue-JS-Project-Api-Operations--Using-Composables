/* Projenin Tamami Icin Gecerli Olacak Islemleri 
    Bu Dosya Icinde Yapiyoruz */

import { createApp } from 'vue'
import App from './App.vue'
import Header from '@/components/Fixed/Header.vue'

/* Loading Islemi Asamasindaki Animasyonu Ekliyoruz */
import Loading from '@/components/Utility/Loading.vue'

/* Bildirim Paneli Icin Gereken Kod Paketi Kullaniyoruz */
import ToastPlugin from 'vue-toast-notification'

/* Bildirim Paneli Icin Gereken CSS Paketi Kullaniyoruz */
import 'vue-toast-notification/dist/theme-bootstrap.css'

/* App.vue Dosyasina Proje Icinde Ulasmak Icin 
    createApp Method Kullanarak app Degiskeni Uzerinden Kullaniyoruz */
const app=createApp(App);

/* Proje Icinde Gerektigi Yerlerde Header Componentini Kullanmak Icin
    component Method Icinde 
    Ilk Parametre Kullanilacak Componentinin Proje Icinde Cagirilacagi Isim
    Ikinci Parametre Componentin Ismi */
app.component('app-header',Header)

/* Loading Animasyonunu Global Olarak Projeye Dahil Ettigimizde 
    Hangi Sayfada Kullanmak Istersek O Sayfada 
    Method Icindeki Ilk Parametre Kisminda Yazan Degeri Component Olarak Kullaniyoruz */
app.component('app-loading',Loading)

/* Notification Paketini Tum Projede Kullanilabilir Hale Getiriyoruz */
app.use(ToastPlugin);

app.mount('#app')