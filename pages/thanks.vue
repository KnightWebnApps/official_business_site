<template>
  <Page>
    <template v-slot:header><span></span></template>
    <div class="center">
      <h1>Thank You Much</h1>
      <NuxtLink to="/" class="button--grey">Back Home</NuxtLink>
      <NuxtLink to="/posts" class="button--grey">Read My Blog</NuxtLink>
    </div>

  </Page>
</template>

<script>
import Page from '~/components/Page'
export default {  
  components: { Page }
}
</script>
<style>
  .center {
    text-align: center;
  }

  .center h1 {
    margin: 1em 0;
  }

  .center a {
    margin: 15px 0;
  }
</style>