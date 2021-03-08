<template>
    <div class="profile_div_main">
        <div class="form_sec">
           <v-card class="common_card">
               <v-card-title><b>Social Media Links</b></v-card-title>
               <v-divider class="divider_class"/>
               <v-card-text>
               <v-form>
                   <v-row>
                       <v-col cols="12">
                           <label class="textfield_label"> Website URL </label>
                           <v-text-field placeholder="Enter Here" outlined></v-text-field>
                       </v-col>
                   </v-row>
                    <v-row>
                       <v-col cols="12">
                          <label class="textfield_label"> Facebook URL </label>
                           <v-text-field placeholder="Enter Here" outlined></v-text-field>
                       </v-col>
                   </v-row>
                   <v-row>
                       <v-col cols="12">
                           <label class="textfield_label"> Twitter URL </label>
                           <v-text-field placeholder="Enter Here" outlined></v-text-field>
                       </v-col>
                   </v-row>
                   <v-row>
                       <v-col cols="12">
                           <label class="textfield_label"> LinkedIn URL</label>
                           <v-text-field placeholder="Enter Here" outlined></v-text-field>
                       </v-col>
                   </v-row>
                   <v-row>
                       <v-col cols="12">
                           <label class="textfield_label"> Google + URL </label>
                           <v-text-field placeholder="Enter Here" outlined></v-text-field>
                       </v-col>
                   </v-row>
                   <v-row>
                       <v-col cols="12">
                           <label class="textfield_label"> Youtube URL </label>
                           <v-text-field placeholder="Enter Here" outlined></v-text-field>
                       </v-col>
                   </v-row>
                   <v-row>
                       <v-col cols="12">
                           <label class="textfield_label"> Pinterest URL </label>
                           <v-text-field placeholder="Enter Here" outlined></v-text-field>
                       </v-col>
                   </v-row>
               </v-form>
               </v-card-text>
               <v-divider class="common_card"/>
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

}
</script>

<style lang="scss">
</style>