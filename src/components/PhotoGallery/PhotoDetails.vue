<template>
  <div class="photo-details">
    <div
      class="photo-details-image"
      :style="{
        backgroundImage: `url(${active.url_z})`,
      }"
    >
      <button type="button" class="btn-back" @click="() => setActive()">
        <i class="icon ion-md-arrow-back" />
      </button>
    </div>
    <div class="photo-details-content">
      <h2 class="text-title">{{ active.title }}</h2>
      <h4 class="text-subtitle">{{ active.ownername }}</h4>
      <div class="text-content" v-html="active.description._content" />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['active']),
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

.photo-details
  height: 100%
  display: flex
  position: relative
  overflow: auto
  margin-right: -$gutter

  &-content
    flex: 1
    margin-left: $gutter
    padding-right: $gutter

  &-image
    position: sticky
    top: 0
    height: 100%
    width: 50%
    background:
      repeat: no-repeat
      size: cover
      position: center
    border-radius: $border-radius
    padding: $gutter

    button.btn-back
      height: 40px
      width: 40px
      padding: 0
      border: none
        radius: 50%
      ouline: none
      display: flex
      align-items: center
      justify-content: center
      background: rgba(255, 255, 255, 0.1)
      color: white
      transition: background 0.15s linear

      i
        font-size: 20px

      &:hover
        background: #00947f
</style>
