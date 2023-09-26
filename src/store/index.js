import {createStore} from 'vuex';

import {delivery} from '@/modules/city-search-module';

export default new createStore({
    modules: {
        delivery
    }
})
