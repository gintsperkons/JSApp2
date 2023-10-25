<script>
import { store } from '../src/store.js'
import HeaderComponent from './components/HeaderComponent.vue';
import NavigationComponent from './components/NavigationComponent.vue';
import HomeComponent from './components/HomeComponent.vue';
import AboutMeComponent from './components/AboutMeComponent.vue';

export default {
  components: {
    HeaderComponent,
    NavigationComponent,
    HomeComponent,
    AboutMeComponent
  },
  data() {
    return {
      store
    }
  }
}
</script>

<template>
      <HeaderComponent />
    <div id="body">
        <NavigationComponent />
      <div id="page" v-if="store.login">
        <HomeComponent />
        <AboutMeComponent />
      </div>
    </div>
</template>

<style>
:root {
  --text-white:#FFFFFF;
  --text-white-80:#FFFFFFCC;
  --text-white-70:#FFFFFFB2;
  --text-white-50:#FFFFFF80;
  --text-important:#FB0048;
  --text-important-20 :#FB004833;
  --text-gray:#464157;
  --text-green:#67FF64;
  --base: #8645E8;
  --base-seetrough:#08021080;
  --base-border:#916DDC;
  --button-login-text:#1C073A;
  --button-logout-text:#D7B8FF;
  --button-logout-background:#391372;
  --background:#191621;
  --background-highlight:#22202B;
  --background-border:#544F69;


  color: var(--text-white);
}

body {
font-size: 18px;
font-style: normal;
font-weight: 800;
line-height: normal;
}

#app {
  all:unset;
  padding:0px;
  margin:0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-self: stretch !important;
  background-color: #191822;
}
#body{
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
}


#page {
  width: 100%;
  height: 100%;
}

</style>