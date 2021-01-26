<template>
  <Page>
    <template v-slot:header><span></span></template>
    <div class="center">
      <h1>Thank You!</h1>
      <hr>
      <p>You can expect to hear from me in 1-2 business days.  </p>
      <NuxtLink to="/" class="button--yellow">Back Home</NuxtLink>
      <NuxtLink to="/posts" class="button--yellow">Read My Blog</NuxtLink>
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
    margin: 1em 0 0;
  }

  .center a {
    margin: 50px 0;
  }
</style>