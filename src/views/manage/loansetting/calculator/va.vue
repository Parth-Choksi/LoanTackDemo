<template>
    <div class="fha_main">
        <div class="first_card">
        <v-card class="fha_card">
            <v-card-title>Default Values</v-card-title>
            <v-divider></v-divider>
            <v-card-text>
                    <div class="first_sec">
                    <v-row>
                        <v-col cols="12">
                            <label class="textfield_label" for="loan amount">New Loan Amount</label>
                            <v-text-field class="textfield_size" prefix="$" outlined dense></v-text-field>
                        </v-col>
                        <v-col cols="12">
                        <label class="textfield_label" for="min down payment">Min. Down Payment</label>
                        <v-text-field class="textfield_size" suffix="%" outlined dense></v-text-field>
                        </v-col>
                        <v-col cols="12">
                        <label class="textfield_label" for="mortgage insurance">Mortgage Insurance</label>
                        <v-text-field class="textfield_size" suffix="%" outlined dense></v-text-field>
                        </v-col>
                        
                    </v-row>
                    </div>
                    <div class="first_sec">
                    <v-row>
                        <v-col cols="12">
                        <label class="textfield_label" for="min property price">Min. Property Price</label>
                        <v-text-field class="textfield_size" prefix="$" outlined dense></v-text-field>
                        </v-col>
                        <v-col cols="12">
                        <label class="textfield_label" for="property tax">Property Tax</label>
                        <v-text-field class="textfield_size" suffix="%" outlined dense></v-text-field>
                        </v-col>
                        <v-col cols="12">
                        <label class="textfield_label" for="mortgage term">Mortgage Term</label>
                        <v-select placeholder="15 Years" outlined dense append-icon="fas fa-caret-down" :items="item"></v-select>
                        </v-col>
                    </v-row>
                    </div>
                    <div class="first_sec">
                    <v-row>
                        <v-col cols="12">
                        <label class="textfield_label" for="max property price">Max. Property Price</label>
                        <v-text-field prefix="$" outlined dense></v-text-field>
                        </v-col>
                        <v-col cols="12">
                        <label class="textfield_label" for="hazard insurance">Hazard Insurance</label>
                        <v-text-field prefix="$"  outlined dense></v-text-field>
                        </v-col>
                    </v-row>
                    </div>
            </v-card-text>
            <v-divider/>
            <v-card-text>
                    <div class="first_sec">
                    <v-row>
                        <v-col cols="12">
                        <label class="textfield_label" for="min interest rate">Min. Interest Rate</label>
                        <v-text-field class="textfield_size" suffix="%" outlined dense></v-text-field>
                        </v-col>
                        <v-col cols="12">
                        <label class="textfield_label" for="30 year rate">15 Year Interest Rate</label>
                        <v-text-field class="textfield_size" suffix="%" outlined dense></v-text-field>
                        </v-col>
                    </v-row>
                    </div>
                    <div class="first_sec">
                    <v-row>
                        <v-col cols="12">
                        <label class="textfield_label" for="max interest rate">Max. Interest Rate</label>
                        <v-text-field class="textfield_size" prefix="$" outlined dense></v-text-field>
                        </v-col>
                        <v-col cols="12">
                        <label class="textfield_label" for="20 year rate">20 Year Interest Rate</label>
                        <v-text-field class="textfield_size" suffix="%" outlined dense></v-text-field>
                        </v-col>
                    </v-row>
                    </div>
                    <div class="first_sec">
                    <v-row>
                        <v-col cols="12">
                        <label class="textfield_label" for="10 year rate">10 Year Interest Rate</label>
                        <v-text-field suffix="%" outlined dense></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <label class="textfield_label" for="30 year rate">30 Year Interest Rate</label>
                            <v-text-field suffix="%" outlined dense></v-text-field>
                        </v-col>
                    </v-row>
                    </div>
            </v-card-text>
        </v-card>
        </div>

        <div class="second_card">
        <v-card class="fha_card">
            <v-card-title>VA Funding Fee | Regular Military</v-card-title>
            <v-divider/>
            <v-card-text class="text_card_sec">
                <div class="second_sec">
                <v-row>
                    <v-col cols="8">
                        <label for="1st mortgage 0%">1st Mortgage with 0% Down</label>
                        <v-text-field class="textfield_size" suffix="%" outlined dense></v-text-field>
                    </v-col>
                    <v-col cols="8">
                        <label for="1st mortgage 5%">1st Mortgage with 5% Down</label>
                        <v-text-field class="textfield_size" suffix="%" outlined dense></v-text-field>
                    </v-col>
                    <v-col cols="8">
                        <label for="1st mortgage 10%">1st Mortgage with 10% Down</label>
                        <v-text-field class="textfield_size" suffix="%" outlined dense></v-text-field>
                    </v-col>
                </v-row>
                </div>
                <div class="second_sec">
                <v-row>
                    <v-col cols="8">
                        <label for="sub 0% mortgage">Subsequent Mortgage with 0% Down</label>
                        <v-text-field class="textfield_size" suffix="%" outlined dense></v-text-field>
                    </v-col>
                    <v-col cols="8">
                        <label for="sub 5% mortgage">Subsequent Mortgage with 5% Down</label>
                        <v-text-field class="textfield_size" suffix="%" outlined dense></v-text-field>
                    </v-col>
                    <v-col cols="8">
                        <label for="sub 10% mortgage">Subsequent Mortgage with 10% Down</label>
                        <v-text-field class="textfield_size" suffix="%" outlined dense></v-text-field>
                    </v-col>
                </v-row>
                </div>
                </v-card-text>
            </v-card>
        </div>
        <div class="second_card">
            <v-card class="fha_card">
            <v-card-title>VA Funding Fee | Reserves/National Guard </v-card-title>
            <v-divider/>
            <v-card-text class="text_card_sec">
                <div class="second_sec">
                <v-row>
                    <v-col cols="8">
                        <label for="1st mortgage 0%">1st Mortgage with 0% Down</label>
                        <v-text-field class="textfield_size" suffix="%" outlined dense></v-text-field>
                    </v-col>
                    <v-col cols="8">
                        <label for="1st mortgage 5%">1st Mortgage with 5% Down</label>
                        <v-text-field class="textfield_size" suffix="%" outlined dense></v-text-field>
                    </v-col>
                    <v-col cols="8">
                        <label for="1st mortgage 10%">1st Mortgage with 10% Down</label>
                        <v-text-field class="textfield_size" suffix="%" outlined dense></v-text-field>
                    </v-col>
                </v-row>
                </div>
                <div class="second_sec">
                <v-row>
                    <v-col cols="8">
                        <label for="sub 0% mortgage">Subsequent Mortgage with 0% Down</label>
                        <v-text-field class="textfield_size" suffix="%" outlined dense></v-text-field>
                    </v-col>
                    <v-col cols="8">
                        <label for="sub 5% mortgage">Subsequent Mortgage with 5% Down</label>
                        <v-text-field class="textfield_size" suffix="%" outlined dense></v-text-field>
                    </v-col>
                    <v-col cols="8">
                        <label for="sub 10% mortgage">Subsequent Mortgage with 10% Down</label>
                        <v-text-field class="textfield_size" suffix="%" outlined dense></v-text-field>
                    </v-col>
                </v-row>
                </div>
                </v-card-text>
                <v-divider/>
                <v-card-text>
                    <v-btn text color="success">RESTORE DEFAULTS</v-btn>
                </v-card-text>
            </v-card>

        </div>
            <div class="btn_div">
                <v-btn class="btn_class" color="success">SAVE</v-btn>
            </div>
            <div class="third_card">
                <v-card class="calc_card">
                    <v-card-title>Calculator Disclaimer</v-card-title>
                    <v-divider/>
                    <div class="p_div">
                        <p class="ptext_div">
                           Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                           Ipsa, suscipit veritatis! Rerum fugit expedita architecto
                           quas vitae inventore id beatae ducimus at aspernatur.
                           Minima necessitatibus officia aut, placeat vel exercitationem.
                        </p>
                    </div>
                    <v-divider/>
                    <v-card-text>
                        <v-btn color="success">SAVE</v-btn>
                    </v-card-text>
                </v-card>
            </div>
    </div>
</template>

<script>
export default {
    data()
    {
        return{
            item: ["2 Years","5 Years","7 Years","9 Years","10 Years","12 Years","15 Years","20 Years","25 Years","30 Years"],
        }
    }
}
</script>

<style lang="scss">
.text_card_sec{
    .row{
        margin: 0 !important;
    }
}
.second_sec{
    width: 50%;
    float: left 
}

</style>