<template>
  <div class="cats">
    <a-card hoverable style="width: 240px">
      <img
        slot="cover"
        alt="example"
        :src="search[0].url"
      />
    </a-card>
  </div>
</template>

<script>
import axios from 'axios';

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
    async fetchPhotos() {
      try {
        const { data } = await axios.get('https://api.thecatapi.com/v1/images/search');
        this.search = data;
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    this.fetchPhotos();
  },
};
</script>
<style lang="scss">
.cats {
  @include flex;
  flex-wrap: wrap;
}
</style>
