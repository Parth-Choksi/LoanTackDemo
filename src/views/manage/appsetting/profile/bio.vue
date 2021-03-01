<template>
    <div class="profile_div_main">
        <div class="profile_left_sec">
            <v-row>
                <v-col cols="12">
                    <v-card class="card_display">
                        <v-card-title>Your Photo</v-card-title>
                        <v-divider/>
                        <v-card-text>
                            <h3>Space for Image</h3>
                        </v-card-text>
                        <v-divider/>
                        <v-card-text>
                            <v-btn class="btn_class" color="success">UPLOAD PHOTO</v-btn>
                            <v-btn class="btn_class" outlined color="success">REMOVE PHOTO</v-btn>
                        </v-card-text>
                    </v-card>
                </v-col>

                <v-col cols="12">
                    <v-card class="card_display">
                        <v-card-title>Company Logo</v-card-title>
                        <v-divider/>
                        <v-card-text>
                            <h3>Space for Image</h3>
                        </v-card-text>
                        <v-divider/>
                        <v-card-text>
                            <v-btn class="btn_class" color="success">UPLOAD PHOTO</v-btn>
                            <v-btn class="btn_class" outlined color="success">REMOVE PHOTO</v-btn>
                        </v-card-text>
                    </v-card>
                </v-col>

                <v-col cols="12">
                    <v-card class="card_display">
                        <v-card-title>Welcome Screen</v-card-title>
                        <v-divider/>
                        <v-card-text>
                            <h3>Space For Quill tag or Create by Own & Remove BTN</h3>
                        </v-card-text>
                        <v-divider/>
                        <v-card-text>
                            <v-btn class="btn_class" color="success">UPLOAD PHOTO</v-btn>
                            <v-btn class="btn_class" outlined color="success">REMOVE PHOTO</v-btn>
                        </v-card-text>
                    </v-card>
                </v-col>

                 <v-col cols="12">
                    <v-card class="card_display">
                        <v-card-title>Bio</v-card-title>
                        <v-divider/>
                        <v-card-text>
                            <h3>Space For Quill tag or Create by Own & Remove BTN</h3>
                        </v-card-text>
                        <v-divider/>
                        <v-card-text>
                            <v-btn class="btn_class" color="success">UPLOAD PHOTO</v-btn>
                            <v-btn class="btn_class" outlined color="success">REMOVE PHOTO</v-btn>
                        </v-card-text>
                    </v-card>
                </v-col>

                <v-col cols="12">
                    <v-card class="card_display">
                        <v-card-title>
                            Use my photo for Android launch icon
                            <v-switch inset color="success"></v-switch>
                        </v-card-title>
                        
                        <v-divider/>
                        <v-card-text>
                            <v-btn class="btn_class" outlined color="success">PREVIEW</v-btn>
                            <v-btn class="btn_class" color="success">SAVE</v-btn>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </div>
        <div class="profile_right_sec">
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.profile_left_sec{
    float: left;
    width: 50%;
    height: auto;
    left: 0;
}
.profile_right_sec{
    float: right;
    width: 50%;
    height: 700px;
    background-image: url("E:\\LoanTack1\\phone.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.card_display{
    margin: 20px 0 20px 20px;
    width: 80%;
}

.btn_class{
    margin: 0 20px 0 20px;
}
</style>