<template>
  <div class="list">
    <app-button :loading="loading" @click="getBreeds">{{getButtonName}}</app-button>
    <a-card
      v-for="card in breeds"
      :key="card.id"
      size="small"
      :title="card.name"
      style="width: 200px"
    >
      <a slot="extra" href="#">more</a>
      <ul>
        <li>{{card.bred_for}}</li>
        <li>{{card.origin}}</li>
      </ul>
    </a-card>
  </div>
</template>
<script>
import { mapActions, mapState, mapMutations } from 'vuex';
import { DOGS_BREED_REQUEST, DOGS_BREED_CLEAR_STATE } from '../store/types';

export default {
  name: 'Dogs',
  data() {
    return {
      loading: false,
    };
  },
  computed: {
    ...mapState('dogs', ['breeds']),
    getButtonName() {
      return this.breeds.length === 0 ? 'Get breeds' : 'Clear breeds list';
    },
  },
  methods: {
    ...mapActions('dogs', [DOGS_BREED_REQUEST]),
    ...mapMutations('dogs', [DOGS_BREED_CLEAR_STATE]),
    async getBreeds() {
      if (this.breeds.length === 0) {
        this.loading = true;
        await this[DOGS_BREED_REQUEST]();
        this.loading = false;
      } else this[DOGS_BREED_CLEAR_STATE]();
    },
  },
};
</script>
<style lang="scss" scoped>
</style>
