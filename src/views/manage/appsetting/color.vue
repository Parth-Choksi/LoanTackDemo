<template>
    <div class="color_main">
        <v-card>
            <v-card-title>Color Scheme</v-card-title>
            <v-divider/>
            <div class="profile_left_sec">
                <v-card class="main_card">
                    <v-row>
                        <v-col cols="6">
                            <v-checkbox></v-checkbox>
                            <v-card-text>Default Theme</v-card-text>
                            <v-card class="insider_card" color="#4FB263">
                                <v-card-text>
                                    <i class="fas fa-user-circle"></i>
                                </v-card-text>
                            </v-card>
                        </v-col>

                         <v-col cols="6">
                            <v-checkbox></v-checkbox>
                            <v-card-text>Light Theme</v-card-text>
                            <v-card class="insider_card" color="#BAFAC7">
                                <v-card-text>
                                    <i class="fas fa-user-circle"></i>
                                </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="6">
                            <v-checkbox></v-checkbox>
                            <v-card-text>Warm Theme</v-card-text>
                            <v-card class="insider_card" color="#FF9E9E">
                                <v-card-text>
                                    <i class="fas fa-user-circle"></i>
                                </v-card-text>
                            </v-card>
                        </v-col>

                         <v-col cols="6">
                            <v-checkbox></v-checkbox>
                            <v-card-text>Cool Theme</v-card-text>
                            <v-card class="insider_card" color="#3ACBE9">
                                <v-card-text>
                                    <i class="fas fa-user-circle"></i>
                                </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="6">
                            <v-checkbox></v-checkbox>
                            <v-card-text>Cool Theme</v-card-text>
                            <v-card class="insider_card" color="#D0B9FF">
                                <v-card-text>
                                    <i class="fas fa-user-circle"></i>
                                </v-card-text>
                            </v-card>
                        </v-col>

                         <v-col cols="6">
                            <v-checkbox></v-checkbox>
                            <v-card-text>Dark Theme</v-card-text>
                            <v-card class="insider_card" color="#01819B">
                                <v-card-text>
                                    <i class="fas fa-user-circle"></i>
                                </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>
                    <v-divider/>
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
</template>

<script>
export default {

}
</script>

<style lang="scss">
.insider_card{
    width: 70%;
    margin-left: 35px;
    height: 400px;
    .v-card__text {
        position: absolute;
        top: 35%;
        left: 50%;
        width: auto !important;
        transform: translate(-50%, -50%);
        i {
            font-size: 40px;
        }
    }
}
.main_card{
    margin: 40px 0 0 30px;
}

</style>