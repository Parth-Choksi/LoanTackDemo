<template>
    <v-card class="common_card">
        <v-card-title>Recent Activities</v-card-title>
        <v-divider class="divider_class"/>
        <v-card-text>
        <v-data-table :headers="headers" :items="items" hide-default-footer height="250px">
        </v-data-table>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    data()
    {
        return{
            headers:[
                {text: 'Name',align: 'start',value: 'name'},
                {text: 'LoanType',value: 'loantype'},
                {text: 'Date',value: 'date'},
            ],

            items : [
                {name : 'Jack Smith' , loantype : 'Purchase FHA -30 years' , date : "Apr 9,'20-3:14 pm"},
                {name : 'Noah Martin' , loantype : 'Purchase FHA -15 years' , date : "Apr 24,'20-2:11 pm"},
                {name : 'Lucas Watson' , loantype : 'Purchase FHA -10 years' , date : "Jan 10,'19-1:30 pm"},
                {name : 'Oliver Ross' , loantype : 'Purchase FHA -20 years' , date : "Jun 19,'20-3:50 pm"},
                {name : 'Ethan Fortin' , loantype : 'Purchase FHA -35 years' , date : "Mar 4,'21-6:14 pm"},
                {name : 'Joy Smith' , loantype : 'Purchase FHA -5 years' , date : "Dec 11,'20-5:10 pm"},
                {name : 'Adom Jack' , loantype : 'Purchase FHA -9 years' , date : "May 1,'20-3:10 pm"},
                {name : 'Jeff Roy ' , loantype : 'Purchase FHA -12 years' , date : "Feb 26,'20-4:25 pm"},
            ]
        };
    },
}
</script>

<style>

</style>