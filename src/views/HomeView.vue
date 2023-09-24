<script lang="ts">
import MarkdownIt from 'markdown-it';
import { defineComponent } from 'vue';

const response = await fetch('/01.md');
const md = new MarkdownIt();

const articleHTML = md.render(await response.text());

import hljs from 'highlight.js';

export default defineComponent({
  data() {
    return {
      text: articleHTML
    }
  },

  mounted(): void {
    hljs.highlightAll();    
  }
});


</script>

<template>
  <main>
    <div class="container my-5">
      <div class="row">
        <div class="col-2">
          <h6 class="fs-8 text-bold text-uppercase">
            Navigation
          </h6>
          <hr>
          <ul class="navbar-nav list-unstyled">
            <li class="nav-item">
              <a href="" class="nav-link text-gray-light active">
                Configuring Database Connection in .NET
              </a>
            </li>
            <li class="nav-item">
              <a href="" class="nav-link text-gray-light">
                Data Access Layer
              </a>
            </li>
          </ul>
        </div>

        <div class="col-8 px-6">
          <section class="post-container" v-html="text"></section>
        </div>

        <div class="col-2">
          <h6 class="fs-8 text-bold text-uppercase">
            Table of contents
          </h6>
          <hr>
          <ul class="navbar-nav list-unstyled">
            <li class="nav-item">
              <a href="" class="nav-link text-gray-light">
                Configuring your database connection in .NET
              </a>
            </li>
            <li class="nav-item">
              <a href="" class="nav-link text-gray-light">
                Adding connection strings to <span class="code-snippet">appsettings.json</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>
