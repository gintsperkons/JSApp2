<script>
import { store } from "../stores/songsData.js"

export default {

  data() {
    return {
store
    }
  },
  methods: {
    changeFilter(event){
      let filterList = document.getElementsByClassName("filterItem")
      for (const filter of filterList) {
        filter.className = filter.className.replace("active","").trim();
      }
      store.songListData.filterItem = event.target.textContent;
      event.target.className += " active";
    
    }
  }

}
</script>

<template>
  <div id="songFilter">
    <div id="filterTitle">Sort by:</div>
    <div id="filterList">
      <div class="filterItem active" @click="changeFilter($event)">None</div>
      <div class="filterItem" @click="changeFilter($event)">Name</div>
      <div class="filterItem" @click="changeFilter($event)">Artist</div>
    </div>
  </div>
</template>


<style>
#songFilter {
  display: flex;
  flex-direction: row;
  text-transform: none;
  align-items: center;
}

#filterTitle {
  padding-right: 15px;
font-size: 16px;
font-weight: 700;
line-height: 19px;
letter-spacing: 0em;
text-align: left;

}

#filterList {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.filterItem {
  padding-left: 15px;
  padding-right: 15px;
font-size: 14px;
font-weight: 900;
line-height: 17px;
letter-spacing: 0em;
text-align: left;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.filterItem.active {
  color:var(--text-important);
  background-color: var(--text-important-20);
height: 25px;
top: 170px;
left: 462px;
border-radius: 50px;

}
</style>
