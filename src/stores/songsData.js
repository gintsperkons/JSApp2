import { reactive } from 'vue';

const userDefaults = {
    name: "Gints Kristaps",
    surname: "Pērkons",
    code: "IT21011",
    login: false,
    lastLogin: []
}

export const store = reactive({
    aboutForm:{
        active: false
    },
    songListData:{
        filterItem: "None"
    },

    user: {
        ...userDefaults,
    },
    
    
    logInUser() {
        this.user.login = true;
        this.user.lastLogin.push( this.getFormattedDate());
    },

    getFormattedDate() {
        const date = new Date();
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');

        return `${day}.${month}.${year} - ${hours}:${minutes}`;
    },

    resetUserProperties() {
        this.user = {
            ...userDefaults,
        };
    },

    //create a function which, when called, will reset all properties values to default on the `user` object
    
})
export default {testData:"te"};