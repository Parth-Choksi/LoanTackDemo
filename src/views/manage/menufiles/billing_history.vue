<template>
    <div class="billing_main">
        <div class="billing_header">
            <h1>Billing History</h1>
        </div>
        <v-divider class="divider_class"/>
        <div class="billing_middle">
            <v-card class="billing_card">
                <v-data-table hide-default-footer :headers="headers" :items="items">
                </v-data-table>
            </v-card>
        </div>
    </div>
</template>

<script>
export default {
    data()
    {
        return{
            headers:[
                {text:"TRANSACTION ID",align: "start",value:"transaction"},
                {text:"SUBSCRIPTION PLAN",value:"subscription"},
                {text:"PAYMENT METHOD",value:"payment"},
                {text:"RECURRING TERM",value:"recurring"},
                {text:"AMOUNT",value:"amount"},
                {text:"STATUS",value:"status"},
                {text:"DATE",value:"date"},
            ],
            items:[
                {transaction:'23456',subscription:'Monthly Subscription',payment:'Stripe',recurring:'Monthly',amount:'$150',status:'Success',date:"Apr 9,'20-3:14pm"},
                {transaction:'15464',subscription:'Annual Subscription',payment:'Stripe',recurring:'Yearly',amount:'$150',status:'Success',date:"Apr 4,'20-8:22pm"},
                {transaction:'12398',subscription:'Annual Subscription',payment:'Stripe',recurring:'Yearly',amount:'$150',status:'Success',date:"Mar 22,'20-4:10pm"},
                {transaction:'10398',subscription:'Annual Subscription',payment:'Stripe',recurring:'Yearly',amount:'$150',status:'Success',date:"Apr 9,'20-3:14pm"},
            ]
        }
    }
}
</script>

<style lang="scss">
.billing_middle{
    float: left;
    width: 100%;
    .billing_card{
        float: left;
        width: 100%;
        margin: 20px 20px 20px 20px;
        thead tr{
            background-color: lightgray;
        }
    }
}
</style>