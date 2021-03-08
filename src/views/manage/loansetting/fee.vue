<template>
    <div class="fee_main">
        <h1>Fees</h1>
        <v-divider class="divider_class"/>
        <v-card class="max_card">

                <div class="form_sec">
                    <v-row>
                        <v-col cols="9">
                        <label class="textfield_label" for="administrative">Administrative</label>
                        <v-text-field placeholder="Enter Here" outlined dense></v-text-field>
                    </v-col>
                    <v-col cols="9">
                        <label class="textfield_label" for="application">Application</label>
                        <v-text-field placeholder="Enter Here" outlined dense></v-text-field>
                    </v-col>
                    <v-col cols="9">
                        <label class="textfield_label" for="appraisal">Appraisal</label>
                        <v-text-field placeholder="Enter Here" outlined dense></v-text-field>
                    </v-col>
                     <v-col cols="9">
                        <label class="textfield_label" for="closing">Closing</label>
                        <v-text-field placeholder="Enter Here" outlined dense></v-text-field>
                    </v-col>
                    <v-col cols="9">
                        <label class="textfield_label" for="commitment">Commitment</label>
                        <v-text-field placeholder="Enter Here" outlined dense></v-text-field>
                    </v-col>
                    <v-col cols="9">
                        <label class="textfield_label" for="courier">Courier</label>
                        <v-text-field placeholder="Enter Here" outlined dense></v-text-field>
                    </v-col>
                    <v-col cols="9">
                        <label class="textfield_label" for="credit report">Credit Report</label>
                        <v-text-field placeholder="Enter Here" outlined dense></v-text-field>
                    </v-col>
                    <v-col cols="9">
                        <label class="textfield_label" for="document">Document Prep</label>
                        <v-text-field placeholder="Enter Here" outlined dense></v-text-field>
                    </v-col>
                    <v-col cols="9">
                        <label class="textfield_label" for="flood">Flood</label>
                        <v-text-field placeholder="Enter Here" outlined dense></v-text-field>
                    </v-col>
                    </v-row>
                </div>
               
                <div class="form_sec">
                    <v-row>
                        <v-col cols="9">
                        <label class="textfield_label" for="inspection">Inspection</label>
                        <v-text-field placeholder="Enter Here" outlined dense></v-text-field>
                    </v-col>
                    <v-col cols="9">
                        <label class="textfield_label" for="notary">Notary</label>
                        <v-text-field placeholder="Enter Here" outlined dense></v-text-field>
                    </v-col>
                    <v-col cols="9">
                        <label class="textfield_label" for="processing">Processing</label>
                        <v-text-field placeholder="Enter Here" outlined dense></v-text-field>
                    </v-col>
                     <v-col cols="9">
                        <label class="textfield_label" for="recording">Recording</label>
                        <v-text-field placeholder="Enter Here" outlined dense></v-text-field>
                    </v-col>
                    <v-col cols="9">
                        <label class="textfield_label" for="survey">Survey</label>
                        <v-text-field placeholder="Enter Here" outlined dense></v-text-field>
                    </v-col>
                     <v-col cols="9">
                        <label class="textfield_label" for="tax service">Tax Service</label>
                        <v-text-field placeholder="Enter Here" outlined dense></v-text-field>
                    </v-col>
                    <v-col cols="9">
                        <label class="textfield_label" for="underwriting">Underwriting</label>
                        <v-text-field placeholder="Enter Here" outlined dense></v-text-field>
                    </v-col>
                    <v-col cols="9">
                        <label class="textfield_label" for="wire">Wire Transfer</label>
                        <v-text-field placeholder="Enter Here" outlined dense></v-text-field>
                    </v-col>
                    <v-col cols="9">
                        <label class="textfield_label" for="other">Other</label>
                        <v-text-field placeholder="Enter Here" outlined dense></v-text-field>
                    </v-col>
                    </v-row>
                </div>
                <v-divider class="divider_class"/>
                <v-card-text>
                    <v-btn color="success">SAVE</v-btn>
                </v-card-text>
        </v-card>
        <div class="add_fee">
            <v-card class="max_card">
                <v-card-title>Add New</v-card-title>
                <v-divider class="divider_class"/>
                <v-card-text>
                    <div class="form_sec">
                        <v-row>
                            <v-col cols="11">
                            <label class="textfield_label" for="fee name">Fee Name</label>
                            <v-text-field placeholder="Enter Here" outlined dense></v-text-field>
                        </v-col>
                        </v-row>
                    </div>
                    <div class="form_sec">
                        <v-row>
                            <v-col cols="11">
                            <label class="textfield_label" for="fee amount">Fee Amount</label>
                            <v-text-field placeholder="Enter Here" outlined dense></v-text-field>
                        </v-col>
                        </v-row>
                    </div>
                
                </v-card-text>
                <v-divider class="divider_class"/>
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