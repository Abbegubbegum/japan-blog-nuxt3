<script setup lang="ts">
const props = defineProps({ txt: String, src: String });
</script>

<template>
  <div>
    <img :src="props.src" />
    <p>{{ props.txt }}</p>
  </div>
</template>

<style scoped>
img {
  max-width: 60rem;
  max-height: 30rem;
}

p {
  font-size: 1.1rem;
  color: rgb(167, 164, 164);
}
</style>
