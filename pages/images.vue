<script setup lang="ts">

const { data: images } = await useFetch("/api/images");

</script>

<template>
  <div class="img-wrapper">
    <div class="img-container">
      <img
        v-for="image in images"
        :src="'https://japanblog-imgs.s3.eu-central-1.amazonaws.com/' + image"
      />
    </div>
  </div>
</template>

<style scoped>
.img-wrapper {
  width: 95%;
}

.img-container {
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;
}

img {
  max-height: 20rem;
}
</style>
