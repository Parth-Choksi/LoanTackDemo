<template>
    <div class="share_app_main">
        <div class="nav_div">        
            <NavDrawer/>
        </div>
        <div class="parent">
            <Appbar class="header_app"/>
        <div class="share_app_header">
            <h1>Share App</h1>
        </div>
        <v-divider class="divider_class"/>
        <div class="share_app_middle">
            <v-card class="max_card">
                <v-card-text>
                    <v-row>
                        <v-col cols="5">
                            <label class="textfield_label" for="select branding">Select LO/Co-Branding</label>
                            <v-select placeholder="Select" append-icon="fas fa-caret-down" outlined dense></v-select>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="5">
                            <label class="textfield_label" for="phone numbers">Phone Number(s)</label>
                            <v-text-field placeholder="Enter Here" outlined dense></v-text-field>
                        </v-col>
                        <v-col cols="2">
                            OR
                        </v-col>
                        <v-col cols="5">
                            <label class="textfield_label" for="email address">Email Address</label>
                            <v-text-field placeholder="Enter Here" outlined dense></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <label class="textfield_label" for="message">Message</label>
                            <v-textarea rows="3" no-resize placeholder="Enter Here" outlined dense></v-textarea>
                        </v-col>
                    </v-row>
                    </v-card-text>
                    <v-divider class="divider_class"/>
                    <v-card-text>
                    <v-btn color="success" class="btn_class">SEND MESSAGE</v-btn>
                    </v-card-text>
                
            </v-card>
        </div>
        </div>
    </div>
</template>

<script>
import Appbar from '../app_bar.vue'
import NavDrawer from '../nav_bar'
export default {
    components:{
        Appbar,
        NavDrawer,
    }
}
</script>

<style lang="scss">
.share_app_main{
    float: left;
    width: 100%;
    .share_app_middle{
    float: left;
    width: 100%;
        .col-2 {
            flex: 0 0 16.6666666667%;
            max-width: 4%;
            line-height: 56px;
        }
}
}
</style>