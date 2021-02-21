import requestService from "../requestService";

export default {
    async fetchLoggedUser() {
        const response = await requestService.get('/users/me');
        return response?.data;
    }
}