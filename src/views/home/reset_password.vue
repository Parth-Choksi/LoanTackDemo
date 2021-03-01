<template>
    <v-main>
        <v-container style="height:100%">
            <div class="right_sec">
                <div class="img_div"></div>
            </div>
            <div class="left_sec">
             <v-form ref="resetpasswordform" v-model="form.resetpassword" lazy-validation>
                 <div class="form_heading_text">Forgot Password</div>
                 <v-row>
                    <v-col cols="12" sm="4">
                        <v-text-field
                            dense
                            outlined
                            type="password"
                            label="New Password"
                            placeholder="Enter Here"
                            v-model="new_password"
                            :rules="[v => !!v || 'Password is Required']"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="4">
                        <v-text-field
                            dense
                            outlined
                            type="password"
                            label="Confirm Password"
                            placeholder="Enter Here"
                            v-model="cfm_password"
                            :rules="[v => !!v || 'Confirm Password is Required']"
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="4">
                        <v-btn class="form_btn" 
                        color="success"
                        :disabled="!new_password || !cfm_password"
                        @click="saveNewpass_form()"
                        >SAVE</v-btn>
                    </v-col>
                </v-row>
             </v-form>
            </div>
        </v-container>
    </v-main>
</template>

<script>
export default {
    data()
    {
        return{
            form:{
                resetpassword,
            },
            new_password: '',
            cfm_password: '',
        }
    },
}
</script>

<style lang="scss">
@import "@/scss/variable.scss";
</style>