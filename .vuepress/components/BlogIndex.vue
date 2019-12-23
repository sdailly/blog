<template>
    <div class="BlogIndex">
        <div class="BlogIndex-wrapper" >
            <BlogPreviewPost
                v-for="post in posts"
                :post="post"
                class="BlogIndex-item"  />
        </div>
    </div>
</template>

<script>
    import moment from "moment"
    import BlogPreviewPost from "./BlogPreviewPost";
    export default {
        components: {BlogPreviewPost},
        props: [
            'limit',
        ],
        methods: {
        },
        computed: {
            posts() {
                let posts = this.$site.pages
                    .filter(post => post.frontmatter.type === "post")
                    .filter(post => !post.path.startsWith('/archived/'))
                    .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
                if (this.limit > 0) {
                    posts = posts.slice(0, this.limit);
                }
                return posts;
            }
        }
    }
</script>

<style lang="scss">
    .BlogIndex {
        &-wrapper {
            display: grid;
            grid-template-columns: 1fr;
            grid-gap: 1em;
        }

    }
</style>
