<template>
  <div class="wrapper">
    <h2 class="title h4">{{ title }}</h2>
    <hr>
    <div class="m-card-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: String
  }
}
</script>

<style scoped lang="scss">
  .wrapper {
    padding: 0.75rem;
    .title {
      padding-left: 1rem;
      text-align: left;
    }
    .m-card-body {
      padding-left: 1rem;
    }
  }
</style>
