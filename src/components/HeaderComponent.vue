<script>

import { store } from '../../src/store.js'
export default {
  
  data() {
    return {
      store
    }
  },
  methods: {
    showAlert() {
      var text = store.login ? "out" : "in";
      if (window.confirm("Do you want to log " + text + "?")) {
        store.login = !store.login;
        this.$emit("loginChanged");

        store.loginButtonText = store.login ? "Logout" : "Login";
      }
    },
    fullName() {
      return `${store.user.name} ${store.user.surname}`;
    }
  }
}
</script>

<template>
  <div id="header" :class="{ loggedIn: store.login }">
    <div>
      <div class="image"><img src="@/assets/logoWhite.svg" alt="test"></div>
      <div class="title">
        <h1>Kraken.fm</h1>
      </div>
    </div>
    <div>
      <div v-if="store.login" class="user">
        <div class="avatar"></div>
        <div class="fullName">{{ fullName() }}</div>
      </div>
      <div class="button">
        <button @click="showAlert" :class="{ loggedIn: store.login }" id="login">{{ store.loginButtonText }}</button>
      </div>
    </div>
  </div>
</template>


<style>
.image {
  padding: 5px;
  padding-left: 25px;
  height: 100%;
}

.image>img {
  height: 100%;
}

div.title {
  display: flex;
}

div.button {
  padding-right: 25px;
  display: flex;
  flex-direction: row-reverse;
}

button#login {
  background-color: #7c005d;
  border: #5e0046 0px solid;
  border-radius: 25px;
  width: fit-content;
  padding: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  align-self: center;
  text-transform: uppercase;
  color: #fff;
  font-weight: 700;
}

button#login.loggedIn {
  background-color: #222;
}

div.title>h1 {
  font-weight: 900;
  color: #fff;
  align-self: center;
  text-transform: uppercase;

}

#header>div {

  display: flex;
  flex-direction: row;
}

#header {
  border: 0px solid #fff;
  border-top-width: 1px;
  border-bottom-width: 1px;
  width: 100%;
  height: 75px;
  background-color: #252525;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

#header.loggedIn {
  background-color: #7c005d;
}

.avatar {
  height: 25px;
  width: 25px;
  background-color: #fff;
  border-radius: 100%;
}
.user{
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
  padding-right: 10px;
  margin-right: 5px;
  border-right: #fff solid 1px;
  height: fit-content;
}
.user > .fullName{
margin-left:5px;
}

</style>
