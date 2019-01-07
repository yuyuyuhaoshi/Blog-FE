<template>
  <div class="banner">
    <img src="../../assets/logo.svg">
  </div>
</template>

<script>
export default {
  name: 'Banner',
  props: {
    title: String,
    more: Boolean,
    moreUrl: {
      type: String,
      required: false
    }
  }
}
</script>

<style scoped>
  .banner {
    text-align: center;
  }
  img {
    width: 13rem;
    padding: 2rem 0;
    vertical-align: middle;
  }
  @media (min-width: 576px) and (max-width: 767.99px) { 
    img {
      width: 10rem;
      padding: 2rem 0;
      vertical-align: middle;
    }
  }
  @media (max-width: 576px) { 
    img {
      width: 7rem;
      padding: 1rem 0;
      vertical-align: middle;
    }
  }
</style>
