<template>
    <v-card width="90%" height="300px">
         <v-card-title>Promotions</v-card-title>
        <v-divider class="divider_class"/>
        <v-card-text>
            <v-select :items="items" outlined placeholder="Special Offers">
            </v-select>
            <v-select :items="items" outlined placeholder="Special Offers">
            </v-select>
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
.v-input__control{
    margin: 10px 15px 5px 15px;    
}
</style>