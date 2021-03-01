<template>
    <v-main>
        <v-container style="height:100%">
            <div class="right_sec">
                <div class="img_div"></div>
            </div>
            <div class="left_sec">
             <v-form ref="forgotpasswordform" v-model="form.forgotpassword" lazy-validation>
                <div class="form_heading_text">Forgot Password</div>
                <v-row>
                    <v-col cols="8">
                        <v-text-field
                        dense
                        outlined
                        type="email"
                        label="Email Address"
                        id="email_id"
                        placeholder="abc@xyz.com"
                        v-model="email"
                        :rules="[v => !!v || 'Email is Required']"
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="4">
                        <v-btn class="form_btn"
                        color="success"
                        :disabled="!email"
                        @click="forgot_form()"
                        >PROCEED</v-btn>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="4">
                        <v-btn class="form_btn"
                        @click="forgot_cancel()"
                        >CANCEL</v-btn>
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
            form :{
                forgotpassword: false,
            },
            email: '',
        }
    },
    methods:
    {
        forgot_cancel()
        {
            this.$router.push("/");
        }
    }
}
</script>

<style lang="scss">
@import "@/scss/variable.scss";
</style>