<template>
    <v-card class="common_card">
         <v-card-title>Promotions</v-card-title>
        <v-divider class="divider_class"/>
        <v-card-text>
            <v-select append-icon="fas fa-caret-down" :items="items" outlined dense placeholder="Special Offers">
            </v-select>
            <v-select append-icon="fas fa-caret-down" :items="items" outlined dense placeholder="Special Offers">
            </v-select>
             <!-- <p>The Portal will be under maintenance for half hour between 3:00 PM to</p> -->
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    data()
    {
        return{
            items : ['Special Offers','Offers','Normal Discount']
        }
    }
}
</script>

<style lang="scss">
@import "@/scss/variable.scss";
.v-input__control{
    margin: 10px 15px 5px 15px;    
}
</style>