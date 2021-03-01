<template>
    <v-main>
        <v-container style="height:100%">
            <div class="right_sec">
                <div class="img_div"></div>
            </div>
            <div class="left_sec">
            <v-form ref="signupform" v-model="form.register" lazy-validation>
                <div class="form_heading_text">Sign Up</div>
                <v-row>
                    <v-col cols="5">
                        <v-text-field
                            dense
                            outlined
                            type="name"
                            label="Name"
                            placeholder="Enter Here"
                            v-model="name"
                            :rules="[v => !!v || 'Name is Required']"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="5">
                        <v-text-field
                            dense
                            outlined
                            type="name"
                            label="Company Name"
                            placeholder="Enter Here"
                            v-model="comp_name"
                            :rules="[v => !!v || 'Company Name is Required']"
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="5">
                        <v-text-field
                            dense
                            outlined
                            type="email"
                            label="Email Address"
                            placeholder="abc@xyz.com"
                            v-model="email"
                            :rules="[v => !!v || 'Email is Required']"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="5">
                        <v-text-field
                            dense
                            outlined
                            type=""
                            label="Contact Number"
                            placeholder="012 345 6789"
                            v-model="cnt_number"
                            :rules="[v => !!v || 'Contact Number is Required']"
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="5">
                        <v-text-field
                            dense
                            outlined
                            type="password"
                            label="Password"
                            placeholder="Enter Here"
                            v-model="password"
                            :rules="[v => !!v || 'Password is Required']"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="5">
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
                    <v-col cols="12">
                        <v-checkbox class="cbox" v-model="bApp_cbox">
                            <template v-slot:label>
                                <div>
                                    Do you want to create a Branded App ?
                                </div>
                            </template>
                        </v-checkbox>
                    </v-col>
                    <v-col cols="12">
                        <v-checkbox class="cbox" v-model="condition_cbox">
                            <template v-slot:label>
                                <div>
                                    I agree to the
                                        <a href="#">terms and conditions</a>
                                </div>
                            </template>
                        </v-checkbox>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="">
                        <v-btn class="form_btn"
                        color="success"
                        :disabled="!name || !comp_name || !email || !cnt_number || !password || !cfm_password"
                        @click="register_form()"
                        >SignUp</v-btn>
                    </v-col>
                </v-row>
                <div>
                    Already have an account? 
                    <a href="#" @click="toLogin_form()">Login</a>
                </div>
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
                register : false,
            },
            name : '',
            comp_name : '',
            email : '',
            cnt_number : '',
            password : '',
            cfm_password : '',
            bApp_cbox : false,
            condition_cbox : false,
        }
    },
    methods:
    {
        register_form()
        {
            this.$router.push("/");
        },

        toLogin_form()
        {
            this.$router.push("/");
        }
    }
}
</script>

<style lang="scss">
@import "@/scss/variable.scss";

.row+.row {
    margin-top: 0px !important;
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

.cbox input{
    opacity: 1 !important;
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