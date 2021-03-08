<template>
    <div class="auto_main">
        <div class="nav_div">        
            <NavDrawer/>
        </div>
        <div class="parent">
            <Appbar class="header_app"/>
        <div class="auto_header">
            <h1>Auto Responder</h1>
        </div>
        <v-divider class="divider_class"/>
        <div class="auto_middle">
            <v-card class="max_card">
                <v-card-text>
                    <v-row>
                        <v-col cols="6">
                            <label class="textfield_label" for="from email">From Email</label>
                            <v-text-field outlined placeholder="Enter Here"></v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <label class="textfield_label" for="from name">From Name</label>
                            <v-text-field outlined placeholder="Enter Here"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="6">
                            <label class="textfield_label" for="subject">Subject</label>
                            <v-text-field outlined placeholder="Enter Here"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="11">
                            <label class="textfield_label" for="HTML">HTML</label>
                            <quill v-model="content" :options="editoroption" @change="oneEditorChange($event)">

                            </quill>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-divider class="divider_class"/>
                <v-card-text>
                    <v-btn class="btn_class" color="success">SAVE</v-btn>
                    <v-btn class="btn_class" text color="success">RESTORE DEFAULTS</v-btn>
                </v-card-text>
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
            editoroption :{
                loan:''
            },
            content:''
        }
    }
}
</script>

<style lang="scss">
</style>