<script setup lang="ts">
import { Paragraph } from "../types/types.js";

const props = defineProps(["id"]);

const data = ref({} as Paragraph);
</script>

<template>
  <div class="paragraph-container">
    <label for="paragraph-title">
      <h3>Paragraph Title:</h3>
      <input type="text" class="paragraph-title" required v-model="data.title"/>
    </label>
    <label for="paragraph-text">
      <h3>Paragraph:</h3>
      <textarea
        class="paragraph-text"
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
