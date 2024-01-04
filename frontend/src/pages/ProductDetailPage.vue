<template>
    <div v-if="product">
        <div class="img-wrap">
            <img :src="product.imageUrl" />
        </div>
        <div class="product-details">
            <h1>{{ product.name }}</h1>
            <h3 class="price">{{ product.price }}</h3>
            <button class="add-to-cart" @click="addToCart" v-if="props.user && !itemsInCart">Add to Cart</button>
            <button class="grey-button" v-if="props.user && itemsInCart">Items Already exist</button>
            <button class="sign-in" @click="signIn" v-if="!props.user">Sign in to add to Cart</button>
        </div>
    </div>
    <div v-else>
        <NotFoundPage />
    </div>

</template>

<script setup>
import router from '@/router';
import axios from 'axios';
import { computed, onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { getAuth, sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink } from 'firebase/auth';
import NotFoundPage from './NotFoundPage.vue';
import { defineProps } from 'vue';

const props = defineProps({
    user: {
        type: Object,
        default: null,
    }
})
// const user = defineProps(['user']);

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
        console.log('add to cart', props.user);
        const response = await axios.post('/api/users/12345/cart', {id: product.value.id});
        console.log(response.data);
        router.push({
            path:'/cart'
        })
    } catch (error) {
        // console.log(error);
    }
}

watch(async (newUser) => {
    if(newUser) {
        const cartResponse = await axios.get(`/api/users/${newUser.uid}/cart`);
        cartItems.value = cartResponse.data;
    }
});

onMounted(async() => {
    console.log('On mounted',props.user);
    const auth = getAuth();
    if(isSignInWithEmailLink(auth, window.location.href)) {
        let email = window.localStorage.getItem('emailForSignIn');
        if(!email) {
            email = window.prompt('Please provide your email for confirmation');
        }
        signInWithEmailLink(auth, email, window.location.href).then((result) => {
            alert(`${result.user},You have successfully signed in`);
            window.localStorage.removeItem('emailForSignIn');
        }).catch((error) => {
            console.log(error.message);
        })
    }

    const productId = route.params.productId;
    let response = await axios.get(`/api/products/${productId}`);
    product.value = response.data;

    if(props.user) {
        console.log('get carts of', props.user.uid);
        const cartResponse = await axios.get(`/api/users/${props.user.uid}/cart`);
        cartItems.value = cartResponse.data;
    }
})
</script>