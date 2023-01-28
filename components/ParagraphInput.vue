<script setup lang="ts">
import { Paragraph } from "../types/types.js";

const props = defineProps(["id"]);

const data = ref({} as Paragraph);
</script>

<template>
  <div>
    <label for="paragraph-title">
      <h3>Paragraph Title:</h3>
      <input type="text" class="paragraph-title" required v-model="data.title"/>
    </label>
    <label for="paragraph-text">
      <h3>Paragraph:</h3>
      <textarea
        cols="30"
        rows="10"
        required
        v-model="data.text"
      ></textarea>
    </label>
    <button
      class="rm-component-button"
      type="button"
      @click="$emit('removeElement', { id: props.id, type: 1 })"
    >
      Remove Element
    </button>
  </div>
</template>

<style scoped>
  div {
    background-color: rgb(230, 227, 227);
    padding-top: 2px;
    padding-left: 7.5px;
    padding-right: 7.5px;
    padding-bottom: 7.5px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
textarea {
  border: 2.2px solid black;
  border-radius: 5px;
  padding: 2.5px;
  margin: 10px;
}

</style>
