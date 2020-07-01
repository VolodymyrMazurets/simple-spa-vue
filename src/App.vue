<template>
  <div id="app" class="app">
    <div class="app__nav">
      <router-link to="/">
        <a-button :type="getButtonType('Cats')">Cats</a-button>
      </router-link>
      <router-link to="/about">
        <a-button :type="getButtonType('About')">About</a-button>
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
