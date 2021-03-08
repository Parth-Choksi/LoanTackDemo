<template>
    <div class="branded_index_main">
         <div class="nav_div">        
            <NavDrawer/>
        </div>
        <div class="parent">
            <Appbar class="header_app"/>
            <div class="links">
            <v-card>
                <h1>Branded App</h1>
               
                <v-tabs v-model="tabs.tab">
                         <v-tab class="text-none justify-start">Information</v-tab>
                         <v-tab class="text-none">Apply</v-tab>
                </v-tabs>
            </v-card>
            </div>
       
         <div class="loan_middle">
             <v-tabs-items v-model="tabs.tab">
                 <v-tab-item><BrandedApp/></v-tab-item>
                 <v-tab-item><ApplyBranded/></v-tab-item>
             </v-tabs-items>
         </div>
          </div>
    </div>
</template>

<script>
import Appbar from '../app_bar.vue'
import NavDrawer from '../nav_bar'
import BrandedApp from '../brandedapp/branded_app.vue'
import ApplyBranded from '../brandedapp/apply_branded.vue'
export default {

    components:{
        Appbar,
        NavDrawer,
        BrandedApp,
        ApplyBranded,
    },

    data()
    {
        return{
            tabs:[
                {tab:0,title:'Information'},
                {tab:1,title:'Apply'},
            ]
        }
    }
}
</script>

<style lang="scss">

.loan_middle{
    float: left;
    width: 100%;
    .links{
        float: left;
        width: 100%;
    }
}
</style>