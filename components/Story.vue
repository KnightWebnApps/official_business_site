<template>
  <div class="bg" :style="`background-color: ${story.background.primaryColor.hex}`">  
    <!-- <button>Play/Pause</button> -->
    <section v-for="(block, i) in story.builder" :key="block._key">
      <TextWithIllustration v-if="block._type === 'textWithIllustration'" :block="block" :class="`block block-${i}`" />
      <CallToAction v-else-if="block._type === 'callToAction'" :block="block" :class="`block block-${i}`" />
    </section>
  </div>
</template>

<script>
import gsap from 'gsap'

const tl = gsap
  .timeline({
    defaults: {
      duration: 2,
      opacity: 1,
      delay: 0.7
    }})
  .delay(1.2)

export default {
  props: {
    story: {
      type: Object,
      default: () => new Object()
    }
  },
  mounted() {
    tl
      .to('.block-0', { rotate: 3 })
      .to('.block-0', { opacity: 0 })
      .to('.block-1', {})
      
  },
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