<template>
    <v-row>
        <v-col cols="12">
            <div class="d-flex flex-no-wrap justify-space-between nav-bar">
                <div>
                    <router-link to="/products" class="products-link">
                        <v-img class="logo-img" :src="logo" ></v-img>
                    </router-link>
                </div>
                <div class="d-flex align-center mr-4">
                    <v-btn v-if="props.user" @click="signOut" class="signout-btn">Sign Out</v-btn>  
                    <router-link to="/cart" >
                        <v-btn class="btn-style">Shopping Cart</v-btn>
                    </router-link>      
                </div>        
            </div>
        </v-col>
    </v-row>
</template>

<script setup>
import logo from '@/assets/logo-hexagon.svg'
import { defineProps } from 'vue';
import { getAuth, signOut as FBSignOut } from 'firebase/auth';
import router from '@/router';

const props = defineProps({
    user: {
        type: Object,
        default: null,
    }
});

const signOut = async() => {
    const auth = getAuth();
    FBSignOut(auth);
    router.push({
        path:'/products'
    })
}
</script>

<style lang="scss" scoped>
@use "@/styles/button" as *;        //don't need to use namespace

.nav-bar {
    border-bottom: 1px solid #ddd;
    height: 75px;
}  
.logo-img {
    width: 120px;
    height: 120px;
}
.signout-btn {
    @extend .btn-style;
    margin-right: 10px;
}

</style>