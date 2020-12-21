<template>
  <Page>
    <template v-slot:header>
      <div class="header">
        <div>
          <h1>Knight Digital Development</h1>
          <hr>
          <small id="tagline">I help small businesses grow with <b class="inline">websites</b> that are more affordable than Shopify and Squarespace.</small>
        </div>
        <div>
          <Hero />
        </div>
      </div>
    </template>
    <section >
      <h2>Why should you work with me?</h2>
      <hr>
      <div id="pancake">
        <article class="cake">
          <Savings id="savings"/>
          <hr>
          <p>Enterprise and agency level features that are more affordable than Shopify and other competitors.</p>
        </article>
        <article class="cake">
          <Hourglass id="hourglass"/>
          <hr>
          <p>Fast performance, quality design and modern reliable optimizations.</p>
        </article>
        <article class="cake">
          <ProblemSolving />
          <hr>
          <p>Only pay for the features you need and add what you need as you grow.</p>
        </article>
      </div>
    </section>
    <section id="howitworks">
      <h2>How Does This Work?</h2>
      <hr>
      <ol>  
        <li>
          Decide what product and features fit your needs. ( <NuxtLink to="#form" class="inline">Contact Me</NuxtLink> directly for help. )
        </li>
        <li>We connect to discuss branding, design, product requirements, feature questions and other aspects of the project.</li>
        <li>View your prototypes and discuss any design changes.</li>
        <li>Confirm final prototpe and go live. </li>
        <li>Project hand-off or continue with Analytics and Ad services.</li>
      </ol>
      <NuxtLink to="/products" class="button--cta center-btn">See My Products</NuxtLink>
    </section>
    <section>
      <h2>Example Sites</h2>
      <p>See what a live example looks like!</p>
      <hr>
      <div class="smoothys">
        <div class="example">
          <h3>Smoothy's</h3>
          <img src="smoothie.png" alt="A mock Smoothy's Logo">
        </div>
        <a href="https://optimistic-leavitt-f8a6cd.netlify.app/smoothys" class="button--grey">See Example</a>
      </div>
    </section>
    <section id="faq">
      <div id="faq-header">
        <h2>FAQ's</h2>
        <Faq id="faq-img"/>
      </div>
      <hr>
      <details>
        <summary>What's included with a project?</summary>
        <p>Every project guarentees to be mobile, handicap, and search engine friendly.  You also get a free domain security so you never have to worry about user being told your site is unsafe.</p>
      </details>
      <details>
        <summary>Why would I hire you over building a Wix or Shopify website?</summary>
        <p>Truth is these are reliable tools to work with.  My position is affordable long-term options. Instead of paying $30+/month for a site that your business will never own, pay a flat rate, and own your content.
        </p>
        <p>Lastly, I can abtract away all the website and online marketing management so you can focus on your business.  Just get the reports you need to make actionable desicions.</p>
      </details>
      <details>
        <summary>You don't have a feature I need, can you make it?</summary>
        <p>I'm always happy to give you exactly what you need.  The price of the feature will be determined by it's complexity and requirements.</p>
        <p>I keep your cost low by making features in advance, to reduce build and design time.</p>
      </details>
    </section>
    <!-- <section id="sharing-knowledge">
      <h2>Sharing My Knowledge</h2>
      <hr>
      <div class="knowledge">
        <a href="https://dev.to/knightwebnapps">
          Dev.to
          <img src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg" alt="Knight Web And Apps DEV Profile" height="30" width="30">
        </a>
      </div>
    </section> -->
    <section id="about">
      <h2>About</h2>
      <hr>
      <div class="me">
        <img src="me.png" alt="Picture of Derek Knight">
        <NuxtLink to="/about" class="button--yellow">Watch My Story</NuxtLink>
      </div>
    </section>
    <section id="form">
      <h2>Fill it out to get in touch.</h2>
      <hr>
      <ContactForm/>
    </section>
    <!-- <section>
      <h2>After the Project</h2>
      <p>Optimize for conversions, build your rank on search engines, learn from your customers and more.</p>
      <hr>


    </section> -->
  </Page>
</template>

<script>
import Page from '~/components/Page'
import ContactForm from '~/components/ContactForm'
import Hero from '~/components/home/Hero'
import Hourglass from '~/components/home/Hourglass'
import Savings from '~/components/home/Savings'
import ProblemSolving from '~/components/home/ProblemSolving'

import gsap from 'gsap'
import TextPlugin from 'gsap/dist/TextPlugin'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Faq from '../components/home/Faq.vue'

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

export default {
  components: {
    Page,
    Hero,
    Hourglass,
    Savings,
    ProblemSolving,
    Faq,
    Savings
  },
  mounted () {
    gsap.to('.cake', { 
      scrollTrigger: "#savings",
      y: -10,
      opacity: 1,
      stagger: 0.9
    })
  }
}
</script>

<style scoped>
  @font-face {
    font-family: 'Taviraj';
    src: url(~assets/fonts/Taviraj-Bold.ttf) format('truetype');
  }

  .header {
    height: 100vh;
    display: grid;
    place-items: center;
    padding: 15px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    background-image: url(~static/blob.svg);
    background-size: 100%;
  }

  .header h1 {
    margin: 1em 0;
    font-size: 42px;
    color: #ffffff50;
  }

  #tagline {
    font-size: 19px;
    letter-spacing: .7px;
  }

  /* #tagline b {
    background-image: linear-gradient(45deg, var(--primary), var(--black));
    padding: 2px 5px;
    border-radius: var(--radius);
  } */

  /* #blob {
    z-index: 1;
    opacity: .5;
    /* position: absolute;
    top: 100px;
    right: 100px; 
  }*/

  .center-btn {
    display: block;
    text-align: center;
    margin: 40px 0;
  }

  section {
    margin-bottom: 50px;
  }

  #pancake {
    padding: 15px;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 6em;
  }

  .cake {
    /* height: 70vh; */
    flex: 0 1 300px;
    margin: 15px 15px 50px;
    font-size: 19px;
    bottom: 100px;
    opacity: 0;
  }

  /* #hourglass {
  } */

  .cake hr {
    margin-top: -40px;
  }
  /* How It Works Section */

  #howitworks h2 {
    margin-bottom: 15px;
  }

  #howitworks li {
    margin: 15px 0; 
  }

  /*  Examples Section */

  .smoothys {
    background-color: #fff;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #333;
    margin: 1em 0;
  }

  .example {
    display: flex;
    align-items: center;
    font-family: 'Taviraj', serif;
    font-size: 38px;
    color: #000;
  }

  .example img {
    height: 42px;
    width: 42px;
  }

  /* FAQ Section */

  #faq-header {
    /* height: 100px; */
    display: flex;
    flex-direction: row;
    align-items: baseline;
  }

  #faq-img {
    height: 75px;
    width: 150px;
    justify-self: flex-start;
  }

  /* Details Section */

  details {
    margin: 15px 0;
  }

  details[open] summary{
    font-weight: bold;
  }

  details p {
    background-color: #333;
    color: #fff;
    padding: 7px;
    transition: opacity 100ms ease-in-out;
  }

  /* About Section */
  #about {
    height: 300px;
    margin-bottom: 150px;
  }

  #about .me {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 50px;
  }
  #about img {
    border-radius: 50%;
    background-color: #333;
    width: 220px;
    height: 200px;
    margin-bottom: 15px;
  }

  #about a {
    width: 200px;
    text-align: center;
  }
  /* Media Queries */

  @media(max-width: 600px){
    .smoothys {
      flex-direction: column;
    }

    .example {
      margin-bottom: 15px;
    }

    #about .me {
      flex-direction: column;
    }
  }
</style>
