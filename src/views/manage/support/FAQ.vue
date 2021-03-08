<template>
    <div class="faqs_main">
        <div class="nav_div">        
            <NavDrawer/>
        </div>
        <div class="parent">
            <Appbar class="header_app"/>
        <div class="faqs_header">
            <h1>FAQs</h1>
        </div>
        <v-divider class="divider_class"/>
        <div class="faqs_middle">
            <v-card class="common_card">
                <v-card-title><b>Can i add custom legal disclaimer</b>
                    <i class="fas fa-sort-up"></i>
                </v-card-title>
                <v-divider class="divider_class"/>
                <v-card-text>
                    Yes. Login to your WEB PORTAL and select App Content, then Disclaimer to add your legal disclaimer. 
                    You may also add a privacy policy
                </v-card-text>
            </v-card>

            <v-card class="common_card">
                <v-card-title><b>How can i share app?</b>
                    <i class="fas fa-sort-up"></i>
                </v-card-title>
            </v-card>

            <v-card class="common_card">
                <v-card-title><b>Is my app just a web page?</b>
                    <i class="fas fa-sort-up"></i>
                </v-card-title>
            </v-card>
        </div>
        </div>
    </div>
</template>

<script>
import Appbar from '../app_bar.vue'
import NavDrawer from '../nav_bar.vue'
export default {
    components:{
        Appbar,
        NavDrawer,
       },
}
</script>

<style lang="scss">
.faqs_middle{
    float: left;
    width: 100%;
        i{
            float: right;
            color: black;
    }
    
}
</style>