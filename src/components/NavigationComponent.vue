<script>
import { store } from '../../src/store.js'
export default {
    methods:{
        changeTab(tabName){
            store.tab = tabName;
        }
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div id="nav" v-if="store.login">
        <button @click="changeTab('home')">Home</button>
        <button @click="changeTab('about')">About Me</button>
    </div>
</template>


<style>
#nav > button {
    background-color: purple;
    color :#fff;
    border-top-right-radius: 10px ;
    border-bottom-right-radius: 10px ;
    width: 80%;
}

#nav {
    width: 25%;
    display: flex;
    flex-direction: column;
    margin:10px;
}

</style>
