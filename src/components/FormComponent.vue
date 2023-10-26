<script>
import { store } from "../stores/songsData.js";
export default {

  data() {
    return {
      store
    }
  },
  computed: {
    lastLoginComputed(){
      const res = []
      store.user.lastLogin.forEach(a => res.push(a))
      return res.sort(function (a, b) {
          if (a > b) { return -1; }
          if (a < b) { return 1; }
          return 0;
        })
    }
  }

}
</script>

<template>
  <div id="aboutForm">
    <label for="name">First name</label>
    <input :disabled="!store.aboutForm.active ? '' : disabled"  type="text" name="name" id="name" :value="store.user.name" @input="event => store.user.name = event.target.value">
    <label for="lastName">Last name</label>
    <input :disabled="!store.aboutForm.active ? '' : disabled" type="text" name="lastName" id="lastName" :value="store.user.surname" @input="event => store.user.surname = event.target.value">
    <label for="code">IT Code</label>
    <input :disabled="!store.aboutForm.active ? '' : disabled" type="text" name="code" id="code" :value="store.user.code" @input="event => store.user.code = event.target.value">
    <label class="loggedInList" for="loggedInList">Logged in at</label>
    <div id="loggedInList">
      <div v-for="item in lastLoginComputed" >
      {{item}}
      </div>
    </div>

  </div>
</template>


<style>
#aboutForm {
  display: flex;
  flex-direction: column;
}

#aboutForm>label {
  margin-top: 40px;
  margin-bottom: 10px;
height: 19px;
top: 430px;
left: 390px;
font-size: 16px;
font-weight: 500;
line-height: 19px;
letter-spacing: 0em;
text-align: left;
text-transform: none;
color: var(--text-white-50);
}

#loggedInList > div {
  color:var(--background-border);
font-size: 18px;
font-weight: 700;
line-height: 22px;
letter-spacing: 0em;
text-align: left;

}


#aboutForm>input {
  padding-left:10px ;
font-size: 18px;
font-weight: 700;
line-height: 22px;
letter-spacing: 0em;
text-align: left;

  width: 366px;
  height: 42px;
  top: 461px;
  left: 390px;
  border: unset;
  border-radius: 4px;
  background-color: var(--text-gray);
  color: var(--text-white);
}
#aboutForm>input:disabled {
  background-color: var(--background-highlight);
  color:var(--text-white-50)
}
</style>
