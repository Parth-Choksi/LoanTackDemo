<template>
    <div class="setting_main">
        <div class="setting_header">
            <h1>Settings</h1>
        </div>
        <v-divider class="divider_class"/>
        <div class="setting_middle">
            <div class="form_sec">
                <v-card class="setting_card">
                    <v-card-title>Password Settings</v-card-title>
                    <v-divider class="divider_class"/>
                    <v-card-text>
                        <v-row>
                            <v-col cols="10">
                                <label for="password">Current Password</label>
                                <v-text-field outlined dense placeholder="Enter Here"></v-text-field>
                            </v-col>
                            <v-col cols="10">
                                <label for="new password">New Password</label>
                                <v-text-field outlined dense placeholder="Enter Here"></v-text-field>
                            </v-col>
                            <v-col cols="10">
                                <label for="confirm password">Confirm Password</label>
                                <v-text-field outlined dense placeholder="Enter Here"></v-text-field>
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-divider class="divider_class"/>
                    <v-card-text>
                        <v-btn class="btn_class" color="success">SAVE</v-btn>
                    </v-card-text>
                </v-card>
            </div>

            <div class="form_sec">
                <v-card class="setting_card">
                    <v-card-title>Notification Settings</v-card-title>
                    <v-divider class="divider_class"/>
                    <v-card-text>
                        <v-row>
                            <v-col cols="12">
                                <label for="message">Direct Message</label>
                                <v-switch color="success" inset></v-switch>
                            </v-col>
                            <v-col cols="12">
                                <label for="document">Document Upload</label>
                                <v-switch color="success" inset></v-switch>
                            </v-col>
                            <v-col cols="12">
                                <label for="application download">Application downloaded from your link</label>
                                <v-switch color="success" inset></v-switch>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>

                <v-card class="setting_card" width="95%">
                    <v-card-title>Reports</v-card-title>
                    <v-divider class="divider_class"/>
                    <v-card-text>
                        <v-row>
                            <v-col cols="12">
                                <label for="report">Daily Report</label>
                                <v-switch color="success" inset></v-switch>
                            </v-col>
                            <v-col cols="12">
                                <label for="week report">Weekly Report</label>
                                <v-switch color="success" inset></v-switch>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.setting_middle{
    float: left;
    width: 100%;
    .setting_card{
        float: left;
        margin: 20px 20px 20px 20px;
        .v-input--switch{
            float: right;
        }
    }
}
</style>