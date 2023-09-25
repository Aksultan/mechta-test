<template>
    <div :class="[isActive ? 'rounded-t-7.5 border-b-0': 'rounded-7.5', 'flex relative border border-[#E9F0EB] w-min']">
        <input 
            v-model="text" 
            type="text" 
            class="bg-transparent px-5 outline-none text-2xl font-bold font-roboto max-sm:text-base placeholder:text-[#D9E4DC] placeholder:font-normal"
            @input="debounce(searchCityByName(), 500)" 
            placeholder="Enter name of the city">
        <button class="btn rounded-12.5 text-base font-bold text-white bg-gradient-to-r bg-gradient-280 from-blue to-light-blue py-3.5 px-4">
            ENTER
        </button>
        <div :class="[{hidden: !isActive}, 'absolute transtion-all top-full -left-[1px] -right-[1px] bg-white border border-t-0 rounded-b-7.5 border-[#E9F0EB] p-5']">
            <ul>
                <li v-for="(item, index) in state.cities.data" :key="index" class="truncate" title="test">
                    {{ item.city }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, reactive } from 'vue';
import cityApi from '../api/city.api';
import debounce from 'lodash';

const text = ref('');

const isActive = computed(() => Boolean(text.value.length));
const state = reactive({
    cities: null
});

console.log(text);

async function searchCityByName() {
    if(text.value.length > 2){
        try {
            state.cities = await cityApi.getCityByName(text.value);
            console.log('changing', text)
        } catch (e) {
            console.error(e.message);
        }
    }
}
</script>