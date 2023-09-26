<script lang="ts">
import MarkdownIt from 'markdown-it';
import hljs from 'highlight.js';
import { defineComponent, onBeforeMount, ref } from 'vue';
import { useRoute } from "vue-router";
import categoriesPosts from "../data/db.json";

interface IPost {
    index: string,
    title: string,
    tags: Array<string>,
    dateCreated?: Date
}

const fetchPostList = () => {
    let results: Array<IPost> = [];

    for (const category in categoriesPosts) {
        if (!Object.prototype.hasOwnProperty.call(categoriesPosts, category)) {
            continue;
        }
        const posts: Array<IPost> = (categoriesPosts as any)[category];
        posts.forEach((post) => {
            results.push(post);
        })
    }

    return results;
}

const postList = fetchPostList();

const fetchPost = async (fileName: String | String[]) => {
    const response = await fetch(`/posts/${fileName}.md`);
    const md = new MarkdownIt();

    const results = md.render(await response.text())
    hljs.highlightAll();
    return results;
}

const fetchPostMetadata = (index: String): IPost => {
    const postMetadata: IPost = postList.filter((el) => el.index == index)[0];

    if (postMetadata.dateCreated) {
        postMetadata.dateCreated = new Date(postMetadata.dateCreated);
    }

    return postMetadata;
}


export default defineComponent({
    setup(this) {
        const route = useRoute();
        let index = ref<string>(route.params.index as string);
        let postHTML = ref<string>("");
        let postMetadata = ref<IPost>();

        onBeforeMount(async () => {
            let postIndex = index;
            let postContent = await fetchPost(postIndex.value);
            postMetadata.value = fetchPostMetadata(postIndex.value);
            postHTML.value = postContent;
        });

        return {
            index,
            postHTML,
            postMetadata
        }
    },

    data() {
        return {
            postMetadata: null as unknown as IPost,
            index: '',
            postHTML: '',
            categoriesPosts: categoriesPosts
        }
    },

    async beforeRouteUpdate(to, _) {
        const postIndex = to.params.index as string;
        const postHTML = await fetchPost(postIndex);
        const postMetadata = fetchPostMetadata(postIndex);

        this.postMetadata = postMetadata;
        this.postHTML = postHTML;
        this.index = postIndex;
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
                    </h6>
                    <hr>
                    <ul class="navbar-nav list-unstyled">
                        <li v-for="(posts, category) in categoriesPosts" class="nav-item">
                            <h6 class="fs-8 text-bold text-gray">
                                {{ category }}
                            </h6>
                            <ul>
                                <li v-for="post in posts" class="nav-item">
                                    <RouterLink :to="`/${post.index}`"
                                        :class="`nav-link text-gray-light ${(index == post.index) ? 'active' : ''}`">{{
                                            post.title }}
                                    </RouterLink>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div v-if="postMetadata" class="col col-md-8 px-md-6">
                    <h1>{{ postMetadata.title }}</h1>
                    <p class="fs-8 text-gray-light text-end" v-if="postMetadata.dateCreated">{{ postMetadata.dateCreated.toLocaleDateString() }}</p>
                    <ul class="list-unstyled d-flex gap-2 align-items-center">
                        <li class="fs-8 tag" v-if="postMetadata.tags" v-for="tag in postMetadata.tags">#{{ tag }}</li>
                    </ul>
                    <hr class="mb-5">
                    <section class="post-container" v-html="postHTML"></section>
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
    overflow-y: auto;
}

.tag {
    background-color: var(--bl-dark-soft);
    padding: 3px 7px;
    border-radius: 15px;
    color: var(--bl-blue);
}

@media (min-width: 768px) {
    .sticky-col {
        position: -webkit-sticky;
        position: sticky;
        top: 0;
    }
}
</style>