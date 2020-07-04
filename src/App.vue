<template>
  <div id="app" class="app">
    <div class="app__nav">
      <router-link v-for="link in routes" :key="link.name" :to="link.path">
        <a-button :type="getButtonType(link.name)">{{link.name}}</a-button>
      </router-link>
    </div>
    <div class="app__content">
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      routes: [
        {
          path: '/',
          name: 'Cats',
        },
        {
          path: '/about',
          name: 'About',
        },
        {
          path: '/beer',
          name: 'Beer',
        },
      ]
    }
  },
  methods: {
    getButtonType(routeName) {
      return this.$route.name === routeName ? 'danger' : 'primary';
    },
  },
};
</script>

<style lang="scss">
.app {
  height: 100vh;
  &__nav {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 200px;
    @include flex(center, center, column);
    border-right: 1px solid #c3c3c3;
    & > *:not(:last-child) {
      margin-bottom: 16px;
    }
  }
  &__content {
    padding: 24px 24px 24px 224px;
    min-height: 200vh;
  }
}
</style>
