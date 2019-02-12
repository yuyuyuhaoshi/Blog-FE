<template>
  <div class="home-card">
    <div class="row">
      <div class="left-wrapper col-8">
        <card class="post-list" :title="postListTitle">
          <ul>
            <li class="post-list-item" v-for="(post, index) in postList" :key="index">
              <a :href="post.url" class="h3">{{ post.name }}</a>
              <p class="content">{{ post.content }}</p>
              <p class="calendar"><img src="../../assets/calendar.svg"><span>&nbsp;&nbsp; {{ post.created_time }}</span></p>
            </li>
          </ul>
        </card>
      </div>
      <div class="right-wrapper col-4">
        <card :title="categoryListTitle"></card>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card'

export default {
  name: 'HomeCard',
  components: {
    Card
  },
  data() {
    return {
      postList: [
        {
            "name": "From public guy stuff actually such player color.",
            "url": "https://google.com",
            "content": "Ten right agent. Now marriage then especially sense. Enter than rest pick surface likely.\nPerformance such hand your network. Value doctor threat modern. Let will inside.",
            "created_time": "2019"
        },
        {
            "name": "Land glass feel along different.",
            "url": "https://google.com",
            "content": "Bring network must per avoid these. Hot left lead stay management career life.",
            "created_time": "2019"
        },
        {
            "name": "Girl better serve run them line drug.",
            "url": "https://google.com",
            "content": "Director meet only company movement south smile. Age heart agree write data star.\nHand board dinner laugh activity back market. Black nearly end leave accept. Study nor everything moment man.",
            "created_time": "2019"
        }
      ],
      postListTitle: "文章列表",
      categoryListTitle: "分类"
    }
  },
}
</script>

<style scoped lang="scss">
  .home-card {
    width: 100%;
    padding-left: 3rem;
    padding-right: 3rem;
  }
  .post-list {
    text-align: left;
    .content {
      margin-top: 0.5rem;
      line-height: 140%;
      font-size: 1rem;
    }
    .calendar {
      margin-top: 0.5rem;
      vertical-align: middle;
      font-size: 0.9rem;
      img {
        display: inline-block;
        width: 0.8rem;
      }
    }
    .post-list-item {
      margin-bottom: 1.5rem;
    }
  }
  @media (min-width: 576px) and (max-width: 767.99px) { 
    .home-card {
      padding-left: 0rem;
      padding-right: 0rem;
    }
  }
  @media (max-width: 576px) { 
    .home-card {
      padding-left: 0rem;
      padding-right: 0rem;
    }
  }
</style>
