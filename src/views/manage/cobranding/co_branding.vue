<template>
    <div class="co_branding_main">
        <div class="nav_div">        
            <NavDrawer/>
        </div>
        <div class="parent">
            <Appbar class="header_app"/>
        <div class="co_branding_header">
            <h1>Co-Branding</h1>
            <div class="co_branding_header">
            Export To :
            <v-btn class="btn_class">Excel
                <i class="fas fa-caret-down"></i>
            </v-btn>
            <v-btn class="btn_class" color="success">EXPORT</v-btn>
            <v-btn outlined color="success" class="btn_right" @click="gotoAddbranding()">ADD CO-BRANDING</v-btn>
            </div>
        </div><br>
        <v-divider class="divider_class"/>
        <div class="co_branding_middle">
            <v-card class="common_card">
            <v-data-table show-select :headers="headers" :items="items">
                <template v-slot:[`item.actions`]="{ item }">
                <i class="fas fa-download" @click="download(item.name)"></i>
                <i class="fas fa-trash-alt" @click="delete(item.name)"></i>
                </template>
            </v-data-table>
            </v-card>
        </div>
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
            headers:[
                {text:"PHOTO",align:"start",value:'photo'},
                {text:"NAME",value:'name'},
                {text:"COMPANY",value:'company'},
                {text:"APP URL",value:'url'},
                {text:"ACTIONS",value:'action'},
            ],
            items:[
                {photo:'1st_photo',name:'Jack Smith',company:'Charlie Dorwart Realty',url:'https://www.enfuse.com/xyz'},
                {photo:'2nd_photo',name:'Noah Martin',company:'Davis Real Estate Service',url:'https://www.enfuse.com/xyz'},
                {photo:'3rd_photo',name:'Lucas Watson',company:'Charlie Dorwart Realty',url:'https://www.enfuse.com/xyz'},
                {photo:'4th_photo',name:'Oliver Ross',company:'Davis Real Estate Service',url:'https://www.enfuse.com/xyz'},
            ],
        }
    },
    methods:{
        gotoAddbranding()
        {
            this.$router.push('add_co_branding');
        }
    }
}
</script>

<style lang="scss">
.btn_right{
    float: right;
}
.co_branding_header{
    margin: 10px 0 10px 10px;
    float: left;
    width: 100%;
}
.co_branding_middle{
    float: left;
    width: 100%;
}
</style>