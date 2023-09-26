import restApiClient from './restApiClient';

const cityApi = {
    getCityByName: async (name) => {
        return restApiClient.get(`delivery/check?search=${name}`)
    }
}

export default cityApi