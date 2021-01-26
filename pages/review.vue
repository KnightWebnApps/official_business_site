<template>
  <Page>
    <template v-slot:header>
      <div class="heading">
        <svg id="bubble" viewBox="0 0 200 200">
          <path opacity=".14" fill="#fed047" d="M31.9, -54.2C44.1, -48.2, 58.8, -45.3, 66.8 -36C74.7, -28.3, 76,-14.1,77.1,0.6C78.2,15.4,79.2,30.9,71.2,39.2C63.1,47.5,45.9,48.7,32.5,52C19.2,55.4,9.6,61,-2.1,64.6C-13.8,68.2,-27.5, 69.9,-40.8,66.4C-54,63,-66.8,54.4,-75.2,42.5C-83.6,30.6-87.7,15.3,-83.8,2.2C-80,-10.8,-68.1,-21.7,-59.2,-32.6C-50.2,-43.6,-44.1,-54.7,-34.7,-62.4C-25.3,-70.1,-12.7,-74.4,-1.4,-71.9C9.8,-69.4,19.6,-60.2,31.9,-54.2Z" transform="translate(100 100)"/>
        </svg>
        <h1 id="title">Get a practical review of your current site for FREE.</h1>
      </div>
    </template>
    <p>The web is complex, make sure your optimized for Google, Facebook, Twitter and other social platforms.</p>
    <hr>
    <p>Be sure your <b>performance</b> isn't causing customers to leave your site.</p>
    <hr>
    <p>Protect your business with a mobile, accessibility, and GDPR compliance check.</p>
    <hr>
    <h2>Get Started!</h2>
    <ContactForm />
  </Page>
</template>

<script>
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import ContactForm from '../components/ContactForm.vue'
import Page from '../components/Page.vue'

gsap.registerPlugin(ScrollTrigger)

export default {
  components: { Page, ContactForm },
  mounted () {
    gsap.to('#title', {
      x: '40%',
      opacity: 1
    })
    gsap.to('#bubble', {
      opacity: 1
    })
  }
}
</script>

<style scoped>

#bubble {
  height: 500px;
  opacity: 0;
}

.heading {
  height: 70vh;
}

h1 {
  position: absolute;
  top: calc(20vh + 60px);
  right: 0;
  opacity: 0;
  width: 250px;
  margin: 0 0 0 100px;
}

h2 {
  margin: 70px 0 15px;
}

p {
  font-size: 19px;
}

@media(max-width: 475px){
  h1 {
    right: 100px;
  }
}
</style>