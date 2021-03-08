<template>
    <div class="apply_main">
        <div class="apply_middle">
            <v-card class="max_card">
                <v-card-text>
                    <v-row>
                        <v-col cols="5">
                            <label for="name">Name</label>
                            <v-text-field outlined dense placeholder="Enter Here"></v-text-field>
                        </v-col>
                        <v-col cols="5">
                            <label for="email">Email Address</label>
                            <v-text-field outlined dense placeholder="Enter Here"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="11">
                            <label for="company name">Company Name</label>
                            <v-text-field outlined dense placeholder="Enter Here"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="11">
                            <label for="app name">App Name</label>
                            <v-text-field outlined dense placeholder="Enter Here"></v-text-field>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-divider class="divider_class"/>
                <v-card-text>
                    <v-btn class="btn_class" outlined color="success">CANCEL</v-btn>
                    <v-btn class="btn_class" color="success">SEND REQUEST</v-btn>
                </v-card-text>
            </v-card>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.apply_middle{
    float: left;
    width: 100%;
}
</style>