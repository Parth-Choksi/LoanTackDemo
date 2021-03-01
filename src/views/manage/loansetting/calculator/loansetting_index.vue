<template>
     <div class="loan_main">
         <div class="loan_header">
             <h1>Calculators</h1>
             <div class="switch_div">
                
                 <label>{{tabs.title}}</label>
                <v-switch inset color="success"></v-switch>
             </div>
             <v-row>
                 <v-col cols="12">
                     <v-tabs v-model="tabs.tab">
                         <v-tab class="text-none justify-start">FHA</v-tab>
                         <v-tab class="text-none justify-start">Conventional</v-tab>
                         <v-tab class="text-none justify-start">Jumbo</v-tab>
                         <v-tab class="text-none justify-start">USDA</v-tab>
                         <v-tab class="text-none justify-start">VA</v-tab>
                         <v-tab class="text-none justify-start">Affordability</v-tab>
                     </v-tabs>
                 </v-col>
             </v-row>
         </div>
         <div class="loan_middle">
             <v-tabs-items v-model="tabs.tab">
                 <v-tab-item><FHA/></v-tab-item>
                 <v-tab-item><Conventional/></v-tab-item>
                 <v-tab-item><Jumbo/></v-tab-item>
                 <v-tab-item><USDA/></v-tab-item>
                 <v-tab-item><VA/></v-tab-item>
                 <v-tab-item><Affordability/></v-tab-item>
             </v-tabs-items>
         </div>
    </div>
</template>

<script>
import FHA from '../calculator/fha'
import Conventional from '../calculator/conventional.vue'
import Jumbo from '../calculator/jumbo.vue'
import USDA from '../calculator/usda.vue'
import VA from '../calculator/va.vue'
import Affordability from '../calculator/affordability.vue'
export default {
    components:
    {
        FHA,
        Conventional,
        Jumbo,
        USDA,
        VA,
        Affordability,
    },
    data()
    {
        return{
            tabs: [
                {tab:0,title:'FHA'},
                {tab:1,title:'Conventional'},
                {tab:2,title:'Jumbo'},
                {tab:3,title:'USDA'},
            ],
        }
    }
}
</script>

<style lang="scss">
.switch_div{
    display: inline-block;
}
</style>