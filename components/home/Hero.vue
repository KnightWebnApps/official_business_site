<template>
  <svg id="hero" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
    <rect x="86.02" y="66.94" width="279.16" height="199.15" fill="#e6e6e6" opacity="0.22"/>
    <rect id="page" x="63.21" y="46.49" width="279.16" height="199.15" fill="#e6e6e6"/>
    <circle cx="82.19" cy="64.79" r="6.04" fill="#ffd200"/>
    <circle cx="99.21" cy="64.79" r="6.04" fill="#fed047"/>
    <circle cx="115.5" cy="64.79" r="6.04" fill="#24285b"/>
    <rect x="254.87" y="58.74" width="69.11" height="13.96" fill="#fff"/>
    <rect x="203.72" y="93.81" width="36.6" height="8.68" fill="#c1c1c1"/>
    <rect x="111.59" y="93.81" width="30.26" height="8.68" fill="#c1c1c1" opacity="0.43"/>
    <rect x="248.4" y="93.81" width="29.36" height="8.68" fill="#fff" opacity="0.43"/>
    <rect x="285.17" y="93.81" width="29.36" height="8.68" fill="#fff" opacity="0.43"/>
    <circle cx="91.43" cy="100.01" r="11.53" fill="#c1c1c1" opacity="0.36"/>
    <rect x="88.23" y="187.19" width="63.15" height="18.44" fill="#fed047"/>
    <rect id="line1" x="88.23" y="125.47" width="0" height="7.66" fill="#c1c1c1"/>
    <rect id="line2" x="88.23" y="145.54" width="0" height="7.66" fill="#c1c1c1" opacity="0.44"/>
    <rect id="line3" x="88.23" y="162.32" width="0" height="7.66" fill="#c1c1c1" opacity="0.44"/>
    <path d="M190.24,245.64s-.11-.7-.27-2c-8.64-68.55,45-129.08,114.12-129.08h38.28V245.64Z" fill="#fff" opacity="0.18"/>
    <rect class="laptop" x="230.02" y="129.3" width="86.55" height="65.87" fill="#ffd200"/>
    <polygon class="laptop" points="230.02 195.17 215.72 212.62 330.79 212.62 316.57 195.17 230.02 195.17" fill="#24285b"/>
    <rect class="light" x="240.32" y="137.04" width="66.3" height="47.32" fill="#fff" opacity="0.43"/>
    <rect class="laptop" x="215.72" y="212.62" width="115.06" height="6.3" fill="#24285b"/>
    <rect class="lightest" x="215.72" y="212.62" width="115.06" height="6.3" fill="#fff" opacity="0.15"/>
    <polygon class="keys" points="234.87 197.72 227.13 208.19 318.7 208.19 312.4 197.72 234.87 197.72" fill="#fff" opacity="0.06"/>
    <polygon class="light" points="241.09 184.36 259.13 151 274.45 176.87 288.23 160.7 306.62 184.36 241.09 184.36" fill="#fff" opacity="0.43"/>
    <circle class="laptop" cx="275.68" cy="152.06" r="5.32" fill="#fff"/>
  </svg>
</template>

<script>
import gsap from 'gsap'

const tl = gsap.timeline({ defaults: { ease: 'expo.inOut' }})

export default {
  mounted () {
    tl
      // .to("#page", { opacity: 1, top: 0 })
      .to("#hero", { right: 0, opacity: 1, duration: 1.5 })
  }
}
</script>

<style scoped>
/* #page {
  position: absolute;
  top: 10px;
  opacity: 0;
} */
#hero {
  /* left: 50px; */
  width: 400px;
  /* position: absolute; */
  right: 450px;
  position: relative;
  opacity: 0;
}
</style>