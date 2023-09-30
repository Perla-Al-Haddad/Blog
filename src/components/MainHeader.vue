<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-dark py-1">
            <div class="container">
                <a class="navbar-brand" href="#"><img src="../assets/images/pal.png" width="40" alt="" /></a>
                <button class="navbar-toggler bg-transparent border-0" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <font-awesome-icon class="text-dark" icon="fa-solid fa-bars" />
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav navbar-dark ms-auto mb-2 mb-lg-0 gap-3 align-items-center justify-content-center">
                        <li v-for="(link, index) in links" :key="index"
                            :class="`nav-item ${link.type == 'dropdown' ? link.type : ''}`">
                            <a v-if="link.type == 'link'" class="nav-link text-gray" :href="`${link.id}`">{{ link.name
                            }}</a>
                            <a v-else-if="link.type == 'dropdown'" class="nav-link dropdown-toggle text-gray text-center"
                                href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {{ link.name }}
                            </a>
                        </li>

                        <ThemeToggleButton @toggle-light-mode="$emit('toggle-light-mode')" />
                        <span class="menu-item delimiter"></span>
                        <SearchBar />
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>
  
<script lang="ts">
import ThemeToggleButton from "./ThemeToggleButton.vue";
import SearchBar from "./SearchBar.vue";
import { defineComponent } from 'vue';

export default defineComponent({
    name: "MainHeader",
    components: {
        ThemeToggleButton,
        SearchBar
    },
    data() {
        return {
            links: [
                {
                    name: "About",
                    id: "#",
                    type: "link",
                },
                {
                    name: "Posts",
                    id: "/",
                    type: "link",
                },
                {
                    name: "Tags",
                    id: "#",
                    type: "link",
                },
                {
                    name: "Categories",
                    id: "#",
                    type: "link",
                }
            ],
        };
    },
});
</script>
  
<style scoped>
.menu-item.delimiter {
    border-left: 1.5px solid white;
    height: 1.5rem;
    padding-right: var(--bs-navbar-nav-link-padding-x);
}
</style>