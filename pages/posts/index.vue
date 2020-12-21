<template>
  <Page>
    <template v-slot:header>
      <h1>Learn and Grow</h1>
      <!-- <label for="search">Search</label>
      <input v-model="search" name="search" type="text" placeholder="Search Posts..."> -->
    </template>
    <ul id="post-list">
      <li v-for="post in posts" :key="post._id">
        <NuxtLink :to="'/posts/' + post.slug.current" class="button--yellow card">
          <SanityImage :width="175" :height="200" :image="post.mainImage.img" :alt="post.mainImage.alt" class="post-img"/>
          <span>{{ post.title }}</span>
        </NuxtLink>
      </li>
    </ul>
  </Page>
</template>

<script>
import sanityClient from '~/sanityClient'
import groq from 'groq'
import Page from '~/components/Page'
import SanityImage from '~/components/SanityImage'
const query = groq`{ "posts": *[_type == "post"]}`

export default {
  data () {
    return {
      search: '',
      searchResults: []
    }
  },
  async asyncData ({ error }) {
    try {
      return await sanityClient.fetch(query)
    } catch (e) {
      error(e)
    }
  },
  watch: {
    async search (oldSearch, newSearch){
      const searchQuery = groq`{ 
        "posts": *[_type == "post" && [title, body[].children[].text] match "${this.search}"]
      }`

      this.searchResults = await sanityClient.fetch(searchQuery)
    }
  },
}
</script>

<style scoped>
h1 {
  margin: 1em 0;
}

#post-list {
  display: grid;
  place-content: center;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 15px;
}

.post-img {
  height: 200px;
  width: 175px;
}

.card {
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 300px;
  width: 300px;
  margin: 0 auto;
  /* color: var(--white); */
}
</style>