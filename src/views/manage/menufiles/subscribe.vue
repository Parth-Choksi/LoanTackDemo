<template>
    <div class="subscribe_main">
        <div class="subscribe_header">
            <h1>
            <v-breadcrumbs :items="items">
                <template v-slot:divider>
                    <v-icon>mdi-chevron-right</v-icon>
                </template>
            </v-breadcrumbs>
            </h1>
        </div>
        <v-divider class="divider_class"/>
        <div class="subscribe_middle">
            <v-card class="subscribe_card">
                <v-card-text>
                    <v-row>
                        <v-col cols="5">
                            <label for="select plan">Select a Plan</label>
                            <v-select placeholder="gold" append-icon="fas fa-caret-down" :items="plans" outlined dense></v-select>
                        </v-col>
                        <v-col cols="5">
                            <label for="promo code">Promo Code</label>
                            <v-text-field placeholder="Enter Here" outlined dense></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="5">
                            <label for="subscription fee">Subscription Fee</label>
                            <v-text-field prefix="$" placeholder="50" outlined dense></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="11">
                            <label for="plan">Plan Details</label>
                            <v-textarea no-resize rows="4" outlined dense
                             placeholder="1. Felis,massa quam ultrices turpis facilisi vestibulum id.
    2.Tempora eveniet officiis rerum laudantium aut ea nam, alias deserunt facere minus non, vero omnis amet sunt?
    3.Repudiandae quaerat officia deserunt odio. "
                             ></v-textarea>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="5">
                            <label for="name on card">Name on Card</label>
                            <v-text-field outlined dense placeholder="Enter Here"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="5">
                            <label for="card number">Card Number</label>
                            <v-text-field outlined dense placeholder="Enter Here"></v-text-field>
                        </v-col>
                        <v-col cols="5">
                            <label for="expiry Date">Expiry Date</label>
                            <v-select class="select_sec" placeholder="MM" append-icon="fas fa-caret-down" :items="month" outlined dense></v-select>
                            <v-select class="select_sec" placeholder="YY" append-icon="fas fa-caret-down" :items="year" outlined dense></v-select>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="11">
                            <label for="bill address">Billing Address</label>
                            <v-text-field outlined dense
                             placeholder="Enter Here"
                             ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="5">
                            <label for="city">City</label>
                            <v-text-field outlined dense placeholder="Enter Here"></v-text-field>
                        </v-col>
                        <v-col cols="5">
                            <label for="state">State</label>
                            <v-select append-icon="fas fa-caret-down" :items="states" outlined dense placeholder="Select"></v-select>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="5">
                            <label for="zip code">Zip Code</label>
                            <v-text-field outlined dense placeholder="Enter Here"></v-text-field>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-divider class="divider_class"/>
                <v-card-text>
                    <v-btn class="btn_class" outlined color="success">CANCEL</v-btn>
                    <v-btn class="btn_class" color="success">SUBSCRIBE</v-btn>
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
            items:[
                {
                text: 'Email Signature',
                disabled: true,
                href: 'email_signature',
                },
                {
                text: 'Upload Image',
                disabled: false,
                href: '#',
                },
            ],
            plans:["gold","silver","diamond"],
            month:[1,2,3,4,5,6,7,8,9,10,11,12],
            year:[2021,2022,2023,2024,2025,2026,2027,2028,2029,2030],
            states:["Texas","California","Florida","Washington","New Jersey"],
        }
    }
}
</script>

<style lang="scss">
.subscribe_middle{
    float: left;
    width: 100%;
    .subscribe_card{
        float: left;
        width: 100%;
        margin: 20px 20px 20px 20px;
    }
    .select_sec{
        float: left;
        width: 30% !important;
    }
}
</style>