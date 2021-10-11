<script context="module">
    export async function load(ctx) {
        let slug = ctx.page.params.slug
        let post = {
            title: 'blog title',
            content: 'blog content'
        }
        return {
            props: {slug,post}
        }
    }

</script>

<script>
    export let slug;
    export let post;
</script>


<h1>{slug}</h1>
<h2>{post.title}</h2>
<p>{post.content}</p>