<template>
    <div>
        
    <!-- <a-card hoverable style="width: 240px" class="card-random">
        <img
        slot="cover"
        alt="example"
        :src="drinks.strDrinkThumb"
        />
        <a-card-meta :title="drinks.strDrink || '' ">
        <template slot="description">
            <p> {{drinks.strAlcoholic}} </p>
            <p> {{drinks.strGlass}} </p>
            <p> {{drinks.strInstructions}} </p>
        </template>
        </a-card-meta>
  </a-card> -->
    <RandomCoctail :drinks="drinks" />


   <a-input-search
        placeholder="input search text"
        enter-button="Search"
        size="large"
        @search="onSearch"
       
        v-model="title"
    />
    <!-- {{title}} -->
 <!-- @input="onHandleInput" -->

  <div class="container">
      <template v-if="caption.length !== 0">
          <a-card class="card-drink" v-for="drink in caption" :key="drink.idDrink" hoverable style="width: 240px">
            <img
              slot="cover"
              alt="drink"
              :src="drink.strDrinkThumb"
            />
            <a-card-meta :title="drink.strDrink || '' ">
              <template slot="description">
                    <p>{{drink.strAlcoholic}}</p>
                    <p>{{drink.strCategory}}</p>
                    <p>{{drink.strGlass}}</p>
        
              </template>
            </a-card-meta>
          </a-card>
      </template>
      <template v-else-if="caption === null && isEmptyData">
          <div>
              <h3>Not found</h3>
          </div>
      </template>
  </div>

         <!-- <a-card  hoverable style="width: 240px">
            
            <a-card-meta :title="drinks.strDrink || ''"> 
               
            </a-card-meta>
        </a-card> -->

         <!-- <pre>{{drinks}}</pre> -->
    </div>
</template> 

<script>
import axios from 'axios';
import RandomCoctail from '../components/RandomCoctail.vue';

// axios.defaults.baseURL = 'https://www.thecocktaildb.com/api/json/v1/1';

axios.defaults.baseURL = 'https://cors-anywhere.herokuapp.com/https://www.thecocktaildb.com/api/json/v1/1';

export default {
    name:'Coctails',
    components: {
        RandomCoctail,
    },    
    data() {
        return {
            drinks : {},
            title: '',
            caption: [],
            isEmptyData: false,
        }
    },
    methods: {
        async fetchData() {
        try {
            const { data } = await axios.get('/random.php');
            this.drinks = data.drinks[0];
            // console.log(data.drinks[0]);
            
        } catch (error) {
            console.error(error);
        }
        },
        // async onHandleInput() {
        //      try {
        //         const { data } = await axios.get(`/search.php?f=${this.title}`);
                
        //         console.log(data);
        //     } catch (error) {
        //         console.error(error);
        //     }
        // },
        async onSearch() {
             try {
                const { data } = await axios.get(`/search.php?s=${this.title}`) ?? [];
                this.caption = data.drinks;

                if (!data) {
                    this.isEmptyData = true;
                    console.log('nnj');
                } else {
                    this.isEmptyData = false;
                }
                console.log(this.caption);
            } catch (error) {
                console.error(error);
            }
        },
    },
    mounted() {
        this.fetchData();
    },
}
</script>

<style lang="scss">
    .container {
        max-width: 1200px;
        display: flex;
        flex-wrap: wrap;
    }
    .card-drink {
        flex: 1 1 40%;
        max-width: 40%;
    }

    .card-random {
        margin-bottom: 50px;
    }
</style>
