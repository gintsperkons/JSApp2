<script>
//headercomponent import from global components



export default {

  data() {
    return {

    }
  },

}
</script>

<template>
  <HeaderComponent />
  <div id="base">
    <div id="text">We
      <div class="red">Love</div> Music <div id="annotation">Powered by
        <div class="green">spotify Api</div>
      </div>

    </div>
  </div>
</template>


<style>
#app {
  background: url("@/assets/d68e13334b38b3619645510296460da5.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

.red {

  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  letter-spacing: inherit;
  text-align: inherit;
  color: var(--text-important);
}

.green {
  font-weight: 700;
  color: var(--text-green);
  padding-left: 4px;
}

#text {
  margin-top: 206px;
  margin-left: 226px;
  text-transform: uppercase;
  width: 433px;
  height: 489px;
  top: 246px;
  left: 101px;
  font-size: 128px;
  font-weight: 900;
  line-height: 155px;
  letter-spacing: 0em;
  text-align: left;
  color: var(--text-white)
}

#annotation {
  text-transform: uppercase;
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  display: flex;

}
</style>
