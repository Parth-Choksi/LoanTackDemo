<template>
     <div class="menu_main">
         <div class="nav_div">        
            <NavDrawer/>
        </div>
        <div class="parent">
            <Appbar class="header_app"/>
         <div class="menu_header">
             <h1>Menus</h1>
             <v-row>
                 <v-col cols="12">
                     <v-tabs v-model="tab">
                         <v-tab class="text-none justify-start">Dashboard</v-tab>
                         <v-tab class="text-none justify-start">App Menu</v-tab>
                         <v-tab class="text-none justify-start">Mortage Guide</v-tab>
                     </v-tabs>
                 </v-col>
             </v-row>
         </div>
         <div class="menu_middle">
             <v-tabs-items v-model="tab">
                 <v-tab-item><MenuDashboard/></v-tab-item>
                 <v-tab-item><MenuApp/></v-tab-item>
                 <v-tab-item><MenuGuide/></v-tab-item>
             </v-tabs-items>
         </div>
        </div>
    </div>
</template>

<script>
import MenuDashboard from '../menus/dashboard.vue'
import MenuApp from '../menus/appmenu.vue'
import MenuGuide from '../menus/guide.vue'
import Appbar from '/LoanTack1/loantack-project/src/views/manage/app_bar.vue'
import NavDrawer from '/LoanTack1/loantack-project/src/views/manage/nav_bar.vue'
export default {
    components:
    {
        NavDrawer,
        Appbar,
        MenuDashboard,
        MenuApp,
        MenuGuide,
    },
    data()
    {
        return{
            tab: 0,
        }
    }
}
</script>

<style>

</style>