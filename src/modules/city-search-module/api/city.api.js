import restApiClient from './restApiClient';

const cityApi = {
    getCityByName: async (name) => {
        console.log(restApiClient)
        return restApiClient.get(`delivery/check?search=${name}`)
    }
}

export default cityApi