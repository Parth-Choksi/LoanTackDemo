<template>
  <div class="main">
        <div class="nav_div">        
            <Navdrawer/>
        </div>
        <div class="parent">
            <Appbar class="header_app"/>
            <div class="dash_div">
               <Fee/>
               <!-- <ProfileColor/>
               <ProfileMenu/> -->
            </div>
        </div>
    </div>
</template>

<script>
import Appbar from '../app_bar.vue'
import Navdrawer from '../nav_bar.vue'
import Fee from '../loansetting/fee.vue'
// import LoanIndex from '../loansetting/calculator/loansetting_index.vue'
export default {
    components:{
        Appbar,
        Navdrawer,
        Fee,
    }
}
</script>

<style>

</style>