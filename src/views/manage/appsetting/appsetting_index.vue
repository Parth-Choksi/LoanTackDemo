<template>
    <div class="main">
        <div class="nav_div">        
            <Navdrawer/>
        </div>
        <div class="parent">
            <Appbar class="header_app"/>
            <div class="dash_div">
                <v-spacer/>
               <ProfileIndex/>
               <!-- <ProfileColor/>
               <ProfileMenu/> -->
            </div>
        </div>
    </div>
</template>

<script>
import Appbar from '../app_bar.vue'
import Navdrawer from '../nav_bar.vue'
import ProfileIndex from '../appsetting/profile/profile_index.vue'
// import ProfileColor from '../appsetting/color.vue'
// import ProfileMenu from '../appsetting/menus/menu_index.vue'
export default {
    components:{
        Appbar,
        Navdrawer,
        ProfileIndex,
        // ProfileColor,
        // ProfileMenu,
    }
}
</script>

<style>

</style>