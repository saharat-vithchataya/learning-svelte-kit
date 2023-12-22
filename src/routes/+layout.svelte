<nav>
    <a href="/">Home</a>
    <a href="/blogs/edit">Edit Blog</a>
</nav>

<div class="container">
<slot/>
</div>

<footer>
    Footer
</footer>

<style> 
.container {
    border: 1px solid black;
    padding: 20px;
}
</style>