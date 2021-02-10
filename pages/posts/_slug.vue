<template>
  <Page>
    <SocialMetaTags :title="post.title" :description="post.description" :image="post.mainImage.img" />
    <template v-slot:header>
      <h1>{{ post.title }}</h1>
    </template>
    <section class="content">
      <BlockContent v-if="post.body" :blocks="post.body" />
    </section>
  </Page>
</template>

<script>
import sanityClient from '~/sanityClient'
import groq from 'groq'
import blocksToText from '~/lib/blockToText'
import BlockContent from 'sanity-blocks-vue-component'
import Page from '~/components/Page.vue'
import SocialMetaTags from '~/components/SocialMetaTags.vue'

const query = groq`{ "post" : *[_type == "post" && slug.current == $slug]{
  ...,
  body[]{
    ...,
    asset->{
      ...
    }
  }
}[0] }`

export default {
  components: { Page, BlockContent, SocialMetaTags },
  async asyncData ({ params, error }) {
    try {
      return await sanityClient.fetch(query, params)
    } catch (e) {
      error(e)
    }
  },
  head () {
    const { title, description } = this.post
    return {
      title: `Knight Digital Development | ${title}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: description
        }
      ]
    }
  }
}
</script>

<style scoped>
h1 {
  margin-bottom: 1em;
}

h2, h3, h4, h5, h6 {
  margin-bottom: .5em;
}

p {
  margin-bottom: 1em;
  letter-spacing: 1.2px;
  line-height: 1.7;
}

ul, ol {
  margin: 1em 0;
  list-style: square;
  padding-left: 30px;
}

li {
  margin-bottom: .5em;
}

.content img{
  width: 100%;
  margin: 1em 0 ;
}
</style>