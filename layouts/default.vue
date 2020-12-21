<template>
  <div id="app">
    <NavBar />
    <Nuxt />
  </div>
</template>

<script>
import NavBar from '~/components/NavBar'

export default {
  components: {
    NavBar
  }
}
</script>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  /* font-size: 16px; */
  scroll-behavior: smooth;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  letter-spacing: .7px;
  --primary: #fed047;
  --secondary: #35495e;
  --bg: #fffaf7;
  --white: #fff;
  --black: #333;
  --radius: 4px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

#app {
  /* background: #fffaf7; */
  background: var(--secondary);
  color: #fffaf7;
  /* background: linear-gradient(45deg, #fffaf7 0%, #fed047 100%);  */
  font-family: 'Atkinson', sans-serif;
  font-size: 17px;
  overflow: hidden; 
  line-height: 1.6;
}

hr {
  margin: 7px 0;
}

svg {
  width: 100%;
  height: 100%;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

ol {
  margin: 0;
  padding: 0 0 0 20px;
}

a {
  color: inherit;
  text-decoration: none;
}
/* 
a:focus {
  color: #fed047;
} */

.inline {
  background-color: var(--black);
  padding: 2px 7px;
  color: var(--white);
  border-radius: var(--radius);
  transition: background-color 100ms ease-out, color 100ms ease-out;
}

.inline:hover {
  background-color: var(--primary);
  color: var(--black);
  cursor: pointer;
}
/* 
.inline::after {
  content: ' ^'
} */

.button--yellow {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #fed047;
  color: #fed047;
  text-decoration: none;
  padding: 10px 30px;
  font-size: 17px;
  background-color: transparent;
  transition: background-color 100ms ease-out, color 100ms ease-out;
}

.button--yellow:hover {
  color: #333;
  background-color: #fed047;
  cursor: pointer;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
  background-color: transparent;
  font-size: 17px;
  transition: background-color 100ms ease-out, color 100ms ease-out;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
  cursor: pointer;
}

.button--cta {
  color: var(--secondary);
  background-color: var(--primary);
  padding: 10px 30px;
  text-decoration: none;
  border: 1px solid transparent;
  font-size: 17px;
  border-radius: 4px;
  transition: background-color 100ms ease-out, color 100ms ease-out;
}

.button--cta:hover {
  border-color: var(--primary);
  background-color: transparent;
  cursor: pointer;
  color: var(--primary);
}
</style>
