<template>
  <div class="home">
    <Banner></Banner>
    <HomeCard></HomeCard>
  </div>
</template>

<script>
import Banner from '@/components/Banner'
import HomeCard from '@/components/HomeCard'
export default {
  name: 'Home',
  components: {
    Banner,
    HomeCard
  }
}
</script>

<style scoped>
</style>
