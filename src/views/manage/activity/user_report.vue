<template>
    <v-dialog v-model="dialog" width="1200px">
        <v-card>
            <v-card-title>GENERATE REPORT
                <v-spacer/>
                <span @click="returnUser()" class="cursor_x">X</span>
            </v-card-title>
            <v-divider/>
            <v-form>
                <v-card-text>
                    <v-row>
                        <v-col cols="6">
                            From
                            <v-menu
                                v-model="datePicker1"
                                :close-on-content-click="false"
                                :nudge-right="40"
                                transition="scale-transition"
                                offset-y
                                min-width="auto">
                                <template v-slot:activator="{ on, attrs }">
                                    <div>
                                        <v-text-field
                                            outlined
                                            dense
                                            clearable
                                            hide-details
                                            placeholder="Pick Date"
                                            v-model="user.date1"
                                            append-icon="mdi-calendar"
                                            readonly
                                            v-bind="attrs"
                                            v-on="on"/>
                                    </div>
                                </template>
                                <v-date-picker
                                    v-model="user.date1"
                                    @input="datePicker1 = false"/>
                            </v-menu>
                        </v-col>
                        <v-col cols="6">
                            To
                            <v-menu
                                v-model="datePicker2"
                                :close-on-content-click="false"
                                :nudge-right="40"
                                transition="scale-transition"
                                offset-y
                                min-width="auto">
                                <template v-slot:activator="{ on, attrs }">
                                    <div>
                                        <v-text-field
                                            outlined
                                            dense
                                            clearable
                                            hide-details
                                            placeholder="Pick Date"
                                            v-model="user.date2"
                                            append-icon="mdi-calendar"
                                            readonly
                                            v-bind="attrs"
                                            v-on="on"/>
                                    </div>
                                </template>
                                <v-date-picker
                                    v-model="user.date2"
                                    @input="datePicker2 = false"/>
                            </v-menu>
                        </v-col>
                    </v-row>
                </v-card-text>

                <v-card-text>
                    These details will be present in the generated report :
                    <i class="fas fa-caret-down" @click="activated = true"></i>
                    <v-row>
                        <v-col cols="12">
                                <v-list-item>Number of user registered to system</v-list-item>
                                <v-list-item>Names of the user</v-list-item>
                                <v-list-item>Total number of Calculations run by every individual</v-list-item>
                                <v-list-item>Number of Documents uploaded by every individual</v-list-item>
                        </v-col>
                    </v-row>
                    <v-divider/>
                    <v-btn class="gnrt_btn" color="success">GENERATE</v-btn>
                </v-card-text>

            </v-form>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    data()
    {
        return{
            dialog : true,
            activated : false,
            user:{
                date1: '',
                date2: '',
            },
            datePicker1: false,
            datePicker2: false,
        }
    },
    methods:
    {
        returnUser()
        {
            this.$router.push('users')
        }
    }
}
</script>

<style lang="scss">
.cursor_x{
    cursor: pointer;
}
.gnrt_btn{
    margin: 12px 0 0 30px;
}
</style>