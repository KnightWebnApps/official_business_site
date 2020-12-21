<template>
  <Page>

  </Page>
</template>

<script>
import sanityClient from '~/sanityClient'
import groq from 'groq'
import Page from '~/components/Page'

const query = groq`*[_type == "page" && slug.current == $slug][0]`

export default {
  components: {
    Page
  },
  async asyncData({ params, error }) {
    try {
      return await sanityClient.fetch(query)
    } catch (e) {
      error(e)
    }
  }
}
</script>

<style>

</style>