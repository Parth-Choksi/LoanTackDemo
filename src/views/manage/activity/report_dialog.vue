<template>
    <v-dialog v-model="dialog" width="1200px">
        <v-card>
            <v-card-title>GENERATE REPORT
                <v-spacer/>
                <span @click="returnCalculation()" class="cursor_x">X</span>
            </v-card-title>
            <v-divider/>
            <v-form>
                <v-card-text>
                    <v-row>
                        <v-col cols="6">
                            Borrower Name
                            <v-select  append-icon="fas fa-caret-down" outlined placeholder="select"></v-select>
                        </v-col>
                        <v-col cols="6">
                            Loan Type
                            <v-select append-icon="fas fa-caret-down" outlined placeholder="select"></v-select>
                        </v-col>
                    </v-row>
                </v-card-text>

                <v-card-text>
                    These details will be present in the generated report :
                    <i class="fas fa-caret-down" @click="activated = true"></i>
                    <v-row>
                        <v-col cols="6">
                            <v-list v-model="activated">
                                <v-list-item>Loan Type</v-list-item>
                                <v-list-item>Calculate Type</v-list-item>
                                <v-list-item>Property Value</v-list-item>
                                <v-list-item>Down Payment</v-list-item>
                                <v-list-item>Loan Amount</v-list-item>
                                <v-list-item>Interest Rate</v-list-item>
                                <v-list-item>Mortage Payment</v-list-item>
                            </v-list>
                        </v-col>
                        <v-col cols="6">
                                <v-list-item>Term</v-list-item>
                                <v-list-item>FICO</v-list-item>
                                <v-list-item>Principal & Interest</v-list-item>
                                <v-list-item>Annual Property Tax</v-list-item>
                                <v-list-item>Annual Hazard Insurance</v-list-item>
                                <v-list-item>Annual Tax Rate</v-list-item>
                                <v-list-item>Mortage Insurance</v-list-item>
                        </v-col>
                    </v-row>
                    <v-divider/>
                    <v-btn class="gnrt_btn" color="success">GENERATE</v-btn>
                </v-card-text>

            </v-form>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    data()
    {
        return{
            dialog : true,
            activated : false
        }
    },
    methods:
    {
        returnCalculation()
        {
            this.$router.push('calculation')
        }
    }
}
</script>

<style lang="scss">
.cursor_x{
    cursor: pointer;
}
.gnrt_btn{
    margin: 12px 0 0 30px;
}
</style>