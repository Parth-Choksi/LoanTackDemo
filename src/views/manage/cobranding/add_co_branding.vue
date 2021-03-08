<template>
    <div class="add_cobrand_main">
        <div class="nav_div">        
            <NavDrawer/>
        </div>
        <div class="parent">
            <Appbar class="header_app"/>
        <div class="add_cobrand_main">
            <h1>
            <v-breadcrumbs class="li_bread" :items="items">
                <template v-slot:divider>
                    <v-icon>mdi-chevron-right</v-icon>
                </template>
            </v-breadcrumbs>
            </h1>
            <div class="switch_icon">
                <p>Notify the partner once added</p>
                <v-switch inset color="success"></v-switch>
            </div>
        </div>
        <v-divider class="divider_class"/>
        <div class="add_cobrand_middle">
            <div class="first_card">
                <v-card class="max_card">
                    <v-card-text>
                        <div class="left_sec">
                            <v-row>
                                <v-col cols="10">
                                    <label class="textfield_label" for="first name">First Name</label>
                                    <v-text-field outlined dense placeholder="Enter Here"></v-text-field>
                                </v-col>
                                <v-col cols="10">
                                    <label class="textfield_label" for="email address">Email Address</label>
                                    <v-text-field outlined dense placeholder="Enter Here"></v-text-field>
                                </v-col>
                                <v-col cols="10">
                                    <label class="textfield_label" for="dual branding">Dual Branding</label>
                                    <v-select append-icon="fas fa-caret-down" outlined dense placeholder="Select" :items="items"></v-select>
                                </v-col>
                            </v-row>
                        </div>
                        <div class="right_sec">
                            <v-row>
                                <v-col cols="10">
                                    <label class="textfield_label" for="last name">Last Name</label>
                                    <v-text-field outlined dense placeholder="Enter Here"></v-text-field>
                                </v-col>
                                <v-col cols="10">
                                    <label class="textfield_label" for="contact number">Contact Number</label>
                                    <v-text-field outlined dense placeholder="Enter Here"></v-text-field>
                                </v-col>
                            </v-row>
                        </div>
                    </v-card-text>
                </v-card>
            </div>

            <div class="first_card">
                <v-card class="max_card">
                    <v-card-title>Upload Photo</v-card-title>
                    <v-divider class="divider_class"/>
                    <v-card-text>
                        <div class="left_sec">
                            <v-row>
                                <v-col cols="6">
                                    <label class="textfield_label" for="photo btn">Photo</label>
                                    <v-btn outlined color="success">UPLOAD</v-btn>
                                </v-col>
                            </v-row>
                        </div>
                        <div class="right_sec">
                            <v-row>
                                <v-col cols="6">
                                    <label class="textfield_label" for="logo btn">Logo</label>
                                    <v-btn outlined color="success">UPLOAD</v-btn>
                                </v-col>
                            </v-row>
                        </div>
                    </v-card-text>
                </v-card>
            </div>

             <div class="first_card">
                <v-card class="max_card">
                    <v-card-title>Additional Information</v-card-title>
                    <v-divider class="divider_class"/>
                    <v-card-text>
                        <div class="left_sec">
                            <v-row>
                                <v-col cols="10">
                                    <label class="textfield_label" for="company">Company</label>
                                    <v-text-field outlined dense placeholder="Enter Here"></v-text-field>
                                </v-col>
                                <v-col cols="10">
                                    <label class="textfield_label" for="city">City</label>
                                    <v-text-field outlined dense placeholder="Enter Here"></v-text-field>
                                </v-col>
                                <v-col cols="10">
                                    <label class="textfield_label" for="zip code">Zip Code</label>
                                    <v-text-field outlined dense placeholder="Enter Here"></v-text-field>
                                </v-col>
                                <v-col cols="10">
                                    <label class="textfield_label" for="bio">Bio</label>
                                    <v-textarea rows="3" no-resize outlined dense placeholder="Enter Here"></v-textarea>
                                </v-col>
                            </v-row>
                        </div>
                        <div class="right_sec">
                            <v-row>
                                <v-col cols="10">
                                    <label class="textfield_label" for="title">Title</label>
                                    <v-text-field outlined dense placeholder="Enter Here"></v-text-field>
                                </v-col>
                                <v-col cols="10">
                                    <label class="textfield_label" for="state">State</label>
                                    <v-select  append-icon="fas fa-caret-down" :items="states" outlined dense placeholder="Select"></v-select>
                                </v-col>
                                <v-col cols="10">
                                    <label class="textfield_label" for="license">License#</label>
                                    <v-text-field outlined dense placeholder="Enter Here"></v-text-field>
                                </v-col>
                            </v-row>
                        </div>
                    </v-card-text>
                </v-card>
            </div>

            <div class="first_card">
                <v-card class="max_card">
                    <v-card-title>Social Links (Optional)</v-card-title>
                    <v-divider class="divider_class"/>
                    <v-card-text>
                        <div class="left_sec">
                            <v-row>
                                <v-col cols="10">
                                    <label class="textfield_label" for="website">Website URL</label>
                                    <v-text-field outlined dense placeholder="Enter Here"></v-text-field>
                                </v-col>
                                <v-col cols="10">
                                    <label class="textfield_label" for="facebook">Facebook URL</label>
                                    <v-text-field outlined dense placeholder="Enter Here"></v-text-field>
                                </v-col>
                                <v-col cols="10">
                                    <label class="textfield_label" for="google">Google+ URL</label>
                                    <v-text-field outlined dense placeholder="Enter Here"></v-text-field>
                                </v-col>
                                <v-col cols="10">
                                    <label class="textfield_label" for="youtube">Youtube URL</label>
                                    <v-text-field outlined dense placeholder="Enter Here"></v-text-field>
                                </v-col>
                            </v-row>
                        </div>
                        <div class="right_sec">
                            <v-row>
                                <v-col cols="10">
                                    <label class="textfield_label" for="additional">Additional URL</label>
                                    <v-text-field outlined dense placeholder="Enter Here"></v-text-field>
                                </v-col>
                                <v-col cols="10">
                                    <label class="textfield_label" for="twitter">Twitter URL</label>
                                    <v-text-field outlined dense placeholder="Enter Here"></v-text-field>
                                </v-col>
                                <v-col cols="10">
                                    <label class="textfield_label" for="linkedin">LinkedIn URL</label>
                                    <v-text-field outlined dense placeholder="Enter Here"></v-text-field>
                                </v-col>
                                <v-col cols="10">
                                    <label class="textfield_label" for="pinterest">Pinterest URL</label>
                                    <v-text-field outlined dense placeholder="Enter Here"></v-text-field>
                                </v-col>
                            </v-row>
                        </div>
                    </v-card-text>
                </v-card>
            </div>
        </div>
          <v-btn color="success" class="btn_class">CREATE</v-btn>
        </div>
      
    </div>
</template>

<script>
import Appbar from '../app_bar.vue'
import NavDrawer from '../nav_bar'
export default {
    components:{
        Appbar,
        NavDrawer,
    },
    data()
    {
        return{
            items: [
            {
                text: 'Co-Branding',
                disabled: true,
                href: 'co_branding',
            },
            {
                text: 'Add Co-Branding Officer',
                disabled: false,
                href: 'add_co_branding',
            },
        ],
        states:["Texas","California","Florida","Washington","New Jersey"],
        }
    }
}
</script>

<style lang="scss">
.add_cobrand_main{
    h1{
        float: left;
        width: 70%;
    }
}
.switch_icon{
    float: right;
    line-height: 50px;
    p{
        float: left;
    }
}
.li_bread{
    float: left;
    width: 80%;
    line-height: 50px;
}
.v-breadcrumbs__item{
    font-size: 25px;
}
.first_card{
    float: left;
    width: 100%;

        .v-btn{
            margin-top: 16px;
            margin-left: 10px;
        }

        .left_sec{
            width: 50%;
            float: left;
        }
}

</style>