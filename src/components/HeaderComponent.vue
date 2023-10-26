<script>

import { store } from "../stores/songsData.js";
export default {

  data() {
    return {
      store
    }
  },
  methods: {
    showAlert() {
      if (store.user.login) {
        if (window.confirm("Do you want to logout?")) {
          store.resetUserProperties();
        }
          return;
      }
      if (window.confirm("Do you want to login?")) {
        store.logInUser();
      }
    },
    fullName() {
      return `${store.user.name} ${store.user.surname}`;
    }
  }
}
</script>

<template>
  <div id="header" :class="{ logout: !store.user.login }">
    <div>
      <div class="image"><img src="@/assets/logoWhite.svg" alt="test"></div>
      <div class="title">
        <h1>Kraken.fm</h1>
      </div>
    </div>
    <div>
      <div v-if="store.user.login" class="user">
        <div class="avatar"><img src="@/assets/avatar.svg" alt=""></div>
        <div class="fullName">{{ fullName() }}</div>
      </div>
      <div id="login" v-if="!store.user.login">
        <router-link to="/home">
          <a @click="showAlert">Login</a>
        </router-link>
      </div>
      <div id="logout" v-if="store.user.login">
        <router-link to="/">
          <a @click="showAlert">Logout</a>
        </router-link>
      </div>
    </div>
  </div>
</template>


<style>
.image {
  width: 51px;
  height: 51px;
  flex-shrink: 0;
}

.image {
  display: flex;
  align-items: center;
}

.image>img {
  height: 100%;
}

div.title {
  display: flex;
}



#login {
  width: 99px;
  height: 33px;
  flex-shrink: 0;
  border-radius: 50px;
  background: var(--base);
  justify-content: center;
  align-items: center;
  align-self: center;
  display: flex;
  flex-direction: row-reverse;
  margin-right: 32px;
}

#login>a>a {
  color: var(--button-login-text);
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  text-transform: uppercase;
}

#logout {
  width: 99px;
  height: 33px;
  flex-shrink: 0;
  border-radius: 50px;
  background: var(--button-logout-background);
  justify-content: center;
  align-items: center;
  align-self: center;
  display: flex;
  flex-direction: row-reverse;
}

#logout>a>a {
  color: var(--button-logout-text);
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  text-transform: uppercase;
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
  width: 100%;
  height: 71px;
  flex-shrink: 0;
  border-bottom: 1px solid var(--base-border);
  background: var(--base);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

#header.logout {
  background: var(--base-seetrough);

}


.avatar {
  height: 40px;
  width: 40px;
}

.user {
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
  padding-right: 10px;
  margin-right: 5px;
  border-right: var(--text-white) solid 1px;
  height: fit-content;
}

.user>.fullName {
  color: var(--text-white);
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  margin-left: 5px;
}
</style>
