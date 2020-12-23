<template>
  <Page>
    <template v-slot:header>
      <h1>Base Products</h1>
      <hr>
      <p>The foundation of your next project.</p>
    </template>
    <ul>
      <li v-for="prod in products" :key="prod._id">
        <NuxtLink :to="'products/' + prod.slug.current" class="button--grey card">
          <h2>{{ prod.title }}</h2>
          <p>{{ prod.blurb }}</p>
        </NuxtLink>
      </li>
    </ul>
    <section>
      <h2 id="feature-heading">Features</h2>
      <hr>
      <p>Features to add to your new or existing projects.</p>
      <ul>
        <li v-for="feat in features" :key="feat._id">
          <NuxtLink :to="'products/features/' + feat.slug.current" class="button--grey card">
            <h2>{{ feat.title }}</h2>
            <p>{{ feat.description }}</p>
          </NuxtLink>
        </li>
      </ul>
    </section>
  </Page>
</template>

<script>
import sanityClient from '~/sanityClient'
import groq from 'groq'
import Page from '../../components/Page.vue'

const query = groq`{ 
  "products": *[_type == "product"],
  "features": *[_type == "feature"]
}`

export default {
  components: { Page },
  async asyncData({ error }) {
    try {
      return await sanityClient.fetch(query)
    } catch (e) {
      error(e)
    }
  },
  head () {
    return {
      title: `Knight Digital Development | Products`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Get the features you need without the enterprise price.'
        }
      ]
    }
  }
}
</script>

<style scoped>
h1, #feature-heading {
  margin: 1em 0 0;
}

.card h2 {
  margin-bottom: 1em;
}   

.card {
  margin: 15px 0;
  width: 100%;
  padding: 15px;
  color: var(--white);
  border-color: var(--white);
}
</style>