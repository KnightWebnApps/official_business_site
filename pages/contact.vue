<template>
  <Page>
    <template v-slot:header>
      <h1>Let's Get Started</h1>
    </template>
    <ContactForm />
  </Page>
</template>

<script>
import ContactForm from '~/components/ContactForm'
import Page from '~/components/Page'
export default {
  components: {
    ContactForm,
    Page
  }
}
</script>

<style>
h1 {
  margin: 1em 0;
}
</style>