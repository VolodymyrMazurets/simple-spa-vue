<template>
  <div class="cats">
    <a-card v-for="breed in breeds" :key="breed.id" hoverable style="width: 240px">
    <a-card-meta :title="breed.name">
      <template slot="description">
        {{breed.description}}
      </template>
    </a-card-meta>
  </a-card>
  </div>
</template>

<script>
import axios from 'axios';

axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common['x-api-key'] = '9024a662-aae7-44f7-8c45-a80a3fbd39ab';

export default {
  name: 'Cats',

  data() {
    return {
      breeds: [],
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
        const { data } = await axios.get('/images/search');
        this.breeds = data;
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
