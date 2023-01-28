<script setup lang="ts">
const { data: blogs } = await useFetch("/api/blogs");


</script>

<template>
  <div id="blog-container" class="content">
    <div class="blog-item" v-for="blog in blogs" :key="blog.timestamp">
      <nuxt-link :to="'/blogs/' + blog.timestamp" class="nuxt">
        <div class="blog-title">
          <p class="blog-date">{{ blog.date }}</p>
          <h2>{{ blog.title }}</h2>
          <div class="blog-subheading">
            <p class="blog-author">By: {{ blog.author }}</p>
            <div class="location-div">
              <img src="@/assets/icons/pin.png" width="20" />
              <p class="blog-location">{{ blog.location }}</p>
            </div>
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<style scoped>
.nuxt {
  text-decoration: none;
  color: black;
}

body {
  display: flex;
  flex-direction: column;
}

#blog-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 85%;
  align-self: center;
  margin-left: auto;
  margin-right: auto;
}

.blog-item {
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: white;
  border: 2px solid black;
  border-radius: 1rem;
  margin: 1rem auto 1rem auto;
  box-shadow: 10px 15px 10px rgba(0, 0, 0, 0.728);
  width: 95%;
}

.blog-item:hover {
  cursor: pointer;
  background-color: #eee;
  transform: scale(1.01);
}

.blog-title h2 {
  font-size: 5rem;
  font-weight: 700;
  letter-spacing: 0.1rem;
}

.blog-title {
  margin: 2rem;
}

.blog-subheading {
  margin-top: 0.7rem;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.blog-author {
  font-size: 1.3rem;
  font-weight: bold;
}

.blog-location {
  font-size: 1.3rem;
  letter-spacing: 0rem;
  margin-left: 0.3rem;
}

.location-div {
  display: flex;
  align-items: center;
  margin-top: 1rem;
}

.blog-date {
  position: absolute;
  right: 1rem;
  top: 0.8rem;
  font-size: 1.4rem;
}
</style>
