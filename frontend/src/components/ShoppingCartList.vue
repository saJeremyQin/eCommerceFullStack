<template>
    <v-row>
        <v-col cols="12" v-for="product in products" :key="product.id">
            <div class="d-flex flex-no-wrap justify-space-between">
                <div class="d-flex flex-no-wrap align-center">
                    <v-avatar
                        class="ma-3"
                        size="125"
                        rounded="0"
                    >
                        <v-img :src="product.imageUrl"></v-img>
                    </v-avatar>
                    <div >
                        <v-card-title class="text-h5">
                            {{ product.name }}
                        </v-card-title>
                        <v-card-subtitle>
                            {{ product.price }}
                        </v-card-subtitle>
                    </div>
                </div>
                <v-card-actions>
                    <v-btn
                        class="ms-2 rm-button"
                        variant="outlined"
                        size="small"
                        @click="removeFromCart(product.id)"
                    >
                        Remove from Cart
                    </v-btn>
                </v-card-actions>  
            </div>
        </v-col>
    </v-row> 
</template>

<script setup>
import { defineProps } from 'vue';
import eventBus from '@/utils/eventBus';
const removeFromCart = (productId) => {
    eventBus.emit('removeFrom-Cart',productId);
} 
defineProps(['products']);
</script>

<style scoped>
.rm-button {
    background-color:#269EFF;
    border: 1px solid #1F7087;
}   
</style>
