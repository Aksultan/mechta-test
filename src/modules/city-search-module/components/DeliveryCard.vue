<template>
        <div class="flex flex-col items-center justify-center gap-5 h-full">
            <div v-for="delivery in delivery_types" :key="delivery.name" :class="[!delivery.active ? ' pointer-events-none' : '' , 'flex border border-color-[#E9F0EB] rounded-3xl justify-between w-[523px]']">
                <div class="flex flex-col justify-between py-10 px-11 ">
                    <h6 class="text-4xl font-bold min-w-[158px]">
                        {{delivery.name}}
                    </h6>
                    <p class="text-5xl">awd{{delivery.price}}</p>
                </div>
                <img :src="delivery.image" :alt="delivery.name" width="100" height="100">
                <div class="flex items-center justify-center px-5 rounded-r-3xl  bg-gradient-to-b bg-gradient-310 from-[#FFFFFF00] to-[#65B3E4]">
                    <img src="@/assets/checkmark-icon.svg" alt="checkmark">
                </div>
            </div>
        </div>
</template>

<script setup>
import { onBeforeUnmount, ref } from 'vue';
import { useStore } from 'vuex';
import pickupImg from '@/assets/pickup-delivery.svg'
import courierImg from '@/assets/courier-delivery.svg'
import postImg from '@/assets/post-delivery.svg'
const store = useStore();


let delivery_types = ref([
    {
        name: "Pick up",
        image: pickupImg
    },
    {
        name: "Courier",
        image: courierImg
    },
    {
        name: "Post",
        image: postImg
    }
]);


const unwatch = store.watch(
    (state, getters) => {
        getters.getDeliveryTypes.forEach(item => delivery_types[item.type] = { ...delivery_types[item.type], ...item })
    }
)

onBeforeUnmount(() =>
    unwatch()
)


</script>