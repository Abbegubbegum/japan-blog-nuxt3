<script setup lang="ts">
import ParagraphInput from "../components/ParagraphInput.vue";
import ImgInput from "../components/ImgInput.vue";
import { Image, Paragraph } from "../types/types.js";

type Container = {
  id: number;
  type: number;
};

let title = ref("");
let author = ref("");
let date = ref<Date>();
let location = ref("");
let password = ref("");
let content: (Paragraph | Image)[] = [];

let order = ref<Container[]>([
  { id: 123, type: 1 },
  { id: 321, type: 2 },
]);

function addParagraph() {
  order.value.push({ id: Math.floor(Math.random() * 10000), type: 1 });
}
function addIMG() {
  order.value.push({ id: Math.floor(Math.random() * 10000), type: 2 });
}

function removeElement(props: Container) {
  let pos = order.value.findIndex((t) => t.id === props.id);
  if (pos !== -1) {
    order.value.splice(pos, 1);
  }
}

async function sendForm() {
  let data = document.querySelectorAll("#blog-content-container > div > *");
  data.forEach((element) => {
    if (element.classList.contains("img-container")) {
      let addContent: any = {
        type: "img",
      };
      let childs = element.children;

      for (let i = 0; i < childs.length; i++) {
        if (childs[i].tagName == "LABEL") {
          let input = childs[i].lastElementChild;

          addContent[input?.className === "img-src" ? "path" : "text"] = (
            input as HTMLInputElement
          ).value;
        }
      }

      content.push(addContent);
    } else if (element.classList.contains("paragraph-container")) {
      let childs = element.children;

      let addContent: any = {
        type: "txt",
      };

      for (let i = 0; i < childs.length; i++) {
        if (childs[i].tagName == "LABEL") {
          let input = childs[i].lastElementChild;

          addContent[
            input?.className === "paragraph-title" ? "title" : "text"
          ] = (input as HTMLInputElement).value;
        }
      }

      content.push(addContent);
    }
  });

  const res = await useFetch("/api/form", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title.value,
      author: author.value,
      location: location.value,
      date: date.value,
      content: content,
      password: password.value,
    }),
  });
  
  if (res.error.value) {
    alert(res.data)
    return;
  }

    alert("Blog added successfully!");
    useRouter().push("/");
  
}
</script>

<template>
  <div>
    <div class="button-container">
      <button class="addButtons" @click="addParagraph">Add paragraph</button>
      <button class="addButtons" @click="addIMG">Add IMG</button>
    </div>
    <form @submit.prevent="sendForm()">
        <h1>Fill in this form</h1>
        <label>
          <h3>Title:</h3>
          <input
            v-model="title"
            type="text"
            class="blog-name"
            id="title"
            required
          />
        </label>

        <label>
          <h3>Author:</h3>
          <input
            v-model="author"
            type="text"
            class="blog-author"
            id="author"
            required
          />
        </label>

        <label>
          <h3>Date:</h3>
          <input v-model="date" type="date" required />
        </label>

        <label>
          <h3>Location:</h3>
          <input v-model="location" type="text" id="location" required />
        </label>

        <div id="blog-content-container">
          <div v-for="content in order">
            <ParagraphInput
              v-if="content.type === 1"
              :id="content.id"
              @removeElement="removeElement"
            />
            <ImgInput
              v-else-if="content.type === 2"
              :id="content.id"
              @removeElement="removeElement"
            />
          </div>
        </div>

        <label>
          <h3>Password:</h3>
          <input
            v-model="password"
            type="password"
            id="password-input"
            required
          />
        </label>

        <button type="submit" class="submit-button">Submit</button>
      </form>
    </div>
</template>

<style>
.button-container {
    display: flex;
    justify-content: center;
}

form {
    text-align: center;
}

input[type="text"] {
  border-radius: 5px;
  padding: 2.5px;
  margin: 10px;
}

input[type="date"] {
  border-radius: 5px;
  padding: 5px;
  margin: 10px;
}

input[type="password"] {
  border-radius: 5px;
  padding: 2.5px;
  margin: 10px;
  max-width: 60%;
}

.submit-button {
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 5px;
}

#password-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.addButtons {
  margin: 5px;
  padding: 5px;
}

.rm-component-button {
  border-radius: 5px;
  padding: 2.5px;
  margin: 10px;
  max-width: 10%;
  padding: 5px;
}
</style>
