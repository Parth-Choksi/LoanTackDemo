<template>
    <div class="main">
        <div class="nav_div">
            <Navdrawer/>
        </div>
        <div class="parent">
            <Appbar class="header_app"/>
            <div>
                <Users/>
            </div>
            <div>
                <Calculation/>
            </div>
            <div>
                <Callback/>
            </div>
            <div>
                <Documents/>
            </div>
        </div>
    </div>
</template>

<script>
import Navdrawer from '../nav_bar'
import Appbar from '../app_bar'
import Users from '../activity/users.vue'
import Calculation from '../activity/calculations.vue'
import Callback from '../activity/callback.vue'
import Documents from '../activity/documents.vue'
export default {
    components:{
        Navdrawer,
        Appbar,
        Users,
        Calculation,
        Callback,
        Documents,
    }
}
</script>

<style>

</style>