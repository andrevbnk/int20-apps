import * as actions from './types/actions';
import * as mutations from './types/mutations';
import authService from "../../../services/auth/authService";
import userService from "../../../services/user/userService";

export default {
    [actions.SIGN_IN]: async ({ dispatch }, signInData) => {
        await authService.login(signInData);
        dispatch(actions.FETCH_LOGGED_USER);
    },
    [actions.FETCH_LOGGED_USER]: async ({ commit }) => {
        const userResponse = await userService.fetchLoggedUser();
        commit(mutations.SET_LOGGED_USER, userResponse);
    },
    [actions.SIGN_UP]: async (context, signUpData) => {
        await authService.register(signUpData);
    },
    [actions.SIGN_OUT]: async ({ commit }) => {
        commit(mutations.SIGN_OUT);
    }
}