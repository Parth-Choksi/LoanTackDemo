<template>
    <div class="sub_main">
        <div class="sub_header">
            <h1>Subscription</h1>
        </div>
        <v-divider class="divider_class"/>
        <div class="sub_middle">
            <div class="left_sec">
                <v-card class="sub_card">
                    <v-card-title><b>Current Subscription</b></v-card-title>
                    <v-divider class="divider_class"/>
                    <v-card-text>
                        <h4 style="color:lightgray">Subscription plan</h4>
                        <h4>Monthly Subscription</h4><br><br>
                        <h4 style="color:lightgray">Payment Method</h4>
                        <h4>Stripe</h4><br><br>
                        <h4 style="color:lightgray">Recurring Term</h4>
                        <h4>1 Month</h4><br><br>
                        <h4 style="color:lightgray">Amount</h4>
                        <h4>$30</h4><br><br>
                        <h4 style="color:lightgray">Date</h4>
                        <h4>Apr 9,'20,3:14pm</h4><br><br>
                    </v-card-text>
                    <v-divider class="divider_class"/>
                    <v-card-text>
                        <v-btn outlined color="success">CANCEL SUBSCRIPTION</v-btn>
                    </v-card-text>
                </v-card>
            </div>
            <div class="left_sec">
                <v-card class="sub_card">
                    <v-card-title><b>Apply Promo Code</b></v-card-title>
                    <v-divider class="divider_class"/>
                    <v-card-text>
                        <div class="insider_sub_div">
                            <label for="promo code">Promo Code</label>
                            <v-text-field outlined dense placeholder="Enter Here"></v-text-field><br>
                            <p>The discount of the code applied shall be deducted from the next transaction</p>
                        </div>
                    </v-card-text>
                    <v-divider class="divider_class"/>
                    <v-card-text>
                        <v-btn color="success">APPLY</v-btn>
                        <br><br>
                        <v-divider class="divider_class"/>
                        <v-card-text>
                        <v-row>
                            <v-col cols="8">
                                PROMO CODES APPLIED
                            </v-col>
                            <v-col cols="4">
                                STATUS
                            </v-col>
                        </v-row>
                        </v-card-text>
                        <v-divider class="divider_class"/>
                        <v-row>
                            <v-col cols="8">
                                Code10 , Discount: <b>$10</b>
                            </v-col>
                            <v-col cols="4">Active</v-col>
                            <v-col cols="8">
                                Code15 , Discount: <b>$15</b>
                            </v-col>
                            <v-col cols="4">Expired</v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </div>
            <div class="bottom_div">
                <p><b>Interested in having your own App in the App Store with your name/company name?</b></p>
                <v-btn class="bottom_btn" color="success">LEARN MORE</v-btn>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.sub_middle{
    float: left;
    width: 100%;
    .sub_card{
        float: left;
        width: 100%;
        margin: 20px 20px 20px 20px;
        width: 95%;
        h4{
            width: 35%;
            float: left;
        }
        .insider_sub_div{
            width: 85%;
            float: right;
        }
    }
    .bottom_div
    {
        float: left;
        width: 100%;
        background-color: rgb(178, 240, 178);
        height: 165px;
        margin: 20px 20px 20px 20px;

        p{
            text-align: center;
            padding-top: 3%;
        }
        .bottom_btn
        {
            position: absolute;
            left: 45%;
        }
    }
}
</style>