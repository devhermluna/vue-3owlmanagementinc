<template>
  <div
    class="category"
    :class="{
      'category-mobile-active': menuActive,
    }"
  >
    <p class="title category-title">Category List</p>
    <button class="btn-close" type="button" @click="toggleMenu">
      <i class="icon ion-md-close" />
    </button>
    <SearchInput :action="search" />
    <div class="category-list">
      <CategoryItem
        v-for="item in items"
        :key="item"
        :name="item"
        :active="item.toLowerCase() === category.toLowerCase()"
      />
    </div>
  </div>
</template>

<script>
import CategoryItem from './CategoryItem';
import { mapState, mapActions } from 'vuex';
import events from '../../../common/events';
import SearchInput from '../../SearchInput.vue';

export default {
  computed: mapState(['category']),
  components: {
    CategoryItem,
    SearchInput,
  },
  props: {
    items: {
      id: Number,
      name: String,
    },
    menuActive: Boolean,
  },
  methods: {
    ...mapActions({
      changeCategory: 'CHANGE_CATEGORY',
    }),
    search(value) {
      this.changeCategory(value);
    },
    toggleMenu() {
      events.$emit('toggle-menu');
    },
  },
};
</script>

<style lang="sass" scoped>
@import '../../../assets/sass/variables'
@import '../../../assets/sass/mixins'

.category
  width: 250px
  height: 100%

  +xs
    position: fixed
    top: 0
    right: 0
    bottom: 0
    left: 0
    width: 100%
    background: $color-bg
    z-index: 1000
    padding: 15px 0 15px 15px
    display: none

  .btn-close
    display: none
    position: absolute
    top: 10px
    right: 16px
    height: 33px
    width: 33px
    border-radius: 50%
    background: $color-active
    color: white

    i
      font-size: 18px

    +xs
      display: block

  &-mobile-active
    +xs
      display: block

  &-title
    color: white
    margin:
      top: 5px
      left: 15px
      bottom: 10px
    font:
      size: 12px
      weight: 600
    text-transform: uppercase
    letter-spacing: 2px

    +xs
      margin-bottom: 20px

  &-list
    height: calc(100% - 86px)
    overflow: auto
    padding-right: 8px
</style>
