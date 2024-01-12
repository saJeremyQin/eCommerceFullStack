<template>
    <v-row class="mt-4">
        <v-col cols="12" md="4" v-for="(product) in props.products" :key="product.id">
            <v-card class="text-center">
                <v-img :src="product.imageUrl" />
                <v-card-title class="product-name">{{ product.name }}</v-card-title>
                <v-card-subtitle class="product-price">{{ product.price }}</v-card-subtitle>
                <v-btn 
                    :to="'products' + '/' + product.id"
                    class="mb-4 btn-style"
                >
                    View Details
                </v-btn>
            </v-card>
        </v-col>
    </v-row>
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

<style lang="scss" scoped>
@use "@/styles/button";

</style>