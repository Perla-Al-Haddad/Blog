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
                            <!-- <ul v-if="link.type == 'dropdown'" class="dropdown-menu animate slideIn"
                                aria-labelledby="navbarDropdown">
                                <li v-for="(resumeLink, index) in link.resumeLinks" :key="index">
                                    <a class="dropdown-item text-light p-0 underline-hover-effect" target="_blank"
                                        :href="`../assets/docs/${resumeLink.url}`" download>
                                        {{ resumeLink.name }}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px"
                                            viewBox="0 0 24 24" fill="none">
                                            <path d="M5 12V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V12"
                                                stroke="#38b6ff" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2px" />
                                            <path d="M12 3L12 15M12 15L16 11M12 15L8 11" stroke-width="2px" stroke="#38b6ff"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </a>
                                </li>
                            </ul> -->
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
                    id: "about",
                    type: "link",
                },
                {
                    name: "Posts",
                    id: "posts",
                    type: "link",
                },
                {
                    name: "Tags",
                    id: "tags",
                    type: "link",
                },
                {
                    name: "Categories",
                    id: "categories",
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