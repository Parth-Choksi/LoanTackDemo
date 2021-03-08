<template>
    <div class="menu_dashboard_main">
        <div class="dashboard_inner_div">
            <v-row>
                <v-col cols="5">
                    <v-card class="menu_card">
                        <v-card-title>Guide</v-card-title>
                        <v-divider class="divider_class"/>
                        <v-card-text>
                        <v-list-item>
                            <div class="dash_menu_sec">
                            <p class="title">Learning Center</p>
                            <span class="icont_div">
                                <v-switch inset color="success"></v-switch>
                            </span>
                            </div>
                        </v-list-item>
                        <v-list-item>
                            <div class="dash_menu_sec">
                            <p class="title">Loan Programs</p>
                            <span class="icont_div">
                                <v-switch inset color="success"></v-switch>
                            </span>
                            </div>
                        </v-list-item>
                        <v-list-item>
                            <div class="dash_menu_sec">
                            <p class="title">Glossary</p>
                            <span class="icont_div">
                                <v-switch inset color="success"></v-switch>
                            </span>
                            </div>
                        </v-list-item>
                        <v-list-item>
                            <div class="dash_menu_sec">
                            <p class="title">CheckLists</p>
                            <span class="icont_div">
                                <v-switch inset color="success"></v-switch>
                            </span>
                            </div>
                        </v-list-item>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script>
export default {
    data()
    {
        return{
            checkbox:'',
        }
    }
}
</script>

<style lang="scss">
.custom_link_sec{
    width: 100%;
}

.dash_menu_sec
{
    width: 100%;
    float: left;
    padding-top: 10px;
}

.title{
    float: left;
}

.icont_div{
    float: right;
}

.dashboard_inner_div{
    margin-top: 20px;
    margin-left: 20px;
}

</style>