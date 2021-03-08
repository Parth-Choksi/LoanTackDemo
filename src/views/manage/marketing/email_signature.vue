<template>
    <div class="email_main">
        <div class="nav_div">        
            <NavDrawer/>
        </div>
        <div class="parent">
            <Appbar class="header_app"/>
        <div class="email_header">
            <h1>Email Signature</h1>
        </div>
        <v-divider class="divider_class"/>
        <div class="email_middle">
            <v-card class="email_card">
                <v-card-title>Image List</v-card-title>
                <v-divider class="divider_class"/>
                <v-card-text>
                        <v-radio-group v-model="radiogroup">
                            <div class="radio1">
                                <v-radio v-for="n in 3" :key="n" :label="`${n}`" :value="n"> </v-radio>
                                
                                <v-img max-height="70" max-width="250" src="https://picsum.photos/id/11/500/300"></v-img>
                            </div>

                            <div class="radio1">
                                
                                <v-img max-height="70" max-width="250" src="https://picsum.photos/id/11/500/300"></v-img>
                            </div>

                            <div class="radio1">
                                
                                <v-img max-height="70" max-width="250" src="https://picsum.photos/id/11/500/300"></v-img>
                            </div>
                        </v-radio-group>
                </v-card-text>
                <v-divider class="divider_class"/>
                <v-card-text>
                    <v-btn class="btn_class" color="success">SAVE</v-btn>
                    <v-btn class="btn_class" outlined color="success" @click="gotoUploadImage()">UPLOAD</v-btn>
                </v-card-text>
            </v-card>

            <v-card class="email_card">
                <v-card-title>Source Code</v-card-title>
                <v-card-text>
                    <v-textarea no-resize rows="3" placeholder="<!-- Start of Email Signature -->  

    <!-- End of Email Signature -->" outlined></v-textarea>
                </v-card-text>
                <v-divider class="divider_class"/>
                <v-card-text>
                    <v-btn outlined color="success">COPY CODE</v-btn>
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
        }
    },
    methods:{
        gotoUploadImage()
        {
            this.$router.push('/marketing/uploadimage');
        }
    }
}
</script>

<style lang="scss">
.email_card{
    float: left;
    width: 100%;
    margin: 20px 20px 20px 20px;
    .v-icon.v-icon:after{
        opacity: 1 !important;
    }
}
.radio1{
    width: 100%;
    float: left;
}
</style>