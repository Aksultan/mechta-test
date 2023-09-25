<template>
    <div>
        <delivery-card v-if="hasData"/>
        <img v-else class="w-full lg:rounded-l-10 lg:rounded-tr-none rounded-t-10" src="@/assets/delivery-bg.svg" alt="delivery image">
    </div>
</template>

<script setup>
import {ref} from 'vue'
import DeliveryCard from './DeliveryCard.vue';

const hasData = ref(false)
</script>