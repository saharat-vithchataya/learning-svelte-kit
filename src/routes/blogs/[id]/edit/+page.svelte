<script>
    export let data;
    export let form;
</script>
<div>
    <h1>Welcome {data.user.email}</h1>
    {#if form?.error} 
    <div>{form.error}</div>
        
    {/if}
</div>
<div>Edit Blog</div>
<h3>{data.blog.name}</h3>
<div>{data.blog.id}</div>
<form action="?/update" method="post">
<input type="text" name="blog-name" id="" bind:value={data.blog.name} >
<button type="submit">update</button>
</form>