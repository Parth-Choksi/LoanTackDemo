<template>
    <div class="guide_main">
         <div class="nav_div">        
            <NavDrawer/>
        </div>
        <div class="parent">
            <Appbar class="header_app"/>
        <div class="guide_div">
            <v-card-title><b>Guide</b></v-card-title>
                <v-divider class="divider_class"/>
            <v-card class="common_card">
                
                <v-card-title>General</v-card-title>
                <v-divider class="divider_class"/>
                <v-card-text>
                    <v-slide-group
                        v-model="model"
                        show-arrows>
                        <v-slide-item
                            v-for="n in 8"
                            :key="n">
                            <v-card
                            class="ma-4"
                            height="180"
                            width="315">
                            <v-row>
                               <iframe width="560" height="315" src="https://www.youtube.com/embed/3olM-9vcd4M" 
                               frameborder="0" 
                               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                            </v-row>
                            </v-card>
                        </v-slide-item>
                        </v-slide-group>
                        <v-card-text>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Suscipit iure illo porro ea distinctio veritatis</p>
                            </v-card-text>
                </v-card-text>
            </v-card>

            <v-card class="common_card">
                <v-card-title>Settings</v-card-title>
                <v-divider class="divider_class"/>
                <v-card-text>
                    <v-slide-group
                        v-model="model"
                        show-arrows>
                        <v-slide-item
                            v-for="n in 2"
                            :key="n">
                            <v-card
                            class="ma-4"
                            height="180"
                            width="315">
                            <v-row>
                               <iframe width="560" height="315" src="https://www.youtube.com/embed/3olM-9vcd4M" 
                               frameborder="0" 
                               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                            </v-row>
                            </v-card>
                        </v-slide-item>
                        </v-slide-group>
                        <v-card-text>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Suscipit iure illo porro ea distinctio veritatis</p>
                            </v-card-text>
                </v-card-text>
            </v-card>

            <v-card class="common_card">
                <v-card-title>Settings</v-card-title>
                <v-divider class="divider_class"/>
                <v-card-text>
                    <v-slide-group
                        v-model="model"
                        show-arrows>
                        <v-slide-item
                            v-for="n in 2"
                            :key="n">
                            <v-card
                            class="ma-4"
                            height="180"
                            width="315">
                            <v-row>
                               <iframe width="560" height="315" src="https://www.youtube.com/embed/3olM-9vcd4M" 
                               frameborder="0" 
                               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                            </v-row>
                            </v-card>
                        </v-slide-item>
                        </v-slide-group>
                        <v-card-text>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Suscipit iure illo porro ea distinctio veritatis</p>
                            </v-card-text>
                </v-card-text>
            </v-card>
        </div>
        </div>
    </div>
</template>

<script>
import Appbar from '../app_bar.vue'
import NavDrawer from '../nav_bar.vue'
export default {
       components:{
        Appbar,
        NavDrawer,
       },
    data(){
        return{
            model:'',
        }
    }
}
</script>

<style lang="scss">
.guide_div{
    float: left;
    width: 100%;
}
</style>