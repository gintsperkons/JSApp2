import { reactive } from 'vue';

export const store = reactive({
    login: false,
    loginButtonText: "Login",
    user: {
        name: "Gints Kristaps",
        surname: "Pērkons",
        code: "IT21011"
    }
})