<script>

import {store} from "../stores/songsData.js";
export default {
    methods: {  
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div id="nav" v-if="store.user.login">
        <router-link to="/home">
            <a id="home">
                <p>Home</p>
            </a>
        </router-link>
        <router-link to="/about-me">
            <a id="about">
                <p>About Me</p>
            </a>
        </router-link>
    </div>
</template>


<style>
#nav {
    padding-top: 20px;
    padding-left:20px;
}

#nav>a {
    width: 310px;
    height: 42px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
}

#nav>a>a>p {
    margin-left: 20px;
    color: var(--text-white);
    font-size: 18px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
}

#nav>a.router-link-active {
    background-image: url("@/assets/active-tab.svg");
}

#nav {
    width: 350px;
    height: 982px;
    flex-shrink: 0;
    border-right: 1px solid var(--background-border);
    background: var(--background-highlight);
    display: flex;
    flex-direction: column;
}
</style>
