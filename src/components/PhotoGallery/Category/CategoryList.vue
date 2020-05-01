<template>
  <div class="category">
    <p class="title category-title">Category List</p>
    <div class="category-list">
      <CategoryItem
        v-for="item in items"
        :key="item"
        :name="item"
        :active="item === category"
      />
    </div>
  </div>
</template>

<script>
import CategoryItem from './CategoryItem';
import { mapState } from 'vuex';

export default {
  computed: mapState(['category']),
  components: {
    CategoryItem,
  },
  props: {
    items: {
      id: Number,
      name: String,
    },
  },
};
</script>

<style lang="sass" scoped>
.category
  width: 250px
  height: 100%

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

  &-list
    height: calc(100% - 26px)
    overflow: auto
    padding-right: 8px
</style>
