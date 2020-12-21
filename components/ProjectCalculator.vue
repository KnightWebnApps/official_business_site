<template>
  <div class="calculator">
    <div class="main-product">
      <h1>{{ product.title }}</h1>

    </div>
    <div class="features">
      <ul>
        <li v-for="feature in features" :key="feature._id">
          <h2> {{ feeature.title }}</h2>
          <span>{{ feature.price }}</span>
        </li>
      </ul>
    </div>
    <div class="totals">
      <span>Subtotal: {{ subtotal }}</span>
      <span></span>
    </div>  
  </div>
</template>

<script>
export default {
  props: {
    features: {
      type: Array,
      default: () => [
        {
          name: '',
          price: 0
        }
      ]
    },
    product: {
      type: Object,
      default: () => { return {} }
    }
  },
  data () {
    return {
      taxRate: .08
    }
  },
  computed: {
    subtotal: () => {
      let subtotal = 0
      this.features.forEach( feature => subtotal += feature.price)
      subtotal += this.product.price
      return subtotal
    },
    total: () => {
      const total = subtotal += subtotal * this.taxRate
      return total
    }
  }
}
</script>

<style scoped>

</style>