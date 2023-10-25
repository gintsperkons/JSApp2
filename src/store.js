import { reactive } from 'vue';

export const store = reactive({
    login: false,
    loginButtonText: "Login",
    tab: "home",
    user: {
        name: "Gints Kristaps",
        surname: "Pērkons",
        code: "IT21011"
    }
})