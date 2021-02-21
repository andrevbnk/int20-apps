import requestService from "../requestService";

export default {
    async addFoundAdvert(payload) {
        const response = await requestService.post('/adverts/found', payload);
        return response?.data;
    },
    async addLostAdvert(payload) {
        console.log(payload);
        const response = await requestService.post('/adverts/lost', payload);
        return response?.data;
    }
}