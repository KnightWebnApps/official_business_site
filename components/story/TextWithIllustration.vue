<template>
  <div class="wrapper">
    <div class="text">
      <p>{{ block.text }}</p>
    </div>
    <figure>
      <SanityImage :width="300" :height="300" :image="block.image.img" :alt="block.image.alt" />
      <figcaption>{{ block.image.caption }}</figcaption>
    </figure>
  </div>
</template>

<script>
import SanityImage from '../SanityImage.vue'
export default {
  components: { SanityImage },
  props: {
    block: {
      type: Object,
      default: () => { return {
        text: 'Here is default text',
        image: {
          image: {},
          alt: '',
          caption: ''
        }
      } }
    }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

figure {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #757575
}

.text {
  display: grid;
  place-items: center;
  padding: 30px;
}

p {
  font-size: 22px;
}
</style>