<template>
  <Page>
    <template v-slot:header>
      <h1>Features</h1>
      <hr>
      <p>Get the features you need, without overpaying.</p>
    </template>
    <section>
      <ul>
        <li v-for="feature in features" :key="feature._id">
          <NuxtLink :to="'features/' + feature.slug.current" class="button--grey card">
            <h2>{{ feature.title }} <span>$ {{ feature.price }}</span> </h2>

            <p>{{ feature.blurb }}</p>
          </NuxtLink>
        </li>
      </ul>
      <h2>Just looking for a Feature?</h2>
      <NuxtLink to="/features" class="button--grey card">View All Features</NuxtLink>
    </section>
  </Page>
</template>

<script>
import sanityClient from '~/sanityClient'
import groq from 'groq'
import Page from '~/components/Page.vue'

const query = groq`{ 
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
      title: `Knight Digital Development | Features`,
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

<style>
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

h2 {
  margin-top: 35px;
}

a {
  text-align: center;
}
</style>