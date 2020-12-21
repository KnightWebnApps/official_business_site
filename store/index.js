export const state = () => ({
  product: {},
  features: [],
})

export const mutations = {
  addFeature(state, feature) {
    state.features.push(feature)
  },
  removeFeature(state, { feature }){
    state.features.splice(state.features.indexOf(feature), 1)
  },
  setProduct(state, product) {
    state.product = product
  },
  removeProduct(state){
    state.product = {}
  }
}
