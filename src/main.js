import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initializeApp } from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyCO8jq4LX89XaMRb-gbiP7gJNXwzzIpvII",
    authDomain: "vue-login-cda24.firebaseapp.com",
    projectId: "vue-login-cda24",
    storageBucket: "vue-login-cda24.appspot.com",
    messagingSenderId: "860151590464",
    appId: "1:860151590464:web:1e6039d6083b41071e79a5",
  };
  
initializeApp(firebaseConfig);
createApp(App).use(router).mount('#app')
