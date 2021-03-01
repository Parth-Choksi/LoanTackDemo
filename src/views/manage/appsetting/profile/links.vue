<template>
    <div class="profile_div_main">
        <div class="profile_left_sec">
           <v-card class="links_card">
               <v-form>
                   <v-row>
                       <v-col cols="8">
                           <label> Website URL </label>
                           <v-text-field placeholder="Enter Here" outlined></v-text-field>
                       </v-col>
                   </v-row>
                    <v-row>
                       <v-col cols="8">
                          <label> Facebook URL </label>
                           <v-text-field placeholder="Enter Here" outlined></v-text-field>
                       </v-col>
                   </v-row>
                   <v-row>
                       <v-col cols="8">
                           <label> Twitter URL </label>
                           <v-text-field placeholder="Enter Here" outlined></v-text-field>
                       </v-col>
                   </v-row>
                   <v-row>
                       <v-col cols="8">
                           <label> LinkedIn URL</label>
                           <v-text-field placeholder="Enter Here" outlined></v-text-field>
                       </v-col>
                   </v-row>
                   <v-row>
                       <v-col cols="8">
                           <label> Google + URL </label>
                           <v-text-field placeholder="Enter Here" outlined></v-text-field>
                       </v-col>
                   </v-row>
                   <v-row>
                       <v-col cols="8">
                           <label> Youtube URL </label>
                           <v-text-field placeholder="Enter Here" outlined></v-text-field>
                       </v-col>
                   </v-row>
                   <v-row>
                       <v-col cols="8">
                           <label> Pinterest URL </label>
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

}
</script>

<style lang="scss">
.links_card{
    width: 100%;
    height: 50%;
    margin: 30px 0 0 20px;
}
</style>