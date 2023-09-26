<template>
    <div :class="[isActive ? 'rounded-t-7.5 border-b-0': 'rounded-7.5', 'flex relative border border-[#E9F0EB] w-min']">
        <input 
            v-model="text" 
            type="text" 
            class="bg-transparent px-5 outline-none text-2xl font-bold font-roboto max-sm:text-base placeholder:text-[#D9E4DC] placeholder:font-normal"
            @input="suggestByInput" 
            placeholder="Enter name of the city">
        <button class="btn rounded-12.5 text-base font-bold text-white bg-gradient-to-r bg-gradient-280 from-blue to-light-blue py-3.5 px-4 active:scale-90">
            ENTER
        </button>
        <div :class="[{hidden: !isActive}, 'absolute transtion-all top-full -left-[1px] -right-[1px] bg-white border border-t-0 rounded-b-7.5 border-[#E9F0EB] px-5']">
            <ul>
                <li v-for="city in state.cities" :key="city" class="truncate py-5 [&:not(:last-child)]:border-b cursor-pointer hover:text-secondary" :title="city" @click="selectCity(city)">
                    {{ city }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, reactive } from 'vue';
import { useStore } from 'vuex';
import cityApi from '../api/city.api';
import debounce from 'lodash';

const text = ref('');

const citites = ["nur-sultan", "almaty"];

const store = useStore();

function suggestByInput() {
    if (citites.some(city => city.includes(text.value))) {
        state.cities = citites.filter(city => city.includes(text.value));
    } else {
        state.cities = [];
    }
};

const isActive = computed(() => Boolean(text.value.length));
const state = reactive({
    cities: []
});


function selectCity(name) {
    debounce(searchCityByName(name), 500);
}

async function searchCityByName(name) {
    if(text.value.length > 2){
        try {
            const {data} = await cityApi.getCityByName(name)
            await store.dispatch('setDeliveryTypes', data);
        } catch (e) {
            console.error(e.message);
        }
    }
}
</script>