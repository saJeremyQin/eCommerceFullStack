<template>
    <div class="nav-bar">
        <router-link to="/products" class="products-link">
            <div class="logo-wrap">
                <img :src=logo />
            </div>
        </router-link>
        <div class="nav-buttons-wrap">
            <button v-if="props.user" @click="signOut">Sign Out</button>
            <router-link to="/cart" >
                <button>Shopping Cart</button>
            </router-link>
        </div>
    </div>
</template>

<script setup>
import logo from '@/assets/logo-hexagon.svg'
import { defineProps } from 'vue';
import { getAuth, signOut as FBSignOut } from 'firebase/auth';

const props = defineProps({
    user: {
        type: Object,
        default: null,
    }
});

const signOut = async() => {
    const auth = getAuth();
    FBSignOut(auth);
}
</script>