import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import './main.css'

import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzFKuh7aWmj5h0AckP3_WYbeoxIzyEb5Y",
  authDomain: "ecommerceapp-ddb6a.firebaseapp.com",
  projectId: "ecommerceapp-ddb6a",
  storageBucket: "ecommerceapp-ddb6a.appspot.com",
  messagingSenderId: "466213292373",
  appId: "1:466213292373:web:f64c6bfa45fed619eb87dc"
};

// Initialize Firebase
initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app')
