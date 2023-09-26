<template>
    <div :class="[isError ? 'border-error' : 'border-[#E9F0EB]', isDropdownVisible ? 'rounded-t-7.5 border-b-0': 'rounded-7.5', 'flex relative border  w-min']">
        <input 
            ref="input"
            v-model="text" 
            type="text" 
            class="bg-transparent px-5 outline-none text-2xl font-bold font-roboto max-sm:text-base placeholder:text-[#D9E4DC] placeholder:font-normal"
            @input="suggestByInput"
            @keypress.enter="selectCity(cities[0])"
            @focus="isError = false" 
            placeholder="Enter name of the city">
        <button :class="[isError ? 'from-error to-white' : 'from-blue to-light-blue', 'btn rounded-12.5 text-base font-bold text-white bg-gradient-to-r bg-gradient-280 py-3.5 px-4 active:scale-90']" @click="selectCity(cities[0])">
            <img v-if="isError" class="max-w-none" src="@/assets/cancel-icon.svg" width="20" alt="cancel">
            <span v-else>
                ENTER
            </span>
        </button>
        <p v-if="isError" class="absolute left-0 -bottom-2/4 text-error">
            We didn't found such city. Please check spelling
        </p>
        <div :class="[{hidden: !isDropdownVisible}, 'absolute transtion-all top-full -left-[1px] -right-[1px] bg-white border border-t-0 rounded-b-7.5 border-[#E9F0EB] px-5']">
            <ul>
                <li v-for="city in cities" :key="city" class="truncate py-5 [&:not(:last-child)]:border-b cursor-pointer hover:text-secondary" :title="city" @click="selectCity(city)">
                    {{ city }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import cityApi from '../api/city.api';
import debounce from 'lodash';

const store = useStore();

const citites_sug = ["nur-sultan", "almaty", "aaa"];


const text = ref('');
const isError = ref(false);
const showDropdown = ref(false);

const input = ref('');

const isDropdownVisible = computed(() => showDropdown.value && cities.value.length)

function suggestByInput() {
    showDropdown.value = true;
    isError.value = false;
    if (citites_sug.some(city => city.includes(text.value))) {
        cities.value = citites_sug.filter(city => city.includes(text.value));
    } else {
        cities.value = [];
    }
};

const cities = ref([]);


function selectCity(name) {
    if (isError.value) {
        text.value = '';
        showDropdown.value = false;
        input.value.focus();
    } else {
        debounce(searchCityByName(name), 500);
        if (name) {
            text.value = name;
        }
        showDropdown.value = false;
    }

}

async function searchCityByName(name) {
    try {
        const {data} = await cityApi.getCityByName(name)
        await store.dispatch('setDeliveryTypes', data);
    } catch (e) {
        if (e.response.status == 404) {
            isError.value = true 
        }
        await store.dispatch('setDeliveryTypes', []);
    }
}
</script>