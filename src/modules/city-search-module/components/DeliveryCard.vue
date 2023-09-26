<template>
        <div class="flex flex-col items-center justify-center gap-5 h-full">
            <div v-for="delivery in delivery_types" :key="delivery.type" :class="[{'shadow': selectedDeliveryType == type}, {'pr-5': selectedDeliveryType.length == 0 || selectedDeliveryType != delivery.type}, delivery.available ? '' : 'opacity-50 pointer-events-none' , 'flex border border-color-[#E9F0EB] rounded-3xl justify-between w-[523px]']" @click="selectDeliveryType(delivery)">
                <div class="flex flex-col justify-between gap-10 py-10 px-11 ">
                    <h6 class="text-4xl font-bold min-w-[158px]">
                        {{alias[delivery.type].label}}
                    </h6>
                    <p class="text-5xl text-[#78A1BB] font-bold">{{delivery.price}}$</p>
                </div>
                <img :src="alias[delivery.type].image" :alt="delivery.type" width="100" height="100">
                <div v-if="selectedDeliveryType == delivery.type" class="flex items-center justify-center px-5 rounded-r-3xl  bg-gradient-to-b bg-gradient-310 from-[#FFFFFF00] to-[#65B3E4]">
                    <img src="@/assets/checkmark-icon.svg" alt="checkmark">
                </div>
            </div>
        </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { useStore } from 'vuex';
import pickupImg from '@/assets/pickup-delivery.svg'
import courierImg from '@/assets/courier-delivery.svg'
import postImg from '@/assets/post-delivery.svg'
const store = useStore();

const delivery_types = computed(() => store.getters.getDeliveryTypes)

const alias = ref({
    "pickup": {
        label: "Pick up",
        image: pickupImg
    },
    "courier": {
        label: "Courier",
        image: courierImg
    },
    "post": {
        label: "Post",
        image: postImg
    }
});

const selectedDeliveryType = ref('');

watch(delivery_types, () => {
    selectedDeliveryType.value = ''
})

function selectDeliveryType(delivery) {
    if(delivery.available){
        selectedDeliveryType.value = delivery.type
    }
}
</script>