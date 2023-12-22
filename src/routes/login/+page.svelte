<script>
    export let form;
</script>
<div>
    {#if form?.error}
    <div>{form.error}</div>
    {/if}
    Login Page
    <form action="?/login" method="post">
        <div>
            <label for="email">Email</label>
            <input type="email" name="email" id="">
        </div>
        <div>
            <label for="password">Password</label>
            <input type="password" name="password" id="">
        </div>
        <button type="submit">Login</button>
    </form>
</div>