<template>
    <v-card class="common_card">
        <v-card-title>Recent Calculations</v-card-title>
        <v-divider class="divider_class"/>
        <v-card-text>
            <pie-chart :data="[['fha',603],['conventional',643],['jumbo',406],['usda',629],['va',46],['affordability',228]]"></pie-chart>
        </v-card-text>
    </v-card>    
</template>

<script>
export default {

    data()
    {
        return{

        }
    },

}
</script>

<style>

</style>