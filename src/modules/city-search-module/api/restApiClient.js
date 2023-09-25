import axios from 'axios';

const restApiClient = axios.create({
    baseURL: 'https://test-frontend.stage.mechta.market/'
})

export default restApiClient