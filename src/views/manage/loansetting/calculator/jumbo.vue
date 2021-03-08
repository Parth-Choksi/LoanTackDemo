<template>
    <div class="fha_main">
        <div class="first_card">
        <v-card class="max_card">
            <v-card-title>Default Values</v-card-title>
            <v-divider class="divider_class"/>
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
                        <label class="textfield_label" for="mortgage term">Mortgage Term</label>
                        <v-select placeholder="15 Years" outlined dense append-icon="fas fa-caret-down" :items="item"></v-select>
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
            <v-divider class="divider_class"/>
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
        <v-card class="max_card">
            <v-card-title>Loan Factors</v-card-title>
            <v-divider class="divider_class"/>
            <v-card-text>
                <v-row style="background-color:lightgray">
                    <v-col cols="3"></v-col>
                    <v-col cols="1">YEARS</v-col>
                    <v-col cols="1">LTV MIN</v-col>
                    <v-col cols="1">LTV MAX</v-col>
                    <v-col cols="1">FICO MIN</v-col>
                    <v-col cols="1">FICO MAX</v-col>
                    <v-col cols="1">MI</v-col>
                    <v-col cols="3"></v-col>
                </v-row>
            </v-card-text>
            <v-card-text>
                <v-row>
                    <v-col cols="3"></v-col>
                    <v-col cols="1">
                        <v-select append-icon="fas fa-caret-down" class="textfield_size" :items="item" outlined dense></v-select>
                    </v-col>
                    <v-col cols="1">
                        <v-text-field class="textfield_size" suffix="%" outlined dense></v-text-field>
                    </v-col>
                    <v-col cols="1">
                        <v-text-field class="textfield_size" suffix="%" outlined dense></v-text-field>
                    </v-col>
                    <v-col cols="1">
                        <v-text-field outlined dense></v-text-field>
                    </v-col>
                    <v-col cols="1">
                        <v-text-field outlined dense ></v-text-field>
                    </v-col>
                    <v-col cols="1">
                        <v-text-field class="textfield_size" suffix="%" outlined dense></v-text-field>
                    </v-col>
                    <v-col cols="3">
                        <i class="fas fa-trash-alt"></i>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="3"></v-col>
                    <v-col cols="1">
                        <v-select append-icon="fas fa-caret-down" class="textfield_size" :items="item" outlined dense></v-select>
                    </v-col>
                    <v-col cols="1">
                        <v-text-field class="textfield_size" suffix="%" outlined dense></v-text-field>
                    </v-col>
                    <v-col cols="1">
                        <v-text-field class="textfield_size" suffix="%" outlined dense></v-text-field>
                    </v-col>
                    <v-col cols="1">
                        <v-text-field outlined dense></v-text-field>
                    </v-col>
                    <v-col cols="1">
                        <v-text-field outlined dense ></v-text-field>
                    </v-col>
                    <v-col cols="1">
                        <v-text-field class="textfield_size" suffix="%" outlined dense></v-text-field>
                    </v-col>
                    <v-col cols="3">
                        <i class="fas fa-trash-alt"></i>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="3"></v-col>
                    <v-col cols="1">
                        <v-select append-icon="fas fa-caret-down" class="textfield_size" :items="item" outlined dense></v-select>
                    </v-col>
                    <v-col cols="1">
                        <v-text-field class="textfield_size" suffix="%" outlined dense></v-text-field>
                    </v-col>
                    <v-col cols="1">
                        <v-text-field class="textfield_size" suffix="%" outlined dense></v-text-field>
                    </v-col>
                    <v-col cols="1">
                        <v-text-field outlined dense></v-text-field>
                    </v-col>
                    <v-col cols="1">
                        <v-text-field outlined dense ></v-text-field>
                    </v-col>
                    <v-col cols="1">
                        <v-text-field class="textfield_size" suffix="%" outlined dense></v-text-field>
                    </v-col>
                    <v-col cols="3">
                        <i class="fas fa-trash-alt"></i>
                    </v-col>
                </v-row>

                </v-card-text>
                <v-divider class="divider_class"/>
                <v-card-text>
                    <v-btn class="btn_class" outlined color="success">ADD FACTOR ROW</v-btn>
                    <v-btn class="btn_class" text color="green">RESTORE DEFAULT</v-btn>
                </v-card-text>
        </v-card>
        </div>
            <div class="btn_div">
                <v-btn class="btn_class" color="success">SAVE</v-btn>
            </div>
            <div class="third_card">
                <v-card class="max_card">
                    <v-card-title>Calculator Disclaimer</v-card-title>
                    <v-divider class="divider_class"/>
                    <div class="p_div">
                        <p class="ptext_div">
                           Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                           Ipsa, suscipit veritatis! Rerum fugit expedita architecto
                           quas vitae inventore id beatae ducimus at aspernatur.
                           Minima necessitatibus officia aut, placeat vel exercitationem.
                        </p>
                    </div>
                    <v-divider class="divider_class"/>
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

<style>

</style>