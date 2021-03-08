<template>
    <v-main>
        <v-container style="height:100%">
            <div class="right_sec">
                <div class="img_div"></div>
            </div>
            <!-- <h1>Hello</h1> -->    
            <div class="left_sec">
                <div class="logo">
                    <v-img
                        height="104"
                        width="210"
                        src="src\\assets\\LoanTackk_Logo.png"
                        ></v-img>
                </div>
                <v-form ref="loginform" v-model="form.login" lazy-validation>
                    <div class="form_heading_text">Login</div>
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
                        <v-col cols="8">
                        <v-text-field
                            dense
                            outlined
                            type="password"
                            label="Password"
                            id="password_id"
                            placeholder="Enter Here"
                            v-model="password"
                            :rules="[v => !!v || 'Password is Required']"
                        ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col class="cbox_input" cols="8">
                            <v-checkbox class="cbox" label="Remember me" v-model="cbox1"></v-checkbox>
                            <a class="link" href="#" @click="toForgotpage()">forgot password</a>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="4">
                            <v-btn class="form_btn"
                            color="success"
                            :disabled="!email || !password "
                            @click="login_form()"
                            >Login</v-btn>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="8">
                            Dont have an account
                            <a href="#" @click="toSignupPage()">Sign Up</a>
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
        return {
            form : {
                login : false,
            },
            email : '',
            password : '',
            cbox1 : false,
        }
    },
    methods:
    {
        login_form()
        {
            this.$router.push("/dashboard/index");
        },

        toForgotpage()
        {
            this.$router.push("/forgot_password");
        },

        toSignupPage()
        {
            this.$router.push("/signup");
        }
    }
}
</script>

<style lang="scss">
@import "@/scss/variable.scss";

.form_heading_text
{
    font-weight: $form_text_weight;
    margin: $form_text_mg;
}

.row+.row {
    margin-top: 0px;
}

.form_btn{
    width: $form_btn_size;
    margin: $form_btn_mg;
}

.img_div{
    // float: right;
    width: $img_width;
    height: $img_height;
    //background-color: burlywood;
    background-image: url("E:\\LoanTack1\\loantack-project\\src\\assets\\loantack-splash.png");
    background-repeat: $img_repeat;
    background-size: $img_size;
    background-position: $img_position;
}

.right_sec {
    width: $sec_width;
    position: $sec_position;
    right: $sec_right;
    height:$sec_height;
    float: right;
}

.left_sec {
    width: $sec_width;
    position: $sec_position;
    right: $sec_right;
    height: $sec_height;
    float: left;
}

.cbox_input{
    float: left;
}

.cbox input{
    opacity: 1 !important;
}

.link{
    float: right;
}

.v-input--selection-controls{
    margin-top: 0 !important;
    padding-top: 0 !important;
    float: left;
}

.v-text-field__details{
    margin-bottom: 0 !important;
}
</style>