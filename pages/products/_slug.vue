<template>
  <Page>
    <template v-slot:header>
      <h1>{{ product.title }}</h1>
      <h2>$ {{ product.price }}</h2>
    </template>
    <section>
      <BlockContent v-if="product.body" :blocks="product.body" />
    </section>
    <section id="features">
      <h3>Available Features</h3>
      <ul>
        <li v-for="feature in product.features" :key="feature._id">
          {{ feature.title }}
        </li>
      </ul>
    </section>
    <section id="posts">
      <h3>Related Posts</h3>
      <ul>
        <li v-for="post in product.relatedPosts" :key="post._id">
          {{ post.title }}
        </li>
      </ul>
    </section>
  </Page>
</template>

<script>
import sanityClient from '~/sanityClient'
import groq from 'groq'
import BlockContent from 'sanity-blocks-vue-component'
import Page from '~/components/Page.vue'

const query = groq`{ "product" : *[_type == "product" && slug.current == $slug]{
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
      title: `Knight Digital Development" | ${this.product.title}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.product.blurb
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