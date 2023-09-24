<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <div class="container my-5">
      <h1>Stack vs Heap Memory Allocation</h1>
      <p>
        The Repository design pattern is a data access pattern used in software development.

        Repository design pattern as defined by Martin Fowler isolates your domain from caring about how storage is
        implemented so all objects retrieved can be treated like an in-memory collection.

        You could have a repository based on a database, an XML file, a text document, a web service, or anything.

        The applications code itself doesn’t care. This makes it very useful for testing.

        For brevity, we will refer to database/data store/data source as persistence store throughout this article.
      </p>
    </div>
  </main>
</template>
