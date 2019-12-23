<template>
    <div class="BlogPreviewPost">
        <h3 class="BlogPreviewPost-title">
            <router-link :to="post.path" class="BlogPreviewPost-link">{{ post.frontmatter.title }}</router-link>
        </h3>
        <p v-if="post.frontmatter.description" class="BlogPreviewPost-description">{{ post.frontmatter.description}}</p>
        <ul v-if="post.frontmatter.tags" class="BlogPreviewPost-tags">
            <li v-for="tag in post.frontmatter.tags" class="BlogPreviewPost-tag">{{ tag }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: {
            post: {
                type: Object,
                required: true,
                default: () => {
                }
            }
        },
    }
</script>

<style lang="scss">
    @import "../../core/scss/fonts";

    .BlogPreviewPost {
        font-size: 1.25em;
        padding: 0 0 1em;
        margin: 0 0 1em;
        border-bottom: 1px solid #565454;

        &-title {
            margin: 0 0 .5em;
            font-weight: normal;
            font-size: 1.3em;
            font-family: $font_for_title;
        }

        &-description {
            font-size: .7em;
        }

        &-tags {
            display: flex;
            flex-wrap: wrap;
            padding: 0;
        }

        &-tag {
            font-size: .9em;
            display: inline-block;
            padding: .5em;
            color: #fff;
            margin-right: 1em;
        }
    }
</style>
