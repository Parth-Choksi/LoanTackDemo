<template>
    <v-app-bar app :elevation="1" color="white">
        <v-spacer></v-spacer>
            <i class="far fa-bell noti-icon"></i>
            <v-divider vertical class="divider_class"/>
        <div>
            <v-list-item>
                <v-list-item-avatar>
                    <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
                </v-list-item-avatar>
                <v-list-item-title>
                    UserName
                </v-list-item-title>
                <v-menu>
                    <template v-slot:activator="{on,attrs}">
                        <v-btn icon v-bind="attrs" v-on="on">
                            <i class="fas fa-caret-down"></i>
                        </v-btn>
                    </template>
                </v-menu>
             </v-list-item>
        </div>
    </v-app-bar>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .noti-icon {
        font-size: 20px;
        margin-right: 10px;
    }
    
</style>