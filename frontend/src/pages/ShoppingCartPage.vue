<template>
    <h1>Shopping Cart</h1>
    <div v-if="cartItems.length > 0">
        <ShoppingCartList :products="cartItems"/>
        <button class="checkout-button">Proceed to Checkout</button>
    </div>
    <div v-else>
        You have no items in your cart yet.
    </div>
</template>

<script setup>
import { onMounted, ref, watch, defineProps } from 'vue';
import axios from 'axios';
import eventBus from '@/utils/eventBus';
import ShoppingCartList from '@/components/ShoppingCartList.vue';
const cartItems = ref([]);

const props = defineProps({
    user: {
        type: Object,
        default: null,
    }
});

eventBus.on('removeFrom-Cart', async (productId) => {
    // console.log('id is', id);
    try {
        const response = await axios.delete(`/api/users/${props.user.uid}/cart/${productId}`);
        // console.log(response.data); 
        cartItems.value = response.data;    
    } catch (error) {
        // console.log(error.message);   
    }
})

watch(async () => {
    if(props.user) {
        const cartResponse = await axios.get(`/api/users/${props.user.uid}/cart`);
        cartItems.value = cartResponse.data;
    }
});

onMounted(async () => {
    if(props.user) {
        const response = await axios.get(`/api/users/${props.user.uid}/cart`);
        cartItems.value = response.data;
        console.log('mounted cartItem is', cartItems.value);
    }
})

</script>
