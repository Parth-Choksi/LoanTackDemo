<template>
    <div class="profile_div_main">
        <div class="profile_left_sec">
           <v-card class="contact_card">
               <v-form>
                   <v-row>
                       <v-col cols="8">
                           <label>First Name</label>
                           <v-text-field placeholder="Enter Here" outlined></v-text-field>
                       </v-col>
                   </v-row>
                    <v-row>
                       <v-col cols="8">
                           <label>Last Name</label>
                           <v-text-field placeholder="Enter Here" outlined></v-text-field>
                       </v-col>
                   </v-row>
                   <v-row>
                       <v-col cols="8">
                           <label>Company Name</label>
                           <v-text-field placeholder="Enter Here" outlined></v-text-field>
                       </v-col>
                   </v-row>
                   <v-row>
                       <v-col cols="8">
                           <label> Title </label>
                           <v-text-field placeholder="Enter Here" outlined></v-text-field>
                       </v-col>
                   </v-row>
                   <v-row>
                       <v-col cols="8">
                           <label> License / NMLS </label>
                           <v-text-field placeholder="Enter Here" outlined></v-text-field>
                       </v-col>
                   </v-row>
                   <v-row>
                       <v-col cols="8">
                           <label> Contact Number </label>
                           <v-text-field placeholder="Enter Here" outlined></v-text-field>
                       </v-col>
                   </v-row>
                   <v-row>
                       <v-col cols="8">
                           <label>Address</label>
                           <v-text-field placeholder="Enter Here" outlined></v-text-field>
                       </v-col>
                   </v-row>
                   <v-row>
                       <v-col cols="8">
                           <label> City </label>
                           <v-text-field placeholder="Enter Here" outlined></v-text-field>
                       </v-col>
                   </v-row>
                   <v-row>
                       <v-col cols="8">
                           <label> State </label>
                           <v-select append-icon="fas fa-caret-down" :items="item" placeholder="Select" outlined></v-select>
                       </v-col>
                   </v-row>
                   <v-row>
                       <v-col cols="8">
                           <label> Zip Code </label>
                           <v-text-field placeholder="Enter Here" outlined></v-text-field>
                       </v-col>
                   </v-row>
               </v-form>
               <v-divider/>
                <v-card-text>
                    <v-btn class="btn_class" outlined color="success">PREVIEW</v-btn>
                    <v-btn class="btn_class" color="success">SAVE</v-btn>
                </v-card-text>
           </v-card>
        </div>
        <div class="profile_right_sec">
        </div>
    </div>
</template>

<script>
export default {
    data()
    {
        return{
            item:["Alabama","California","Florida","New York"],
        }
    }
}
</script>

<style lang="scss">
.contact_card{
    width: 100%;
    height: 50%;
    margin: 30px 0 0 20px;
}
label{
    float: left;
    line-height: 71px;
}
</style>