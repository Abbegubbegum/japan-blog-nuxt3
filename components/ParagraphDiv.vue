<script setup lang="ts">
const props = defineProps({ txt: String, title: String });
</script>

<template>
  <div>
    <h3>{{ props.title }}</h3>
    <p>{{ props.txt }}</p>
  </div>
</template>

<style scoped>
h3 {
  font-size: 3rem;
  font-weight: lighter;
}

p {
  font-size: 1.2rem;
}
</style>
