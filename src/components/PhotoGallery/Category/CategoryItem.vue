<template>
  <div
    :class="{
      'category-item': true,
      'category-item__active': active,
    }"
    @click="() => getCategory(name)"
  >
    {{ name }}
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: {
    name: String,
    active: Boolean,
  },
  methods: {
    ...mapActions({
      getCategory: 'CHANGE_CATEGORY',
    }),
  },
};
</script>

<style lang="sass" scoped>
@import '../../../assets/sass/variables'

.category-item
  padding: 15px 15px
  font:
    size: 16px
    weight: 600
  cursor: pointer
  color: #8a8a8a
  border-radius: $border-radius
  transition: all 0.15s linear
  margin-bottom: 8px

  &.category-item__active
    background: #00947f
    color: white

  &:not(.category-item__active):hover
    background: rgba(255, 255, 255, 0.05)
    color: white
</style>
