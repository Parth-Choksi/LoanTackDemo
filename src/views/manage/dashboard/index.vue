<template>
    <div class="main">
        <div class="nav_div">        
            <Navdrawer/>
        </div>
        <div class="parent">
            <Appbar class="header_app"/>
            <div class="dash_div">
                
                <h1>Dashboard</h1>
                <v-divider class="divider_class"/>
                <div class="row_disp_div">
                <v-row>
                    <v-col cols="6">
                        <Installation/>
                    </v-col>
                    <v-col>
                        <Promotion/>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="6">
                        <RecentActivity/>
                    </v-col>
                    <v-col cols="6">
                        <RecentCalculation/>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <QuickGuide/>
                    </v-col>
                </v-row>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Appbar from '../app_bar.vue'
import Navdrawer from '../nav_bar.vue'
import Installation from '../dashboard/installation.vue'
import Promotion from '../dashboard/promotion.vue'
import RecentActivity from '../dashboard/recent_activity.vue'
import RecentCalculation from '../dashboard/recent_caculation.vue'
import QuickGuide from '../dashboard/quick_start_guide.vue'
export default {
    components :
    {
        Appbar,
        Navdrawer,
        Installation,
        Promotion,
        RecentActivity,
        RecentCalculation,
        QuickGuide,
    }
}
</script>

<style lang="scss">
.nav_div{
    float: left;
    width: 17%;
    height: 100%;
}

.nav_div > .v-navigation-drawer{
    width: 17% !important;
}
.dash_div{
    float: left;
    width: 100%;
    margin: 20px 0 0 20px;

}
.parent{
    float: left;
    width: 83%;
    height: 100%;
}

.header_app{
    position: relative !important;
    float: left;
    width: 100%;
    left: 0 !important;
}
.row_disp_div{
    float: left;
    width: 100%;
    margin-top: 10px;
}
.divider_class{
    float: left;
    width: 100%;
}
</style>