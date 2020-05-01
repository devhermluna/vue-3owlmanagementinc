<template>
  <div class="gallery-container">
    <button type="button" class="btn-category" @click="toggleMenuActive">
      Category
    </button>
    <CategoryList :items="categoryList" :menu-active="menuActive" />
    <div class="gallery">
      <PhotoDetails v-if="hasActive" />
      <PhotoList v-else />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import categories from '../../constants/categories';
import CategoryList from './Category/CategoryList';
import PhotoList from './PhotoList';
import PhotoDetails from './PhotoDetails';
import events from '../../common/events';

export default {
  computed: mapGetters(['hasActive']),
  components: {
    CategoryList,
    PhotoList,
    PhotoDetails,
  },
  data: function() {
    return {
      categoryList: categories,
      menuActive: false,
    };
  },
  mounted() {
    this.$store.dispatch('CHANGE_CATEGORY', categories[0]);

    events.$on('toggle-menu', this.toggleMenuActive);
  },
  methods: {
    toggleMenuActive() {
      this.menuActive = !this.menuActive;
    },
  },
};
</script>

<style lang="sass" scoped>
@import '../../assets/sass/variables'
@import '../../assets/sass/mixins'

.gallery-container
  display: flex
  justify-content: space-between
  height: 100%

  +xs
    flex-direction: column
    justify-content: flex-start

  .btn-category
    display: none
    margin-bottom: $gutter
    border-radius: 45px
    min-height: 45px
    background: $color-active
    color: white

    +xs
      display: block

  .gallery
    width: calc(100% - 270px)
    height: 100%
    background: #242526
    border-radius: $border-radius
    overflow: auto
    padding: $gutter

    +xs
      width: 100%
      height: auto
</style>
