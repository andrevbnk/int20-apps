import requestService from "../requestService";

export default {
    saveToken(token) {
        localStorage.setItem('auth.accessToken', token);
    },
    hasToken() {
        return !!this.getToken();
    },
    removeToken() {
        return localStorage.removeItem('auth.accessToken');
    },
    getToken() {
        return localStorage.getItem('auth.accessToken');
    },
    async login(payload) {
        const response = await requestService.post('/login', payload);
        this.saveToken(response.data.accessToken);
        return response;
    },
    async register(payload) {
        return await requestService.post('/register', payload);
    },
    async logout() {
        return await requestService.post('/logout');
    }
}