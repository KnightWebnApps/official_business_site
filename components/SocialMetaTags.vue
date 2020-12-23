<template>
  <span v-if="false"></span>
</template>

<script>
import sanityClient from '~/sanityClient'
import imageUrlBuilder from '@sanity/image-url'
const builder = imageUrlBuilder(sanityClient)
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: false,
    }
  },
  head() {
    return {
      meta: [
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.description,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: builder.image(this.image).url(),
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: this.alt || this.title,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.title,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.description,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content:  builder.image(this.image).url(),
        },
        {
          hid: 'og:image:alt',
          name: 'og:image:alt',
          content: this.alt || this.title,
        },
        {
          hid: 'og:image:secure_url',
          name: 'og:image:secure_url',
          content:  builder.image(this.image).url(),
        },
      ]
    }
  }
}
</script>

<style>

</style>