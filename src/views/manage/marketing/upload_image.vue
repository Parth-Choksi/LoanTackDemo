<template>
    <div class="email_main">
        <div class="nav_div">        
            <NavDrawer/>
        </div>
        <div class="parent">
            <Appbar class="header_app"/>
        <div class="email_header">
            <h1>
            <v-breadcrumbs :items="items">
                <template v-slot:divider>
                    <v-icon>mdi-chevron-right</v-icon>
                </template>
            </v-breadcrumbs>
            </h1>
        </div>
        <v-divider class="divider_class"/>

        <div class="email_middle">
            <v-card class="max_card">
                <v-card-title><b>Image List</b></v-card-title>
                <v-divider class="divider_class"/>
                <v-card-text>
                            <div class="radio1">   
                                <v-img max-height="70" max-width="250" src="https://picsum.photos/id/11/500/300"></v-img>
                                <i class="fas fa-trash-alt"></i>
                            </div>
                            <div class="radio1">
                                <v-img max-height="70" max-width="250" src="https://picsum.photos/id/11/500/300"></v-img>
                                <i class="fas fa-trash-alt"></i>
                            </div>
                            <div class="radio1">
                                <v-img max-height="70" max-width="250" src="https://picsum.photos/id/11/500/300"></v-img>
                                <i class="fas fa-trash-alt"></i>
                            </div>
                </v-card-text>
            </v-card>

            <v-card class="max_card">
                <v-card-title><b>Upload Image</b></v-card-title>
                <v-divider class="divider_class"/>
                <v-card-text>
                    <v-row>
                        <v-col cols="7">
                            <label class="textfield_label" for="select image">Select Image</label>
                            <v-text-field placeholder="Select" outlined append-icon="fas fa-folder"></v-text-field>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-divider class="divider_class"/>
                <v-card-text>
                    <v-btn outlined color="success">UPLOAD</v-btn>
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
    },
    data()
    {
        return{
            radiogroup : 1,

            items: [
            {
                text: 'Email Signature',
                disabled: true,
                href: 'email_signature',
            },
            {
                text: 'Upload Image',
                disabled: false,
                href: '#',
            },
        ],
        }
    }
}
</script>

<style lang="scss">
.radio1{
    width: 100%;
    float: left;
    margin-top: 10px;
}
</style>