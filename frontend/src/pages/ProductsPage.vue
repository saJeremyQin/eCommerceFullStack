<template>
    <h1>Products</h1>
    <ProductsList :products="products"/>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';

const products = ref([]);

onMounted(async () => {
    try {
        const response =  await axios.get('/api/products');
        products.value = response.data;   
    } catch (error) {
        console.log(error.message);
    }
})


import ProductsList from '../components/ProductsList.vue'
</script>