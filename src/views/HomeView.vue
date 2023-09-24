<script setup lang="ts">
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
              <a href="" class="nav-link text-gray-light">
                Configuring Database Connection in .NET
              </a>
            </li>
          </ul>
        </div>

        <div class="col-8 px-6">
          <h1 class="mb-5 text-bold">Stack vs Heap Memory Allocation</h1>
          <p>
            The Repository design pattern is a data access pattern used in software development.
            Repository design pattern as defined by Martin Fowler isolates your domain from caring about how storage is
            implemented so all objects retrieved can be treated like an in-memory collection.
          </p>
          <p>
            You could have a repository based on a database, an XML file, a text document, a web service, or anything.
            The applications code itself doesn't care. This makes it very useful for testing.
          </p>
          <p>
            For brevity, we will refer to database/data store/data source as persistence store throughout this article.
          </p>

          <hr class="mt-5">

          <h2 class="my-5 text-bold">What are Repositories?</h2>
          <p>
            Repositories are classes or components that encapsulate the logic required to access persistence store.

            Repositories, in practice, are used to perform database operations for domain objects (Entity and Value
            types).

            Generally, a separate repository is used for each Entity (or Aggregate Root).
          </p>
        </div>

        <div class="col-2">
          <h6 class="fs-8 text-bold text-uppercase">
            Table of contents
          </h6>
          <hr>
          <ul class="navbar-nav list-unstyled">
            <li class="nav-item">
              <a href="" class="nav-link text-gray-light">
                Stack vs Heap Memory Allocation
              </a>
            </li>
            <li class="nav-item">
              <a href="" class="nav-link text-gray-light">
                What are Repositories?
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>
