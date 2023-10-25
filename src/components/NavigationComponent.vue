<script>
import { store } from '../../src/store.js'
export default {
    methods: {
        changeTab(tabName, event) {
            var element = event.target;
            if (event.target.tagName.trim().toLowerCase() == "p") {
                element = event.target.parentNode
            }
            store.tab = element.id;

            document.querySelectorAll("#nav > a").forEach(
                (element) => { 
                    element.className = element.className.replace("active","").trim() 
                });
            element.className = element.className.trim() + "active";
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
        <a id="home" @click="changeTab('home', $event)">
            <p>Home</p>
        </a>

        <a id="about" @click="changeTab('about', $event)">
            <p>About Me</p>
        </a>
    </div>
</template>


<style>
#nav{
    padding-top: 20px;
}
#nav>a {
    width: 310px;
    height: 42px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
}

#nav>a>p {
    margin-left: 40px;
    color: var(--text-white);
    font-size: 18px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
}

#nav>a.active {
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
