<script>
    export let data
</script>
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<div class="grid">

{#each data.blog as blog}
<section class="grid-item">
<img src={blog.img_url} alt="" width="100px">
<h2>{blog.name}</h2>
<a href={`/blogs/${blog.id}`}>Read more</a>
</section>
{/each}
</div>

<style>
    .grid {
        display: grid;
        grid-template-columns: auto auto auto auto;

    }
</style>