<script>

import { store } from '../../src/store.js'
export default {
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div v-if="store.tab=='home'" id="home"><h1>Home</h1></div>
</template>

<style>
#home {
    width: 75%;
    text-transform: uppercase;
    color:#fff;

}
#home > h1 {
    font-weight: 900;
}
</style>
