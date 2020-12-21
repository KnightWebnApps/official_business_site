<template>
  <div id="page">
    <header>
      <slot name="header">
        <h1>Header</h1>
      </slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
      <span class="social"></span>
      <span class="copywrite">&copy; All Rights Reserved. Knight Digital Development {{ year }}</span>
    </footer>
  </div>
</template>

<script>
import NetworkBanner from './NetworkBanner.vue'
export default {
  components: { NetworkBanner },
  data () {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
#page {
  max-width: 800px;
  margin: 0 auto;
  padding: 10px;
}
footer {
  width: 100%;
  margin-top: 1em;
}
.copywrite {
  text-align: center;
  width: 100%;
}
main {
  min-height: 80vh;
}
</style>