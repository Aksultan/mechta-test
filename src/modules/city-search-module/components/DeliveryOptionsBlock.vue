<template>
    <div class="h-full">
        <delivery-card v-if="hasData"/>
        <img v-else class="w-full lg:rounded-l-10 lg:rounded-tr-none rounded-t-10" src="@/assets/delivery-bg.svg" alt="delivery image">
    </div>
</template>

<script setup>
import { onBeforeUnmount, ref } from 'vue';
import { useStore } from 'vuex';
import DeliveryCard from './DeliveryCard.vue';

const store = useStore();
const hasData = ref(false);


const unwatch = store.watch((state, getters) => {
    hasData.value = (getters?.getDeliveryTypes?.length || 0) > 0
})



onBeforeUnmount(()=>unwatch())
</script>