<script setup lang="ts">
import { BlogPost, Image, Paragraph } from "@/types/types.js";
import ImgDiv from "@/components/ImgDiv.vue";
import ParagraphDiv from "~/components/ParagraphDiv.vue";

const route = useRoute();

const blog = ref<BlogPost>({} as BlogPost);

const { data } = await useFetch(`/api/blogs/${route.params.timestamp}`)

if (!data.value) {
  throw createError({ statusCode: 404, statusMessage: 'Blog Not Found' })
}

blog.value = data.value;

</script>

<template>
    <div>
      <div>
        <nuxt-link to="/">
          <div class="back-button">
            <img src="@/assets/icons/arrow.png" width="70" />
          </div>
        </nuxt-link>
      </div>
      <div class="blog-item">
        <div class="blog-title">
          <p class="blog-date">{{ blog.date }}</p>
          <h2>{{ blog.title }}</h2>
          <div class="blog-subheading">
            <p class="blog-author">By: {{ blog.author }}</p>
            <div class="location-div">
              <img src="@/assets/icons/pin.png" alt="" width="20" />
              <p class="blog-location">{{ blog.location }}</p>
            </div>
          </div>
        </div>
        <div class="blog-content">
          <div v-for="content in blog.content">
            <ImgDiv
              v-if="content.type === 'img'"
              :src="'https://japanblog-imgs.s3.eu-central-1.amazonaws.com/' + (content as Image).path"
              :txt="content.text"
            />
            <ParagraphDiv
              v-else-if="content.type === 'txt'"
              :title="(content as Paragraph).title"
              :txt="content.text"
            />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .blog-item {
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: white;
    border: 2px solid black;
    border-radius: 1rem;
    width: 80%;
    margin: 1rem 0;
    margin-left: auto;
    margin-right: auto;
  }
  .blog-title h2 {
    font-size: 5rem;
    font-weight: 700;
    letter-spacing: 0.1rem;
  }
  
  .blog-title {
    margin: 2rem;
  }
  .blog-date {
    position: absolute;
    right: 1rem;
    top: 0.8rem;
    font-size: 1.4rem;
  }
  .blog-author {
    font-size: 1.3rem;
    font-weight: bold;
  }
  .location-div {
    display: flex;
    align-items: center;
    margin-top: 1rem;
  }
  .blog-location {
    font-size: 1.3rem;
    letter-spacing: 0rem;
    margin-left: 0.3rem;
  }
  .back-button {
    background-color: rgb(231, 250, 201);
    width: 70px;
    margin: 1rem;
    margin-left: 10rem;
    border: solid black;
    border-radius: 10% 20%;
  }
  
  .blog-content {
    margin: 2rem;
    margin-top: 0;
  }
  
  .blog-content > div {
    margin-bottom: 3rem;
  }
  
  .blog-subheading {
    margin-top: 0.7rem;
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  </style>
  