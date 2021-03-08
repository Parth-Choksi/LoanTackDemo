<template>
    <div class="account_main">
        <div class="account_header">
            <h1>My Account</h1>
        </div>
        <v-divider class="divider_class"/>
        <div class="account_middle">
            <v-card class="account_card">
                <v-card-text>
                <div class="form_sec">
                    <v-row>
                        <v-col cols="8">
                            <label for="first name">First Name</label>
                            <v-text-field outlined dense placeholder="Enter Here"></v-text-field>
                        </v-col>
                        <v-col cols="8">
                            <label for="email">Email Address</label>
                            <v-text-field outlined dense placeholder="Enter Here"></v-text-field>
                        </v-col>
                        <v-col cols="8">
                            <label for="company name">Company Name</label>
                            <v-select :items="company_name" outlined dense placeholder="Select" append-icon="fas fa-caret-down"></v-select>
                        </v-col>
                    </v-row>
                </div>
                <div class="form_sec">
                    <v-row>
                        <v-col cols="8">
                            <label for="lastt name">Last Name</label>
                            <v-text-field outlined dense placeholder="Enter Here"></v-text-field>
                        </v-col>
                        <v-col cols="8">
                            <label for="contact">Contact Number</label>
                            <v-text-field outlined dense placeholder="Enter Here"></v-text-field>
                        </v-col>
                    </v-row>
                </div>
                </v-card-text>
            </v-card>

             <v-card class="account_card">
                 <v-card-title><b>Upload Photo</b></v-card-title>
                 <v-divider class="divider_class"/>
                <v-card-text>
                <div class="form_sec">
                   <v-card-text>
                       <label for="photo">Photo</label>
                       <v-btn outlined color="success">UPLOAD</v-btn>
                   </v-card-text>
                </div>
                <div class="form_sec">
                    <v-card-text>
                       <label for="logo">Logo</label>
                       <v-btn outlined color="success">UPLOAD</v-btn>
                   </v-card-text>
                </div>
                </v-card-text>
            </v-card>

            <v-card class="account_card">
                <v-card-title><b>Additional Information</b></v-card-title>
                <v-divider class="divider_class"/>
                <v-card-text>
                    <div class="form_sec">
                    <v-row>
                        <v-col cols="8">
                            <label for="title">Title</label>
                            <v-text-field outlined dense placeholder="Enter Here"></v-text-field>
                        </v-col>
                    </v-row>
                    </div>
                    <div class="form_sec">
                    <v-row>
                        <v-col cols="8">
                            <label for="license">License #</label>
                            <v-text-field outlined dense placeholder="Enter Here"></v-text-field>
                        </v-col>
                    </v-row>
                    </div>
                    <div>
                        <v-row>
                            <v-col cols="8">
                                <label for="address">Address</label>
                                <v-textarea no-resize rows="1" outlined dense placeholder="Enter Here"></v-textarea>
                            </v-col>
                        </v-row>
                    </div>
                    <div class="form_sec">
                    <v-row>
                        <v-col cols="8">
                            <label for="city">City</label>
                            <v-text-field outlined dense placeholder="Enter Here"></v-text-field>
                        </v-col>
                    </v-row>
                    </div>
                    <div class="form_sec">
                    <v-row>
                        <v-col cols="8">
                            <label for="state">State</label>
                            <v-select outlined dense placeholder="Select" append-icon="fas fa-caret-down" :items="states"></v-select>
                        </v-col>
                    </v-row>
                    </div>
                    <div class="form_sec">
                    <v-row>
                        <v-col cols="8">
                            <label for="zip code">Zip Code</label>
                            <v-text-field outlined dense placeholder="Enter Here"></v-text-field>
                        </v-col>
                    </v-row>
                    </div>
                </v-card-text>
            </v-card>

            <v-card class="account_card">
                <v-card-text><b>Social Links (Optional)</b></v-card-text>
                <v-divider class="divider_class"/>
                <v-card-text>
                    <div class="form_sec">
                            <v-row>
                                <v-col cols="8">
                                    <label for="website">Website URL</label>
                                    <v-text-field outlined dense placeholder="Enter Here"></v-text-field>
                                </v-col>
                                <v-col cols="8">
                                    <label for="facebook">Facebook URL</label>
                                    <v-text-field outlined dense placeholder="Enter Here"></v-text-field>
                                </v-col>
                                <v-col cols="8">
                                    <label for="google">Google+ URL</label>
                                    <v-text-field outlined dense placeholder="Enter Here"></v-text-field>
                                </v-col>
                                <v-col cols="8">
                                    <label for="youtube">Youtube URL</label>
                                    <v-text-field outlined dense placeholder="Enter Here"></v-text-field>
                                </v-col>
                            </v-row>
                        </div>
                        <div class="form_sec">
                            <v-row>
                                <v-col cols="8">
                                    <label for="additional">Additional URL</label>
                                    <v-text-field outlined dense placeholder="Enter Here"></v-text-field>
                                </v-col>
                                <v-col cols="8">
                                    <label for="twitter">Twitter URL</label>
                                    <v-text-field outlined dense placeholder="Enter Here"></v-text-field>
                                </v-col>
                                <v-col cols="8">
                                    <label for="linkedin">LinkedIn URL</label>
                                    <v-text-field outlined dense placeholder="Enter Here"></v-text-field>
                                </v-col>
                                <v-col cols="8">
                                    <label for="pinterest">Pinterest URL</label>
                                    <v-text-field outlined dense placeholder="Enter Here"></v-text-field>
                                </v-col>
                            </v-row>
                        </div>
                </v-card-text>
            </v-card>
            <v-card-text>
                <v-btn class="btn_class" color="success">SAVE</v-btn>
            </v-card-text>
        </div>
    </div>
</template>

<script>
export default {
    data()
    {
        return{
            company_name:["ABC","XYZ","PQR","MNO"],
            states:["Texas","California","Florida","Washington","New Jersey"],
        }
    }
}
</script>

<style lang="scss">
.account_middle{
    float: left;
    width: 100%;
    .account_card{
        float: left;
        width: 100%;
        margin: 20px 20px 20px 20px;
    }
}
</style>