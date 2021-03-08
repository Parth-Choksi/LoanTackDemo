<template>
    <div class="profile_div_main">
        <div class="form_sec">
           <v-card class="common_card">
               <v-card-text>
               <v-form>
                   <v-row>
                       <v-col cols="12">
                           <label class="textfield_label">First Name</label>
                           <v-text-field placeholder="Enter Here" outlined dense></v-text-field>
                       </v-col>
                   </v-row>
                    <v-row>
                       <v-col cols="12">
                           <label class="textfield_label">Last Name</label>
                           <v-text-field placeholder="Enter Here" outlined dense></v-text-field>
                       </v-col>
                   </v-row>
                   <v-row>
                       <v-col cols="12">
                           <label class="textfield_label">Company Name</label>
                           <v-text-field placeholder="Enter Here" outlined dense></v-text-field>
                       </v-col>
                   </v-row>
                   <v-row>
                       <v-col cols="12">
                           <label class="textfield_label"> Title </label>
                           <v-text-field placeholder="Enter Here" outlined dense></v-text-field>
                       </v-col>
                   </v-row>
                   <v-row>
                       <v-col cols="12">
                           <label class="textfield_label"> License / NMLS </label>
                           <v-text-field placeholder="Enter Here" outlined dense></v-text-field>
                       </v-col>
                   </v-row>
                   <v-row>
                       <v-col cols="12">
                           <label class="textfield_label"> Contact Number </label>
                           <v-text-field placeholder="Enter Here" outlined dense></v-text-field>
                       </v-col>
                   </v-row>
                   <v-row>
                       <v-col cols="12">
                           <label class="textfield_label">Address</label>
                           <v-text-field placeholder="Enter Here" outlined dense></v-text-field>
                       </v-col>
                   </v-row>
                   <v-row>
                       <v-col cols="12">
                           <label class="textfield_label"> City </label>
                           <v-text-field placeholder="Enter Here" outlined dense></v-text-field>
                       </v-col>
                   </v-row>
                   <v-row>
                       <v-col cols="12">
                           <label class="textfield_label"> State </label>
                           <v-select append-icon="fas fa-caret-down" :items="item" placeholder="Select" outlined dense></v-select>
                       </v-col>
                   </v-row>
                   <v-row>
                       <v-col cols="12">
                           <label class="textfield_label"> Zip Code </label>
                           <v-text-field placeholder="Enter Here" outlined dense></v-text-field>
                       </v-col>
                   </v-row>
               </v-form>
               </v-card-text>
               <v-divider class="divider_class"/>
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
</style>