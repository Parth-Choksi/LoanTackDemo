<template>
    <div class="profile_div_main">
        <div class="form_sec">
            <v-row>
                <v-col cols="12">
                    <v-card class="common_card">
                        <v-card-title>Your Photo</v-card-title>
                        <v-divider class="divider_class"/>
                        <v-card-text>
                           <v-img
                                lazy-src="https://picsum.photos/id/11/10/6"
                                height="104"
                                width="110"
                                src="https://picsum.photos/id/11/500/300"
                                ></v-img>                        
                        </v-card-text>
                        <v-divider/>
                        <v-card-text>
                            <v-btn class="btn_class" color="success">UPLOAD PHOTO</v-btn>
                            <v-btn class="btn_class" outlined color="success">REMOVE PHOTO</v-btn>
                        </v-card-text>
                    </v-card>
                </v-col>

                <v-col cols="12">
                    <v-card class="common_card">
                        <v-card-title>Company Logo</v-card-title>
                        <v-divider class="divider_class"/>
                        <v-card-text>
                            <v-img
                                lazy-src="https://picsum.photos/id/11/10/6"
                                height="104"
                                width="110"
                                src="https://picsum.photos/id/11/500/300"
                                ></v-img>
                        </v-card-text>
                        <v-divider/>
                        <v-card-text>
                            <v-btn class="btn_class" color="success">UPLOAD PHOTO</v-btn>
                            <v-btn class="btn_class" outlined color="success">REMOVE PHOTO</v-btn>
                        </v-card-text>
                    </v-card>
                </v-col>

                <v-col cols="12">
                    <v-card class="common_card">
                        <v-card-title>Welcome Screen</v-card-title>
                        <v-divider class="divider_class"/>
                        <v-card-text>
                            <Quill/>
                        </v-card-text>
                        <v-divider/>
                        <v-card-text>
                            <v-btn class="btn_class" color="success">UPLOAD PHOTO</v-btn>
                            <v-btn class="btn_class" outlined color="success">REMOVE PHOTO</v-btn>
                        </v-card-text>
                    </v-card>
                </v-col>

                 <v-col cols="12">
                    <v-card class="common_card">
                        <v-card-title>Bio</v-card-title>
                        <v-divider class="divider_class"/>
                        <v-card-text>
                            <Quill/>
                        </v-card-text>
                        <v-divider/>
                        <v-card-text>
                            <v-btn class="btn_class" color="success">UPLOAD PHOTO</v-btn>
                            <v-btn class="btn_class" outlined color="success">REMOVE PHOTO</v-btn>
                        </v-card-text>
                    </v-card>
                </v-col>

                <v-col cols="12">
                    <v-card class="common_card">
                        <v-card-title>
                            Use my photo for Android launch icon
                            <v-switch inset color="success"></v-switch>
                        </v-card-title>
                        
                        <v-divider class="divider_class"/>
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
// import QuillEditor from '/LoanTack1/loantack-project/src/views/quill.vue'
import Quill from '/LoanTack1/loantack-project/src/views/manage/support/quill.vue'
export default {
    components:{
        Quill,
    }
}
</script>

<style lang="scss">
.profile_right_sec{
    float: right;
    width: 50%;
    height: 700px;
    background-image: url("E:\\LoanTack1\\phone.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.btn_class{
    margin: 0 20px 0 20px;
}
</style>