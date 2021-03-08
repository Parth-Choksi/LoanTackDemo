<template>
    <div class="profile_main">
        <div class="nav_div">        
            <NavDrawer/>
        </div>
        <div class="parent">
            <Appbar class="header_app"/>
         <div class="profile_header">
             <h1>Profile</h1>
             <v-row>
                 <v-col cols="12">
                     <v-tabs v-model="tab">
                         <v-tab class="text-none justify-start">Bio</v-tab>
                         <v-tab class="text-none justify-start">Contact Information</v-tab>
                         <v-tab class="text-none justify-start">Links</v-tab>
                     </v-tabs>
                 </v-col>
             </v-row>
             <v-divider class="divider_class"/>
         </div>
         <div class="profile_middle">
             <v-tabs-items v-model="tab">
                 <v-tab-item><Bio/></v-tab-item>
                 <v-tab-item><Contact/></v-tab-item>
                 <v-tab-item><Links/></v-tab-item>
             </v-tabs-items>
         </div>
        </div>
    </div>
</template>

<script>
import Bio from '../profile/bio.vue'
import Contact from '../profile/contact.vue'
import Links from '../profile/links.vue'
import Appbar from '/LoanTack1/loantack-project/src/views/manage/app_bar.vue'
import NavDrawer from '/LoanTack1/loantack-project/src/views/manage/nav_bar.vue'
export default {
    components:
    {
        NavDrawer,
        Appbar,
        
        Bio,
        Contact,
        Links
    },
    data()
    {
        return{
            tab : 0,
        }
    },
}
</script>

<style lang="scss">
.profile_main{
    float: left;
    width: 100%;
}
.profile_middle{
    float: left;
    width: 100%;
}
</style>