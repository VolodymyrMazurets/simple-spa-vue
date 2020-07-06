<template>
    <div class="container">
        <h2>Random Coctail</h2>
        <a-card class="card-random" style="width: 400px">
            <img
            slot="cover"
            alt="Coctail"
            :src="drinks.strDrinkThumb"
            />
            <a-card-meta class="card-name" :title="drinks.strDrink || '' ">      
            <template slot="description">
                <p> {{drinks.strAlcoholic}} </p>
                <p> {{drinks.strGlass}} </p>
                <p> {{drinks.strInstructions}} </p>
            </template>
        </a-card-meta>
  </a-card>
    </div>
</template>

<script>
export default {
    name: 'RandomCoctail',
    props: {
        drinks: {
            type: Object,
            required: true,
        },
    },
}
</script>

<style lang="scss" scoped>
    h2 {
        text-transform: uppercase;
        margin: 0 auto;
        font-size: 40px;
        display: block;
    }
    .ant-card-meta-title {
        font-size: 26px;
    }
    .container {
        max-width: 1000px;
        margin: 0 auto 50px;
        text-align: center;
    }
    .card-random {
        width: 400px;
        margin: 0 auto;
    }
</style>
