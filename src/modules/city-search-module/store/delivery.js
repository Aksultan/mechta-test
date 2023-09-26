const delivery = {
    state: {
        types: []
    },
    actions: {
        setDeliveryTypes({ commit }, types) {
            commit('SET_DELIVERY_TYPES', types);
        }
    },
    mutations: {
        SET_DELIVERY_TYPES(state, types) {
            state.types = types
        }
    },
    getters: {
        getDeliveryTypes: (state) => state.types
    }
};

export default delivery;
