<template>
  <div>
    <p class="title gallery-title">Photos</p>
    <div
      v-if="!loading"
      v-masonry
      gutter="20"
      fit-width="true"
      item-selector=".gallery-item"
    >
      <div
        v-masonry-tile
        class="gallery-item"
        v-for="photo in photos"
        :key="photo.id"
      >
        <Photo
          :url="photo.url_z"
          :height="photo.height_z"
          @click.native="() => setActive(photo)"
        />
      </div>
    </div>
    <div class="gallery-loader" v-else>
      <div class="gallery-item" v-for="i in 50" :key="i">
        <Photo />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
import Photo from '../Photo';

export default {
  computed: {
    ...mapState(['loading', 'photos']),
    ...mapGetters(['hasActive']),
  },
  components: {
    Photo,
  },
  methods: {
    ...mapActions({
      setActive: 'SET_ACTIVE',
    }),
  },
};
</script>

<style lang="sass" scoped>
@import '../../assets/sass/variables'

.gallery
  &-title
    font:
      size: 26px
      weight: 600
    color: white
    margin-bottom: 15px
    letter-spacing: 1px

  &-item
    width: 290px
    border-radius: $border-radius
    margin-bottom: $gutter
    overflow: auto

  &-loader
    display: flex
    flex-wrap: wrap
    margin:
      left: -10px
      right: -10px

    .gallery-item
      margin: 0 10px $gutter
</style>
