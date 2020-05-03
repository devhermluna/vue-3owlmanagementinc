<template>
  <div class="search-input">
    <i class="icon ion-ios-search" />
    <input @input="debounceInput" placeholder="Search" />
  </div>
</template>

<script>
import { debounce } from 'lodash';

export default {
  props: {
    action: Function,
  },
  methods: {
    debounceInput: debounce(function(e) {
      this.$props.action(e.target.value);
    }, 2000),
  },
};
</script>

<style lang="sass" scoped>
@import '../assets/sass/variables'
@import '../assets/sass/mixins'

.search-input
  height: 40px
  width: 100%
  padding: 10px 15px
  background: $color-bg-gallery
  position: relative
  border-radius: $border-radius
  overflow: hidden
  margin-bottom: 20px

  i
    position: absolute
    top: 11px

  input
    width: 100%
    border: none
    position: absolute
    top: 0
    right: 0
    bottom: 0
    left: 0
    background: none
    outline: none
    padding-left: 40px
    color: white
</style>
