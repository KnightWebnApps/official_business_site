<template>
  <div v-if="$nuxt.isOffline" class="network-detector">
    You are Offline
  </div>
</template>

<script>
export default {

}
</script>

<style>
.network-detector {
  background-color: #fe4747;
  color: #fff;
  text-align: center;
  width: 100%;
  padding: 5px;
}
</style>