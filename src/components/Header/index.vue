<template>
  <div id="header">
    <div class="header navbar-light bg-light">
      <nav class="navbar navbar-expand">
        <img src="../../assets/logo.svg" alt="">
        <a class="navbar-brand" href="#">Yu Hosi</a>

        <div class="collapse navbar-collapse">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">首页</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">标签</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">分类</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">关于</a>
            </li>
          </ul>
          <!-- <form class="form-inline my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          </form> -->
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {}
  },
  methods: {}
}
</script>

<style scoped lang="scss">
  #header{
    min-height: 6vh;
    color: #2c3e50;
  }
  .navbar-brand {
    font-size: 1.7rem;
  }
  .header {
    padding-left: 3rem;
    padding-right: 3rem;
    img {
      width: 3rem;
      margin-left: 1rem;
      margin-right: 1rem;
      vertical-align: middle;
    }
  }
  .nav-link {
    font-size: 1.05rem
  }

  @media (min-width: 576px) and (max-width: 767.99px) { 
    .header {
      padding-left: 0rem;
      padding-right: 0rem;
    }
    img {
      width: 3rem;
      margin-left: 0rem;
      margin-right: 1rem;
      vertical-align: middle;
    }
  }
  @media (max-width: 576px) { 
    .header {
      padding-left: 0rem;
      padding-right: 0rem;
      img {
        width: 3rem;
        margin-left: 0.5rem;
        margin-right: 1rem;
        vertical-align: middle;
      }
    }
    .navbar {
      padding: 0.5rem 0rem
    }
    .form-inline {
      display: none;
    }
    .navbar-brand {
      font-size: 1.25rem;
    }
    .nav-link {
      font-size: 1rem
    }
  }
</style>
