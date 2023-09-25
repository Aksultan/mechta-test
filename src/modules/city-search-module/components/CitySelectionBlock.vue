<template>
    <div class="md:container mx-auto flex lg:flex-row flex-col gap-7.5">
        <div class="flex flex-col gap-20 lg:w-2/4 px-6.25 pt-28">
            <div class="flex flex-col gap-5">
                <h3 class="text-4xl font-bold font-roboto">Delivery cost</h3>
                <p class="text-secondary text-base mb-10">Enter name of the city to count delivery cost</p>
                <city-selection-dropdown-input/>
            </div>
            <div class="flex flex-col gap-5">
                <h6 class="text-base">Most popular cities</h6>
                <ul class="flex flex-wrap justify-between max-w-full gap-2">
                    <li v-for="city of cities" class="sm:min-w-[224px] min-w-[130px] border-b pb-2 font-roboto text-secondary" :key="city">{{ city }}</li>
                </ul>
            </div>
        </div>
        <div class="lg:w-2/4">
            <delivery-options-block/>
        </div>
    </div>
</template>

<script setup>
import CitySelectionDropdownInput from '../ui/CitySelectionDropdownInput.vue';
import DeliveryOptionsBlock from './DeliveryOptionsBlock.vue';
const cities = ["Nur - Sultan", "Zhana Turmis", "Almaty", "Karaganda", "Shymkent", "Kentau", "Atyrau", "Aitei", "Aktau", "Pavlodar"]

</script>