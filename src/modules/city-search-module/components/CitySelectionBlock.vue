<template>
    <div class="flex max-sm:flex-col gap-7.5">
        <div class="px-6.25">
            <div class="flex flex-col gap-5">
                <h3 class="text-4xl font-bold font-roboto">Delivery cost</h3>
                <p class="text-secondary text-base">Enter name of the city to count delivery cost</p>
                <!-- <city-selection-dropdown-input/> -->
            </div>
            <div class="flex flex-col gap-5">
                <h6 class="text-base">Most popular cities</h6>
                <ul class="flex flex-wrap justify-between max-w-full">
                    <li class="min-w-[130px] border-b pb-2 font-roboto text-secondary">Nur - Sultan</li>
                    <li class="min-w-[130px] border-b pb-2 font-roboto text-secondary">Zhana Turmis</li>
                    <li class="min-w-[130px] border-b pb-2 font-roboto text-secondary">Almaty</li>
                    <li class="min-w-[130px] border-b pb-2 font-roboto text-secondary">Karaganda</li>
                    <li class="min-w-[130px] border-b pb-2 font-roboto text-secondary">Shymkent</li>
                    <li class="min-w-[130px] border-b pb-2 font-roboto text-secondary">Kentau</li>
                    <li class="min-w-[130px] border-b pb-2 font-roboto text-secondary">Atyrau</li>
                    <li class="min-w-[130px] border-b pb-2 font-roboto text-secondary">Aitei</li>
                    <li class="min-w-[130px] border-b pb-2 font-roboto text-secondary">Aktau</li>
                    <li class="min-w-[130px] border-b pb-2 font-roboto text-secondary">Pavlodar</li>
                </ul>
            </div>
        </div>
        <div>
            <img class="w-full" src="@/assets/delivery-bg.svg" alt="delivery image">
        </div>
    </div>
</template>

<script setup>
// import CitySelectionDropdownInput from '../ui/CitySelectionDropdownInput.vue';
</script>