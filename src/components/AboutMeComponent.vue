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
    <div  v-if="store.tab=='about'"  id="about">
        <h1 class="top">About Me</h1>
        <div class="tab">
            <h3>name: {{ store.user.name }}</h3>
            <h3>surname: {{ store.user.surname }}</h3>
            <h3>code: {{ store.user.code }}</h3>
        </div>
    </div>
</template>

<style>
#about {
    width: 75%;
    color : #fff;
  }
.top {
    text-transform: uppercase;
    font-weight: 900;
}
</style>