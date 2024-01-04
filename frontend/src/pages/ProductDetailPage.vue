<template>
    <div v-if="product">
        <div class="img-wrap">
            <img :src="product.imageUrl" />
        </div>
        <div class="product-details">
            <h1>{{ product.name }}</h1>
            <h3 class="price">{{ product.price }}</h3>
            <button 
                :disabled="itemsInCart"
                :class="{'grey-button': itemsInCart}"
                class="add-to-cart" 
                @click="addToCart"
            >
                {{ itemsInCart ? 'Items already exist' : 'Add to Cart'}}
            </button>
            <button class="sign-in" @click="signIn">Sign in to add to Cart</button>
        </div>
    </div>
    <div v-else>
        <NotFoundPage />
    </div>

</template>

<script setup>
import router from '@/router';
import axios from 'axios';
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { getAuth, sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink } from 'firebase/auth';
import NotFoundPage from './NotFoundPage.vue';

const product = ref();
const cartItems = ref([]);

const itemsInCart = computed(() => {
    const productId = product.value.id;
    return cartItems.value.some(item => item.id === productId);
})
const route = useRoute();

const signIn = async() => {
    const email = prompt("Please input your email");
    const auth = getAuth();

    const actionCodeSettings = {
        url:`https://legendary-space-palm-tree-rjx9vppjqw2wqvg-8080.preview.app.github.dev/products/${product.value.id}`,
        handleCodeInApp: true,
    };
    await sendSignInLinkToEmail(auth, email, actionCodeSettings);
    alert('A login link is sent to the email you provided.');
    window.localStorage.setItem('emailForSignIn', email);
}

const addToCart = async () => {
    try {
        const response = await axios.post('/api/users/12345/cart', {id: product.value.id});
        console.log(response.data);
        router.push({
            path:'/cart'
        })
    } catch (error) {
        console.log(error);
    }
}

onMounted(async() => {
    const auth = getAuth();
    if(isSignInWithEmailLink(auth, window.location.href)) {
        let email = window.localStorage.getItem('emailForSignIn');
        if(!email) {
            email = window.prompt('Please provide your email for confirmation');
        }
        signInWithEmailLink(auth, email, window.location.href).then((result) => {
            // console.log(result.user);
            alert(`${result.user},You have successfully signed in`);
            window.localStorage.removeItem('emailForSignIn');
        }).catch((error) => {
            console.log(error.message);
        })
    }

    const productId = route.params.productId;
    let response = await axios.get(`/api/products/${productId}`);
    product.value = response.data;

    const cartResponse = await axios.get('/api/users/12345/cart');
    cartItems.value = cartResponse.data;
})
</script>