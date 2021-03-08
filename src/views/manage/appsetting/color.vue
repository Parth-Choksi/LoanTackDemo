<template>
    <div class="color_main">
        <div class="nav_div">        
            <NavDrawer/>
        </div>
        <div class="parent">
            <Appbar class="header_app"/>
            <h1>Color Scheme</h1>
             <v-divider class="divider_class"/>
        <v-card class="max_card">
            <div class="form_sec">
                <v-card class="main_card">
                    <v-card-text>
                    <v-row>
                        <v-col cols="6">
                            <div class="inside_card_title">
                                <v-checkbox class="list-check"></v-checkbox>
                                <v-card-title>Default Theme</v-card-title>
                            </div>
                            <div class="inside_card_data">
                                <v-card class="insider_card" color="#4FB263">
                                    <v-card-text>
                                        <i class="fas fa-user-circle"></i>
                                    </v-card-text>
                                </v-card>
                            </div>
                        </v-col>

                         <v-col cols="6">
                            <div class="inside_card_title">
                                <v-checkbox class="list-check"></v-checkbox>
                                <v-card-title>Light Theme</v-card-title>
                            </div>
                            <div class="inside_card_data">
                                <v-card class="insider_card" color="#BAFAC7">
                                    <v-card-text>
                                        <i class="fas fa-user-circle"></i>
                                    </v-card-text>
                                </v-card>
                            </div>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="6">
                            <div class="inside_card_title">
                                <v-checkbox class="list-check"></v-checkbox>
                                <v-card-title>Warm Theme</v-card-title>
                            </div>
                            <div class="inside_card_data">    
                                <v-card class="insider_card" color="#FF9E9E">
                                    <v-card-text>
                                        <i class="fas fa-user-circle"></i>
                                    </v-card-text>
                                </v-card>
                            </div>
                        </v-col>

                         <v-col cols="6">
                            <div class="inside_card_title">
                                <v-checkbox class="list-check"></v-checkbox>
                                <v-card-title>Cool Theme</v-card-title>
                            </div>
                            <div class="inside_card_data">
                                <v-card class="insider_card" color="#3ACBE9">
                                    <v-card-text>
                                        <i class="fas fa-user-circle"></i>
                                    </v-card-text>
                                </v-card>
                            </div>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="6">
                            <div class="inside_card_title">
                                <v-checkbox class="list-check"></v-checkbox>
                                <v-card-title>Cool Theme</v-card-title>
                            </div>
                            <div class="inside_card_data">
                                <v-card class="insider_card" color="#D0B9FF">
                                    <v-card-text>
                                        <i class="fas fa-user-circle"></i>
                                    </v-card-text>
                                </v-card>
                            </div>
                        </v-col>

                         <v-col cols="6">
                            <div class="inside_card_title">
                                <v-checkbox class="list-check"></v-checkbox>
                                <v-card-title>Dark Theme</v-card-title>
                            </div>
                            <div class="inside_card_data">
                                <v-card class="insider_card" color="#01819B">
                                    <v-card-text>
                                        <i class="fas fa-user-circle"></i>
                                    </v-card-text>
                                </v-card>
                            </div>
                        </v-col>
                    </v-row>
                    </v-card-text>
                    <v-divider class="divider_class"/>
                    <v-card-text>
                        <v-btn class="btn_class" outlined color="success">PREVIEW</v-btn>
                        <v-btn class="btn_class" color="success">SAVE</v-btn>
                    </v-card-text>
                </v-card>
                
            </div>
            <div class="profile_right_sec">
            </div>
        </v-card>
        </div>
    </div>
</template>

<script>
import Appbar from '/LoanTack1/loantack-project/src/views/manage/app_bar.vue'
import NavDrawer from '/LoanTack1/loantack-project/src/views/manage/nav_bar.vue'
export default {
    components:{
        NavDrawer,
        Appbar,
    }
}
</script>

<style lang="scss">

.insider_card{
    width: 70%;
    margin-left: 35px;
    height: 300px;
    .v-card__text {
        position: absolute;
        top: 35%;
        left: 40%;
        width: auto !important;
        transform: translate(-50%, -50%);
        i {
            font-size: 40px;
        }
    }
}
.main_card{
    float: left;
    width: 100%;
    .v-icon.v-icon:after{
        opacity: 1 !important;
    }
    .inside_card_title{
        float: left;
        width: 100%;
    }
    .inside_card_data{
        float: left;
        width: 100%;
    }
}

</style>