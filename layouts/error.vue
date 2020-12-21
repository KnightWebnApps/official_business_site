<template>
  <page>
    <template v-slot:header>
      <NetworkBanner/>
    </template>
    <div class="error">
      <h1 v-if="error.statusCode === 404">404</h1>
      <h1 v-else-if="error.message.includes('Network')">Check Your Connection</h1>
      <h1 v-else>An Error Occured</h1>
      <NuxtLink to="/" class="button">Go Home</NuxtLink>
      <span>{{ 
        error.message 
      }}</span>
    </div>
  </page>
</template>

<script>
import Page from "../components/Page.vue"
import NetworkBanner from "../components/NetworkBanner.vue"

export default {
  components: { Page, NetworkBanner },
  props: ['error'],
  layout: 'error'
}
</script>

<style scoped>
.error {
  display: grid;
  place-items: center;
  justify-items: center;
  height: 100%;
  padding-top: 20%;
  text-align: center;
}

h1 {
  margin: 15px 0;
}

.button{
  text-align: center;
  width: 100%;
  margin: 20px;
  padding: 10px;
  background-color: #333;
  color: #fff;
}
</style>