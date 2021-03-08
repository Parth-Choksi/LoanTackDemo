<template>
    <v-main>
        <v-container style="height:100%">
            <div class="right_sec">
                <div class="img_div"></div>
            </div>
            <div class="left_sec">
             <v-form ref="forgotpasswordform" v-model="form.forgotpassword" lazy-validation>
                <div class="form_heading_text">Verification Code</div>
                <v-row>
                    <v-col cols="2">
                        <v-text-field
                        dense
                        outlined
                        placeholder="0"
                        ></v-text-field>
                    </v-col>-
                    <v-col cols="2">
                        <v-text-field
                        dense
                        outlined
                        placeholder="0"
                        ></v-text-field>
                    </v-col>-
                    <v-col cols="2">
                        <v-text-field
                        dense
                        outlined
                        placeholder="0"
                        ></v-text-field>
                    </v-col>-
                    <v-col cols="2">
                        <v-text-field
                        dense
                        outlined
                        placeholder="0"
                        ></v-text-field>
                    </v-col>-
                    <v-col cols="2">
                        <v-text-field
                        dense
                        outlined
                        placeholder="0"
                        ></v-text-field>
                    </v-col>-
                    <v-col cols="2">
                        <v-text-field
                        dense
                        outlined
                        placeholder="0"
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-btn class="btn_class" color="success">PROCEED</v-btn>
                <v-btn class="btn_class" text color="success">RESEND CODE</v-btn>
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