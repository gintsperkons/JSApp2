<script>
import { store } from "./stores/songsData.js";

export default {
  data() {
    return {
      store
    };
  },
};
</script>

<template>
  <HeaderComponent />
  <div id="base" :class="{ loggedOut: !store.user.login }">
    <router-view v-if="!store.user.login"></router-view>
    <div :class="{ logout: !store.user.login }" id="body">
      <NavComponent />
      <div id="page" v-if="store.user.login">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style>
:root {
  --text-white: #ffffff;
  --text-white-80: #ffffffcc;
  --text-white-70: #ffffffb2;
  --text-white-50: #ffffff80;
  --text-important: #fb0048;
  --text-important-20: #fb004833;
  --text-gray: #464157;
  --text-green: #67ff64;
  --base: #8645e8;
  --base-seetrough: #08021080;
  --base-border: #916ddc;
  --button-login-text: #1c073a;
  --button-logout-text: #d7b8ff;
  --button-logout-background: #391372;
  --background: #191621;
  --background-highlight: #22202b;
  --background-border: #544f69;

  color: var(--text-white);
}

body {
  font-size: 18px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
}

#app {
  all: unset;
  padding: 0px;
  margin: 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-self: stretch !important;
  background-color: var(--background);
}

#body {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
}

#base {
  height: -webkit-fill-available;
}



#page {
  width: 100%;
  height: 100%;
}
</style>
