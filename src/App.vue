<script>

export default {
  data() {
    return {
    };
  },
};
</script>

<template>
  <router-view></router-view>
</template>

<style>
:root {
  --text-white: #ffffff;
  --text-white-80: #ffffffcc;
  --text-white-70: #ffffffb2;
  --text-white-50: #ffffff80;
  --text-I: #fb0048;
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

#base.logout {
  background: url("@/assets/d68e13334b38b3619645510296460da5.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

#page {
  width: 100%;
  height: 100%;
}
</style>
