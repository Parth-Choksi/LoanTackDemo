<template>
    <div class="qr_code_main">
        <div class="nav_div">        
            <NavDrawer/>
        </div>
        <div class="parent">
            <Appbar class="header_app"/>
        <div class="qr_code_header">
            <h1>QR Codes</h1>
        </div>
        <v-divider class="divider_class"/>
        <div class="qr_code_middle">
            <v-card class="max_card">
                <v-card-title>LO QR Code</v-card-title>
                <v-divider class="divider_class"/>
                <v-card-text>
                        <p>LO Name : 
                            <b>Robert Baker</b>
                        </p>
                        <p>Link :
                            <b>https://enfuse.com/xyz</b>
                        </p>
                        <p>Pick Size
                            <i class="fas fa-qrcode fa-2x"></i> 
                            <i class="fas fa-qrcode fa-3x"></i>
                            <i class="fas fa-qrcode fa-5x"></i> 
                            <i class="fas fa-qrcode fa-7x"></i>                          
                        </p>
                </v-card-text>
                <v-divider class="divider_class"/>
                <v-card-text>
                    <v-btn color="success" class="btn_class">DOWNLOAD</v-btn>
                </v-card-text>
            </v-card>

            <v-card class="max_card">
                <v-card-title>Co-Branding Officer QR Code </v-card-title>
                <v-divider class="divider_class"/>
                <v-card-text>
                        <v-row>
                            <v-col cols="3">CO-BRANDING OFFICER NAME
                            </v-col>
                            <v-col cols="3">LINK</v-col>
                            <v-col cols="5">PICK SIZE</v-col>
                            <v-col cols="1">ACTIONS</v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="3">Robert Baker</v-col>
                            <v-col cols="3"><a>https://enfuse.com/xyz</a></v-col>
                            <v-col cols="5">
                                <i class="fas fa-qrcode fa-2x"></i> 
                                <i class="fas fa-qrcode fa-3x"></i>
                                <i class="fas fa-qrcode fa-5x"></i> 
                                <i class="fas fa-qrcode fa-7x"></i>   
                            </v-col>
                            <v-col cols="1">
                                <i class="fas fa-download" style="color:lightgreen"></i>
                            </v-col>
                        </v-row>
                </v-card-text>
                <v-card-text>
                        <v-row>
                            <v-col cols="3">Willian Scott</v-col>
                            <v-col cols="3"><a>https://enfuse.com/xyz</a></v-col>
                            <v-col cols="5">
                                <i class="fas fa-qrcode fa-2x"></i> 
                                <i class="fas fa-qrcode fa-3x"></i>
                                <i class="fas fa-qrcode fa-5x"></i> 
                                <i class="fas fa-qrcode fa-7x"></i>   
                            </v-col>
                            <v-col cols="1">
                                <i class="fas fa-download" style="color:lightgreen"></i>
                            </v-col>
                        </v-row>
                </v-card-text>
                <v-divider class="divider_class"/>
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
.max_card{
        a{
            border-bottom: 1px solid #1976d2;
        }
        i{
            color: black;
        }
    }
</style>