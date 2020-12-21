<template>
  <Page>
    <template v-slot:header>
      <h1>{{ feature.title }}</h1>
      <h2>$ {{ feature.price }}</h2>
    </template>
    <section>
      <BlockContent v-if="feature.body" :blocks="feature.body" />
    </section>
  </Page>
</template>

<script>
import sanityClient from '~/sanityClient'
import groq from 'groq'
import BlockContent from 'sanity-blocks-vue-component'
import Page from '~/components/Page.vue'

const query = groq`{ "feature" : *[_type == "feature" && slug.current == $slug]{
  ...,
  body[]{
    ...,
    asset->{
      ...
    }
  }
}[0] }`

export default {
  components: { Page, BlockContent },
  async asyncData ({ params, error }) {
    try {
      return await sanityClient.fetch(query, params)
    } catch (e) {
      error(e)
    }
  },
  head () {
    return {
      title: `Knight Digital Development" | ${this.feature.title}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.feature.blurb
        }
      ]
    }
  }
}
</script>

<style scoped>
h1 {
  margin: 1em 0 ;
}
</style>