<template>
  <div class="gallery-container">
    <CategoryList :items="categoryList" />
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
    };
  },
  mounted() {
    this.$store.dispatch('CHANGE_CATEGORY', categories[0]);
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

.gallery
  width: calc(100% - 270px)
  height: 100%
  background: #242526
  border-radius: $border-radius
  overflow: auto
  padding: $gutter

  +xs
    width: 100%
</style>
