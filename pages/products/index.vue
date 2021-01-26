<template>
  <Page>
    <template v-slot:header>
      <h1>Base Products</h1>
      <hr>
      <p>The foundation of your next project.</p>
    </template>
    <section>
      <ul>
        <li v-for="prod in products" :key="prod._id">
          <NuxtLink :to="'products/' + prod.slug.current" class="button--grey card">
            <h2>{{ prod.title }} <span>$ {{ prod.price }}</span> </h2>

            <p>{{ prod.blurb }}</p>

            <!-- <button 
              v-if="product._id === prod._id" 
              @click="() => localStorage.removeItem('project')"
            >Remove from Calculator</button>

            <button 
              v-else 
              @click="() => localStorage.setItem('project', JSON.stringify(prod))"
            >Add to Calculator</button> -->

          </NuxtLink>
        </li>
      </ul>
      <h2>Features</h2>
      <hr>
      <p>Add features to bring your project to life.</p>
      <NuxtLink to="/features" class="button--grey card">View All Features</NuxtLink>
    </section>
  </Page>
</template>

<script>
import sanityClient from '~/sanityClient'
import groq from 'groq'
import Page from '../../components/Page.vue'

const query = groq`{ 
  "products": *[_type == "product"]
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
  data() {
    return {
      project: localStorage.getItem('project') || null
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

h2 {
  margin-top: 35px;
}

a {
  text-align: center;
}
</style>