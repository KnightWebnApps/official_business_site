<template>
  <div class="bg" :style="`background-color: ${story.background.primaryColor.hex}`">  
    <!-- {{ story }} -->
    <section v-for="(block, i) in story.builder" :key="block._key">
      <TextWithIllustration v-if="block._type === 'textWithIllustration'" :block="block" :class="`block block-${i}`" />
      <CallToAction v-else-if="block._type === 'callToAction'" :block="block" :class="`block block-${i}`" />
    </section>
  </div>
</template>

<script>
import groq from 'groq'
import sanityClient from '~/sanityClient'
import gsap from 'gsap'

const query = groq`*[_type == "siteSettings"]{story}[0]`
const tl = gsap.timeline({
  defaults: {
    duration: 2,
    opacity: 1,
    delay: 0.7
  }
}).delay(1.2)
export default {
  async asyncData({ error }) {
    try {
      return await sanityClient.fetch(query)
    } catch (e) {
      error(e)
    }
  },
  mounted() {
    tl
      .to('.block-0', { rotate: 3 })
      .to('.block-0', { opacity: 0 })
      .to('.block-1', {})
      
  },
  // computed: {
  //   isPlaying: () => tl.paused()
  // },
  // methods: {
  //   togglePlayback: function(){
  //     console.log('togglePlayback')
  //     tl.pause()
  //   }
  // }
}
</script>

<style scoped>
.bg {
  height: 100vh;
  overflow: hidden;
}

.block {
  opacity: 0;
  overflow: hidden;
  position: absolute;
}

.play-btn {
  position: fixed;
  right: 20px;
  bottom: 20px;
  overflow: hidden;
}
</style>