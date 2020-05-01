<template>
  <div
    class="gallery-item-image"
    :style="{
      backgroundImage: `url(${url})`,
      height: `${height || 200}px`,
    }"
  />
</template>

<script>
export default {
  props: {
    url: String,
    height: Number,
  },
};
</script>

<style lang="sass" scoped>
@import '../assets/sass/variables'

.gallery-item-image
  background:
    color: $color-loader
    size: cover
    position: center
    repeat: no-repeat
  cursor: pointer
</style>
