<template>
  <div id="app">
    <PhotoGallery />
  </div>
</template>

<script>
import PhotoGallery from './components/PhotoGallery/GalleryContainer';
import store from './store';
import './plugins/VueMasonry';

export default {
  name: 'App',
  store,
  components: {
    PhotoGallery,
  },
};
</script>

<style lang="sass">
@import './assets/sass/reset'
@import './assets/sass/variables'

#app
  font-family: $varela
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  padding: $gutter
  background: #18191a
  height: 100vh
  color: white
</style>
