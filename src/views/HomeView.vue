<script lang="ts">
import MarkdownIt from 'markdown-it';
import { defineComponent, onBeforeMount, onMounted, ref } from 'vue';
import hljs from 'highlight.js';
import categoriesPosts from "../../public/db.json";
import { useRoute } from "vue-router";

console.log(categoriesPosts);

const fetchPost = async (fileName: String | String[]) => {
  const response = await fetch(`/posts/${fileName}.md`);
  const md = new MarkdownIt();

  const results = md.render(await response.text())
  hljs.highlightAll();
  return results;
}

export default defineComponent({
  setup(this) {
    const route = useRoute();
    let index = ref<string>(route.params.index as string);
    let articleHTML = ref<string>("");

    onBeforeMount(async () => {
      let articleIndex = index;
      let articleContent = await fetchPost(articleIndex.value);
      articleHTML.value = articleContent;
    });

    return {
      index,
      articleHTML
    }
  },

  data() {
    return {
      index: '',
      articleHTML: '',
      categoriesPosts: categoriesPosts
    }
  },

  async beforeRouteUpdate(to, from) {
    let articleIndex = to.params.index as string;
    let articleHTML = await fetchPost(articleIndex);
    this.articleHTML = articleHTML;
    this.index = articleIndex;
  },

  updated() {
    hljs.highlightAll();
  }

});
</script>

<template>
  <main>
    <div class="container my-5">
      <div class="row">
        <div class="col col-md-2 mb-5 sticky-col navigation-container">
          <h6 class="fs-8 mt-3 text-bold text-uppercase">
            Navigation
            {{ index }}
          </h6>
          <hr>
          <ul class="navbar-nav list-unstyled">
            <li v-for="(posts, category) in categoriesPosts" class="nav-item">
              <h6 class="fs-8 text-bold text-gray">
                {{ category }}
              </h6>
              <ul>
                <li v-for="post in posts" class="nav-item">
                  <!-- <a href="" class="nav-link text-gray-light">{{ post.title }}</a> -->
                  <RouterLink :to="`/${post.index}`"
                    :class="`nav-link text-gray-light ${(index == post.index) ? 'active' : ''}`">{{ post.title }}
                  </RouterLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div class="col col-md-8 px-md-6">
          <section class="post-container" v-html="articleHTML"></section>
        </div>

        <div class="col col-md-2">
          <h6 class="fs-8 text-bold text-uppercase">
            Table of contents
          </h6>
          <hr>
          <ul class="navbar-nav list-unstyled">
            <li class="nav-item">
              <a href="" class="nav-link text-gray-light">
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.navigation-container {
  height: calc(100vh);
  overflow-y: scroll;
}

@media (min-width: 768px) {
  .sticky-col {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
  }
}
</style>