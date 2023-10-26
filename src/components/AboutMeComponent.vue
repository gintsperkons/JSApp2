<script>
import { store } from "../stores/songsData.js";
export default {
  data() {
    return {
      store,
    }
  }
}
</script>

<!-- AboutMeComponent (check Figma for design reference)
    10.1. Add button with following functionality:
        * button has two states:
            - not active:
                * label `EDIT FORM`
                * by clicking on this button:
                    - change status to - active
                    - enables `FormComponent` all input fields (set input fields attribute `disabled: false`)
            - active:
                * label `CANCEL`
                * apply different styling to separate from not active state
                * by clicking on this button:
                    - change status to - not active
                    - disables `FormComponent` all input fields (set input fields attribute `disabled: true`) -->

<template>
  <div id="about">
    <div class="top">
      <h1 id="aboutTitle">About Me</h1>
      <div id="editForm" :class="{ active: store.aboutForm.active }" @click="store.aboutForm.active = !store.aboutForm.active"><p v-if="!store.aboutForm.active">Edit Form</p><p v-if="store.aboutForm.active">Cancel</p></div>
    </div>
     <FormComponent/>
  </div>
</template>

<style>
.top {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 75px;
}

div#about {
  width: 75%;
  text-transform: uppercase;
  color: #fff;
  padding-top: 25px;
  padding-left: 30px;
}

#aboutTitle {
  height: 39px;
  top: 101px;
  left: 390px;

  padding-right: 10px;
  text-transform: uppercase;
  font-size: 32px;
  font-weight: 900;
  line-height: 39px;
  letter-spacing: 0em;
  text-align: left;
  border-right-color: var(--background-border);
  border-width: 1px;
  border-right-style: groove;
}

#editForm>p {
  margin-left: 10px;
  text-transform: uppercase;
  width: 118px;
  height: 33px;
  top: 104px;
  left: 584px;
  font-size: 16px;
  font-weight: 700;
  line-height: 33px;
  letter-spacing: 0em;
  text-align: center;
  color: var(--text-white);
  background-color: var(--base);
  border-radius: 50px;

}
#editForm.active >p{
  background-color: var(--button-logout-background);
  color: var(--button-logout-text);
}
</style>