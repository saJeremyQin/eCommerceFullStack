<template>
    <v-container>
        <div v-if="product">
            <v-row>
                <v-col cols="12" md="10" offset-md="1">
                    <v-img :src="product.imageUrl" alt="Product Image" class="detail-img"></v-img>
                </v-col>
                <v-col cols="12" md="10" offset-md="1">
                    <div class="d-flex flex-no-wrap justify-space-between">
                        <v-text class="text-h3">{{ product.name }}</v-text>
                        <v-text class="text-h5">{{ product.price }}</v-text>
                    </div>
                </v-col>
                <v-col cols="12" md="10" offset-md="1">
                    <v-btn v-if="props.user && !itemsInCart" @click="addToCart" block="true" class="btn-style">
                        Add to Cart
                    </v-btn>
                    <v-btn v-if="props.user && itemsInCart" disabled class="btn-style" block="true">
                        Items Already Exist
                    </v-btn>
                    <v-btn v-if="!props.user" @click="signIn" class="btn-style" block="true">
                        Sign in to add to Cart
                    </v-btn>
                </v-col>     
            </v-row>
        </div>
        <div v-else>
            <NotFoundPage />
        </div>
    </v-container>
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
    if(email === null) {
        return ;
    }
    
    const auth = getAuth();

    const actionCodeSettings = {
        url:`https://vue-ecommerce-fullstack.onrender.com/products/${product.value.id}`,
        // url:`https://legendary-space-palm-tree-rjx9vppjqw2wqvg-8080.preview.app.github.dev/products/${product.value.id}`,
        handleCodeInApp: true,
    };
    await sendSignInLinkToEmail(auth, email, actionCodeSettings);
    alert('A login link is sent to the email you provided.');
    window.localStorage.setItem('emailForSignIn', email);
}

const addToCart = async () => {
    try {
        console.log('add to cart, uid', props.user.uid);
        const response = await axios.post(`/api/users/${props.user.uid}/cart`, {id: product.value.id});
        console.log('add to cart, response',response.data);
        router.push({
            path:'/cart'
        })
    } catch (error) {
        // console.log(error);
    }
}

watch(async () => {
    if(props.user) {
        const cartResponse = await axios.get(`/api/users/${props.user.uid}/cart`);
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
            alert(`${result.user.uid},You have successfully signed in`);
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

<style scoped>
.detail-img {
    height: 400px;
}
.btn-style {
    background-color:#269EFF;
    border: 1px solid #1F7087;
}
</style>