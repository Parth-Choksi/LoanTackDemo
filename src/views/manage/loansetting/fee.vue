<template>
    <div class="fee_main">
        <v-card class="fee_card">
                <div class="form_sec">
                    <v-row>
                        <v-col cols="8">
                        <label for="administrative">Administrative</label>
                        <v-text-field placeholder="Enter Here" outlined dense></v-text-field>
                    </v-col>
                    <v-col cols="8">
                        <label for="application">Application</label>
                        <v-text-field placeholder="Enter Here" outlined dense></v-text-field>
                    </v-col>
                    <v-col cols="8">
                        <label for="appraisal">Appraisal</label>
                        <v-text-field placeholder="Enter Here" outlined dense></v-text-field>
                    </v-col>
                     <v-col cols="8">
                        <label for="closing">Closing</label>
                        <v-text-field placeholder="Enter Here" outlined dense></v-text-field>
                    </v-col>
                    <v-col cols="8">
                        <label for="commitment">Commitment</label>
                        <v-text-field placeholder="Enter Here" outlined dense></v-text-field>
                    </v-col>
                    <v-col cols="8">
                        <label for="courier">Courier</label>
                        <v-text-field placeholder="Enter Here" outlined dense></v-text-field>
                    </v-col>
                    <v-col cols="8">
                        <label for="credit report">Credit Report</label>
                        <v-text-field placeholder="Enter Here" outlined dense></v-text-field>
                    </v-col>
                    <v-col cols="8">
                        <label for="document">Document Prep</label>
                        <v-text-field placeholder="Enter Here" outlined dense></v-text-field>
                    </v-col>
                    <v-col cols="8">
                        <label for="flood">Flood</label>
                        <v-text-field placeholder="Enter Here" outlined dense></v-text-field>
                    </v-col>
                    </v-row>
                </div>
               
                <div class="form_sec">
                    <v-row>
                        <v-col cols="8">
                        <label for="inspection">Inspection</label>
                        <v-text-field placeholder="Enter Here" outlined dense></v-text-field>
                    </v-col>
                    <v-col cols="8">
                        <label for="notary">Notary</label>
                        <v-text-field placeholder="Enter Here" outlined dense></v-text-field>
                    </v-col>
                    <v-col cols="8">
                        <label for="processing">Processing</label>
                        <v-text-field placeholder="Enter Here" outlined dense></v-text-field>
                    </v-col>
                     <v-col cols="8">
                        <label for="recording">Recording</label>
                        <v-text-field placeholder="Enter Here" outlined dense></v-text-field>
                    </v-col>
                    <v-col cols="8">
                        <label for="survey">Survey</label>
                        <v-text-field placeholder="Enter Here" outlined dense></v-text-field>
                    </v-col>
                     <v-col cols="8">
                        <label for="tax service">Tax Service</label>
                        <v-text-field placeholder="Enter Here" outlined dense></v-text-field>
                    </v-col>
                    <v-col cols="8">
                        <label for="underwriting">Underwriting</label>
                        <v-text-field placeholder="Enter Here" outlined dense></v-text-field>
                    </v-col>
                    <v-col cols="8">
                        <label for="wire">Wire Transfer</label>
                        <v-text-field placeholder="Enter Here" outlined dense></v-text-field>
                    </v-col>
                    <v-col cols="8">
                        <label for="other">Other</label>
                        <v-text-field placeholder="Enter Here" outlined dense></v-text-field>
                    </v-col>
                    </v-row>
                </div>
                <v-divider/>
                <v-card-text>
                    <v-btn color="success">SAVE</v-btn>
                </v-card-text>
        </v-card>
        <div class="add_fee">
            <v-card>
                <v-card-title>Add New</v-card-title>
                <v-divider/>
                <v-card-text>
                    <div class="form_sec">
                        <v-row>
                            <v-col cols="8">
                            <label for="fee name">Fee Name</label>
                            <v-text-field placeholder="Enter Here" outlined dense></v-text-field>
                        </v-col>
                        </v-row>
                    </div>
                    <div class="form_sec">
                        <v-row>
                            <v-col cols="8">
                            <label for="fee amount">Fee Amount</label>
                            <v-text-field placeholder="Enter Here" outlined dense></v-text-field>
                        </v-col>
                        </v-row>
                    </div>
                
                </v-card-text>
                <v-divider/>
                <v-card-text>
                    <v-btn outlined color="success">ADD</v-btn>
                </v-card-text>
            </v-card>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.form_sec{
    width: 50%;
    float: left;
}
.add_fee{
    width: 100%;
    float: left;
}
</style>