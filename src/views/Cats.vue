<template>
  <div class="cats">
  </div>
</template>

<script>

export default {
  name: 'Cats',

  data() {
    return {
      search: [],
    };
  },
  computed: {
    ageConfirmation() {
      return !this.ageConfirm;
    },
  },
  methods: {
    showMessage() {
      this.$message.success('Page is mounted', 1);
    },
  },
  mounted() {
  },
};
</script>
<style lang="scss">
.cats {
  @include flex;
  flex-wrap: wrap;
}
</style>
