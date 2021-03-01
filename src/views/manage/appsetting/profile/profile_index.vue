<template>
    <div class="profile_main">
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
</template>

<script>
import Bio from '../profile/bio.vue'
import Contact from '../profile/contact.vue'
import Links from '../profile/links.vue'
export default {
    components:
    {
        Bio,
        Contact,
        Links
    },
    data()
    {
        return{
            tab : 1,
        }
    },
}
</script>

<style lang="scss">
.profile_middle{
    float: left;
    width: 100%;
}
</style>