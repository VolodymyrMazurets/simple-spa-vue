<template>
  <div class="list">
    <a-card v-for="card in breeds" :key="card.id" size="small" :title="card.name" style="width: 200px">
      <a slot="extra" href="#">more</a>
      <ul>
        <li>{{card.bred_for}}</li>
        <li>{{card.origin}}</li>
      </ul>
    </a-card>
  </div>
</template>
<script>
import { fetchBreeds } from '../http';

export default {
  name: 'Beer',
  data() {
    return {
      breeds: [],
    };
  },
  async mounted() {
    this.breeds = await fetchBreeds();
  },
};
</script>
<style lang="scss" scoped>
  
</style>
