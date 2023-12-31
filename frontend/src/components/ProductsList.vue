<template>
  <div class="grid-wrap">
        <div 
            class="product-item"
            v-for="product in props.products"
            :key="product.id"
        >
            <img :src="product.imageUrl" />
            <h3 class="product-name">{{ product.name }}</h3>
            <p class="product-price">{{ product.price }}</p>
            <router-link :to="'products' + '/' + product.id">
                <button>View Details</button>
            </router-link>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    products: {
        type: Array,
        required: true,
    }
});
</script>