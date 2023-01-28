<script setup lang="ts">
import { Image } from '~~/types/types';

const props = defineProps(["id"]);

const data = ref({} as Image);
</script>

<template>
  <div>
    <label>
      <h3>Img File Name:</h3>
      <input type="text" class="img-src" required v-model="data.path"/>
    </label>

    <label>
      <h3>Img Text:</h3>
      <input type="text" class="img-text" required v-model="data.text"/>
    </label>
    <button
      class="rm-component-button"
      type="button"
      @click="$emit('removeElement', { id: props.id, type: 2 })"
    >
      Remove Element
    </button>
  </div>
</template>

<style scoped>
div {
  background-color: rgb(230, 227, 227);
  padding: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
