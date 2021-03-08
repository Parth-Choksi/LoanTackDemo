<template>
    <div class="widget_main">
        <div class="nav_div">        
            <NavDrawer/>
        </div>
        <div class="parent">
            <Appbar class="header_app"/>
            <div class="widget_header"><br>
                <h1>Widgets</h1>
                <v-row>
                    <v-col cols="6">
                        <label class="textfield_label" for="select loan type">Select Loan Type</label>
                        <v-select placeholder="FHA" append-icon="fas fa-caret-down" outlined dense :items="items" @click="selectedValue()" v-model="item">
                        </v-select>
                    </v-col>
                </v-row>
            </div>
            <v-divider class="divider_class"/>
            <div class="widget_middle" v-if="item=='FHA'">
                <v-card class="max_card">
                    <v-card-text>
                        <div class="slider_div">
                            <!-- for left slider -->
                        </div>
                        <div class="pie_graph_div">
                            <!-- for right side pi graph -->
                            <pie-chart :data="[['Principal & Interest in $',1157.73],['Taxes & HOA in $',250.00],['Hazard Insurance in $',66.67]
                            ,['MI in $',222.29]]"></pie-chart>
                        </div>
                    </v-card-text>
                </v-card>
                <v-card class="max_card">
                    <v-card-title><b>Advanced</b></v-card-title>
                    <v-divider class="divider_class"/>
                    <v-card-text>
                        <div class="form_sec">
                            <v-row>
                                <v-col cols="8">
                                    <label class="textfield_label" for="terms">Terms</label>
                                    <v-select append-icon="fas fa-caret-down" placeholder="30 Years" :items="years"  outlined dense></v-select>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="8">
                                    <label class="textfield_label" for="County">County</label>
                                    <v-select append-icon="fas fa-caret-down" placeholder="Alameda" :items="county" outlined dense></v-select>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="8">
                                    <label class="textfield_label" for="state">State</label>
                                    <v-select append-icon="fas fa-caret-down" placeholder="California" :items="states"  outlined dense></v-select>
                                </v-col>
                            </v-row>
                        </div>
                        <div class="form_sec">
                            <v-row>
                                <v-col cols="8">
                                    <label class="textfield_label" for="monthly hda">Monthly HOA</label>
                                    <v-text-field prefix="$" placeholder="0" outlined dense></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="8">
                                    <label class="textfield_label" for="annual hazard">Annual Hazard Insurance</label>
                                    <v-text-field prefix="$" placeholder="0" outlined dense></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="8">
                                    <label class="textfield_label" for="annual propert tax">Annual Property Tax</label>
                                    <v-text-field prefix="$" placeholder="0" outlined dense></v-text-field>
                                </v-col>
                                <v-col cols="4">
                                    <v-text-field suffix="%" placeholder="0" outlined dense></v-text-field>
                                </v-col>
                            </v-row>
                        </div>
                    </v-card-text>
                    <v-divider class="divider_class"/>
                    <v-card-text>
                        logo of loantack
                    </v-card-text>
                </v-card>

                <v-card class="max_card">
                    <v-card-title>Source Code</v-card-title>
                    <v-divider class="divider_class"/>
                    <v-card-text>
                        <v-row>
                            <v-col cols="12">
                                <v-textarea rows="3" outlined no-resize placeholder="<script>

    </script>"></v-textarea>
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-divider class="divider_class"/>
                    <v-card-text>
                        <v-btn class="btn_class" outlined color="success">COPY CODE</v-btn>
                    </v-card-text>
                </v-card>
            </div>

            <div class="widget_middle" v-if="item=='Conventional'">
                <v-card class="max_card">
                    <v-card-text>
                        <div class="slider_div">
                            <!-- for left slider -->
                        </div>
                        <div class="pie_graph_div">
                            <!-- for right side pi graph -->
                            <pie-chart :data="[['Principal & Interest in $',1157.73],['Taxes & HOA in $',250.00],['Hazard Insurance in $',66.67]
                            ,['MI in $',222.29]]"></pie-chart>
                        </div>
                    </v-card-text>
                </v-card>
                <v-card class="max_card">
                    <v-card-title><b>Advanced</b></v-card-title>
                    <v-divider class="divider_class"/>
                    <v-card-text>
                        <div class="form_sec">
                            <v-row>
                                <v-col cols="8">
                                    <label class="textfield_label" for="fico">FICO</label>
                                    <v-select append-icon="fas fa-caret-down" placeholder="Select" outlined dense></v-select>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="8">
                                    <label class="textfield_label" for="terms">Terms</label>
                                    <v-select append-icon="fas fa-caret-down" placeholder="30 Years" :items="years"  outlined dense></v-select>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="8">
                                    <label class="textfield_label" for="County">County</label>
                                    <v-select append-icon="fas fa-caret-down" placeholder="Alameda" :items="county" outlined dense></v-select>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="8">
                                    <label class="textfield_label" for="state">State</label>
                                    <v-select append-icon="fas fa-caret-down" placeholder="California" :items="states"  outlined dense></v-select>
                                </v-col>
                            </v-row>
                        </div>
                        <div class="form_sec">
                            <v-row>
                                <v-col cols="8">
                                    <label class="textfield_label" for="monthly hda">Monthly HOA</label>
                                    <v-text-field prefix="$" placeholder="0" outlined dense></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="8">
                                    <label class="textfield_label" for="annual hazard">Annual Hazard Insurance</label>
                                    <v-text-field prefix="$" placeholder="0" outlined dense></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="8">
                                    <label class="textfield_label" for="annual propert tax">Annual Property Tax</label>
                                    <v-text-field prefix="$" placeholder="0" outlined dense></v-text-field>
                                </v-col>
                                <v-col cols="4">
                                    <v-text-field suffix="%" placeholder="0" outlined dense></v-text-field>
                                </v-col>
                            </v-row>
                        </div>
                    </v-card-text>
                    <v-divider class="divider_class"/>
                    <v-card-text>
                        logo of loantack
                    </v-card-text>
                </v-card>

                <v-card class="max_card">
                    <v-card-title>Source Code</v-card-title>
                    <v-divider class="divider_class"/>
                    <v-card-text>
                        <v-row>
                            <v-col cols="12">
                                <v-textarea rows="3" outlined no-resize placeholder="<script>

    </script>"></v-textarea>
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-divider class="divider_class"/>
                    <v-card-text>
                        <v-btn class="btn_class" outlined color="success">COPY CODE</v-btn>
                    </v-card-text>
                </v-card>
            </div>

            <div class="widget_middle" v-if="item=='Jumbo'">
                <v-card class="max_card">
                    <v-card-text>
                        <div class="slider_div">
                            <!-- for left slider -->
                        </div>
                        <div class="pie_graph_div">
                            <!-- for right side pi graph -->
                            <pie-chart :data="[['Principal & Interest in $',1157.73],['Taxes & HOA in $',250.00],['Hazard Insurance in $',66.67]
                            ,['MI in $',222.29]]"></pie-chart>
                        </div>
                    </v-card-text>
                </v-card>
                <v-card class="max_card">
                    <v-card-title><b>Advanced</b></v-card-title>
                    <v-divider class="divider_class"/>
                    <v-card-text>
                        <div class="form_sec">
                            <v-row>
                                <v-col cols="8">
                                    <label class="textfield_label" for="fico">FICO</label>
                                    <v-select append-icon="fas fa-caret-down" placeholder="Select" outlined dense></v-select>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="8">
                                    <label class="textfield_label" for="terms">Terms</label>
                                    <v-select append-icon="fas fa-caret-down" placeholder="30 Years" :items="years"  outlined dense></v-select>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="8">
                                    <label class="textfield_label" for="County">County</label>
                                    <v-select append-icon="fas fa-caret-down" placeholder="Alameda" :items="county" outlined dense></v-select>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="8">
                                    <label class="textfield_label" for="state">State</label>
                                    <v-select append-icon="fas fa-caret-down" placeholder="California" :items="states"  outlined dense></v-select>
                                </v-col>
                            </v-row>
                        </div>
                        <div class="form_sec">
                            <v-row>
                                <v-col cols="8">
                                    <label class="textfield_label" for="monthly hda">Monthly HOA</label>
                                    <v-text-field prefix="$" placeholder="0" outlined dense></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="8">
                                    <label class="textfield_label" for="annual hazard">Annual Hazard Insurance</label>
                                    <v-text-field prefix="$" placeholder="0" outlined dense></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="8">
                                    <label class="textfield_label" for="annual propert tax">Annual Property Tax</label>
                                    <v-text-field prefix="$" placeholder="0" outlined dense></v-text-field>
                                </v-col>
                                <v-col cols="4">
                                    <v-text-field suffix="%" placeholder="0" outlined dense></v-text-field>
                                </v-col>
                            </v-row>
                        </div>
                    </v-card-text>
                    <v-divider class="divider_class"/>
                    <v-card-text>
                        logo of loantack
                    </v-card-text>
                </v-card>

                <v-card class="max_card">
                    <v-card-title>Source Code</v-card-title>
                    <v-divider class="divider_class"/>
                    <v-card-text>
                        <v-row>
                            <v-col cols="12">
                                <v-textarea rows="3" outlined no-resize placeholder="<script>

    </script>"></v-textarea>
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-divider class="divider_class"/>
                    <v-card-text>
                        <v-btn class="btn_class" outlined color="success">COPY CODE</v-btn>
                    </v-card-text>
                </v-card>
            </div>

            <div class="widget_middle" v-if="item=='USDA'">
                <v-card class="max_card">
                    <v-card-text>
                        <div class="slider_div">
                            <!-- for left slider -->
                        </div>
                        <div class="pie_graph_div">
                            <!-- for right side pi graph -->
                            <pie-chart :data="[['Principal & Interest in $',1157.73],['Taxes & HOA in $',250.00],['Hazard Insurance in $',66.67]
                            ,['MI in $',222.29]]"></pie-chart>
                        </div>
                    </v-card-text>
                </v-card>
                <v-card class="max_card">
                    <v-card-title><b>Advanced</b></v-card-title>
                    <v-divider class="divider_class"/>
                    <v-card-text>
                        <div class="form_sec">
                            <v-row>
                                <v-col cols="8">
                                    <label class="textfield_label" for="terms">Terms</label>
                                    <v-select append-icon="fas fa-caret-down" placeholder="30 Years" :items="years"  outlined dense></v-select>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="8">
                                    <label class="textfield_label" for="County">County</label>
                                    <v-select append-icon="fas fa-caret-down" placeholder="Alameda" :items="county" outlined dense></v-select>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="8">
                                    <label class="textfield_label" for="state">State</label>
                                    <v-select append-icon="fas fa-caret-down" placeholder="California" :items="states"  outlined dense></v-select>
                                </v-col>
                            </v-row>
                        </div>
                        <div class="form_sec">
                            <v-row>
                                <v-col cols="8">
                                    <label class="textfield_label" for="monthly hda">Monthly HOA</label>
                                    <v-text-field prefix="$" placeholder="0" outlined dense></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="8">
                                    <label class="textfield_label" for="annual hazard">Annual Hazard Insurance</label>
                                    <v-text-field prefix="$" placeholder="0" outlined dense></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="8">
                                    <label class="textfield_label" for="annual propert tax">Annual Property Tax</label>
                                    <v-text-field prefix="$" placeholder="0" outlined dense></v-text-field>
                                </v-col>
                                <v-col cols="4">
                                    <v-text-field suffix="%" placeholder="0" outlined dense></v-text-field>
                                </v-col>
                            </v-row>
                        </div>
                    </v-card-text>
                    <v-divider class="divider_class"/>
                    <v-card-text>
                        logo of loantack
                    </v-card-text>
                </v-card>

                <v-card class="max_card">
                    <v-card-title>Source Code</v-card-title>
                    <v-divider class="divider_class"/>
                    <v-card-text>
                        <v-row>
                            <v-col cols="12">
                                <v-textarea rows="3" outlined no-resize placeholder="<script>

    </script>"></v-textarea>
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-divider class="divider_class"/>
                    <v-card-text>
                        <v-btn class="btn_class" outlined color="success">COPY CODE</v-btn>
                    </v-card-text>
                </v-card>
            </div>

            <div class="widget_middle" v-if="item=='VA'">
                <v-card class="max_card">
                    <v-card-text>
                        <div class="slider_div">
                            <!-- for left slider -->
                        </div>
                        <div class="pie_graph_div">
                            <!-- for right side pi graph -->
                            <pie-chart :data="[['Principal & Interest in $',1157.73],['Taxes & HOA in $',250.00],['Hazard Insurance in $',66.67]
                            ,['MI in $',222.29]]"></pie-chart>
                        </div>
                    </v-card-text>
                </v-card>
                <v-card class="max_card">
                    <v-card-title><b>Advanced</b></v-card-title>
                    <v-divider class="divider_class"/>
                    <v-card-text>
                        <div class="form_sec">
                            <v-row>
                                <v-col cols="8">
                                    <label class="textfield_label" for="terms">Terms</label>
                                    <v-select append-icon="fas fa-caret-down" placeholder="30 Years" :items="years"  outlined dense></v-select>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="8">
                                    <label class="textfield_label" for="County">County</label>
                                    <v-select append-icon="fas fa-caret-down" placeholder="Alameda" :items="county" outlined dense></v-select>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="8">
                                    <label class="textfield_label" for="state">State</label>
                                    <v-select append-icon="fas fa-caret-down" placeholder="California" :items="states"  outlined dense></v-select>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="8">
                                    <label class="textfield_label" for="1st va mortgage">1st VA Mortgage</label>
                                    <v-select append-icon="fas fa-caret-down" placeholder="Select" :items="booleanValues"  outlined dense></v-select>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="8">
                                    <label class="textfield_label" for="active duty">Active Duty?</label>
                                    <v-select append-icon="fas fa-caret-down" placeholder="Select" :items="booleanValues"  outlined dense></v-select>
                                </v-col>
                            </v-row>
                        </div>
                        <div class="form_sec">
                            <v-row>
                                <v-col cols="8">
                                    <label class="textfield_label" for="monthly hda">Monthly HOA</label>
                                    <v-text-field prefix="$" placeholder="0" outlined dense></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="8">
                                    <label class="textfield_label" for="annual hazard">Annual Hazard Insurance</label>
                                    <v-text-field prefix="$" placeholder="0" outlined dense></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="8">
                                    <label class="textfield_label" for="annual propert tax">Annual Property Tax</label>
                                    <v-text-field prefix="$" placeholder="0" outlined dense></v-text-field>
                                </v-col>
                                <v-col cols="4">
                                    <v-text-field suffix="%" placeholder="0" outlined dense></v-text-field>
                                </v-col>
                            </v-row>
                        </div>
                    </v-card-text>
                    <v-divider class="divider_class"/>
                    <v-card-text>
                        logo of loantack
                    </v-card-text>
                </v-card>

                <v-card class="max_card">
                    <v-card-title>Source Code</v-card-title>
                    <v-divider class="divider_class"/>
                    <v-card-text>
                        <v-row>
                            <v-col cols="12">
                                <v-textarea rows="3" outlined no-resize placeholder="<script>

    </script>"></v-textarea>
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-divider class="divider_class"/>
                    <v-card-text>
                        <v-btn class="btn_class" outlined color="success">COPY CODE</v-btn>
                    </v-card-text>
                </v-card>
            </div>
        </div>
    </div>
</template>

<script>
import Appbar from '../app_bar.vue'
import NavDrawer from '../nav_bar.vue'
export default {
    components:
    {
        Appbar,
        NavDrawer,
    },
    data(){
        return{
            items:["FHA","Conventional","Jumbo","USDA","VA"],
            years:["2 Years","5 Years","10 Years","12 Years","15 Years","20 Years","25 Years","30 Years"],
            county:["Alameda"],
            states:["Texas","California","Florida","Washington","New Jersey"],
            booleanValues:["Yes","No"],
            item:'',
        }
    },
    methods:{
        selectedValue(){
            console.log("select value",this.item);
        }
    }
    
}
</script>

<style lang="scss">
.widget_middle{
    float: left;
    width: 100%;
}
.slider_div{
    float: left;
    width: 60%;
}
.pie_graph_div{
    float: right;
    width:40%;
}
</style>