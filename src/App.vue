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
body {
  background-color: #222;
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