<template>
    <div class="push_notification_main">
        <div class="nav_div">        
            <NavDrawer/>
        </div>
        <div class="parent">
            <Appbar class="header_app"/>
            <div class="notification_header"><br>
            <h1>
            <v-breadcrumbs :items="items">
                <template v-slot:divider>
                    <v-icon>mdi-chevron-right</v-icon>
                </template>
            </v-breadcrumbs>
            </h1><br>
            </div>
            <v-divider class="divider_class"/>
            <div class="push_notification_middle">
                <v-card class="common_card">
                    <v-card-title><b>Message</b></v-card-title>
                    <v-divider class="divider_class"/>
                    <v-card-text>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field outlined placeholder="Enter Here"></v-text-field>
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-divider class="divider_class"/>
                    <v-card-text>
                        <v-btn class="btn_class" color="success">SEND</v-btn>
                    </v-card-text>
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
    data(){
        return{
            items:[
                {
                text: 'Users',
                disabled: true,
                href: 'users',
                },
                {
                text: 'Send Push Notifications',
                disabled: false,
                href: '#',
                },
            ]
        }
    }
}
</script>

<style lang="scss">
.notification_header{
    width: 100%;
    float: left;
}
.push_notification_middle{
    float: left;
    width: 100%;
}
</style>