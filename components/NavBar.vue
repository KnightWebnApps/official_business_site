<template>
  <nav>
    <div class="nav-wrapper">
      <span id="logo">
        <NuxtLink to="/">
          <img src="/logo.png" alt="Knight Digital Development Logo, a yellow-orange horsehead">
        </NuxtLink>
      </span>
      <ul>
        <li>
          <NuxtLink to="/products">Products</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/posts">Blog</NuxtLink>
        </li>
        <!-- <li>
          <NuxtLink to="/about">My Story</NuxtLink>
        </li> -->
      </ul>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
nav {
  position: sticky;
  width: 100%;
  background-color: #35495e;
  color: #fff;
  top: 0;
  padding: 7px;
}

.nav-wrapper {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

#logo img{
  width: 40px;
  height: 40px;
}

#logo a:hover {
  background-color: transparent;
}

nav ul {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

nav ul li {
  margin: 0 10px 0 0;
}

a {
  padding: 7px;
  transition: background-color 300ms;
}

a.nuxt-link-active {
  font-weight: bold;
  text-decoration: underline;
}

a:hover {
  background-color: #333;
}

a:focus {
  outline: red;
}

a.current {
  background-color: #333;
}
</style>