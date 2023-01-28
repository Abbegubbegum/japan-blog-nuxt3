<script setup lang="ts">
import { Image } from '~~/types/types';

const props = defineProps(["id"]);

const data = ref({} as Image);
</script>

<template>
  <div class="img-container">
    <label for="img-src">
      <h3>Img File Name:</h3>
      <input type="text" class="img-src" required v-model="data.path"/>
    </label>

    <label for="img-text">
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
