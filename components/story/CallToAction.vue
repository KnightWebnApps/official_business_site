<template>
  <div class="wrapper">
    <a class="button--grey" :href="block.link">{{ block.text }}</a>
  </div>
</template>

<script>
export default {
  props: {
    block: {
      type: Object,
      default: () => { return {
        link: "",
        text: ""
      } }
    }
  }
}
</script>
<style scoped>
.wrapper {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* background-color: #33333380; */
}

</style>