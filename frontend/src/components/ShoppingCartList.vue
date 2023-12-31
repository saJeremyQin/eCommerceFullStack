<template>
        <div 
            class="product-container"
            v-for="product in products"
            :key="product.id"
        >
            <img class="product-image" :src="product.imageUrl" />
            <div class="details-wrap">
                <h3>{{ product.name }}</h3>
                <p>{{ product.price }}</p>
            </div>
            <button class="remove-button" @click="removeFromCart(product.id)">Remove from Cart</button>
        </div> 
</template>

<script setup>
import { defineProps } from 'vue';
import eventBus from '@/utils/eventBus';
const removeFromCart = (productId) => {
    // console.log(id);
    eventBus.emit('removeFrom-Cart',productId);
} 
defineProps(['products']);
</script>
