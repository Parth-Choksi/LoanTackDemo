<template>
    <div class="branded_app_main">
         
        <div class="branded_app_middle">
            <v-card class="max_card">
                <v-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Deserunt voluptates vero esse veritatis eius mollitia quae, 
                    incidunt necessitatibus alias voluptatum dignissimos soluta in aspernatur cupiditate, 
                    officiis magni numquam laudantium! Voluptate. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Officiis nesciunt in beatae asperiores delectus minus quas, fugit voluptate earum tempora laborum 
                     magnam obcaecati at, ea praesentium amet saepe accusantium illo!<br><br>
                     
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                     Repellendus soluta sit quaerat esse vel placeat quis ullam quisquam eos repudiandae fugiat ab magni rerum,
                      corporis eum voluptate enim! Illo, et! Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                      Hic odio eligendi in praesentium, quaerat corrupti. Non vel dolore voluptatum et fuga nulla illum 
                      maiores esse asperiores at aspernatur, possimus quam? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                       Praesentium veniam similique nostrum quo, temporibus impedit. Amet expedita nemo maxime soluta corporis ad
                        hic dolores, aliquid exercitationem incidunt voluptate assumenda sunt. Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit. Ducimus deserunt sunt fugit natus maiores similique. Iusto veniam
                         voluptas molestias magnam, ex deleniti quia voluptates repellat doloribus quos rerum reiciendis?
                          Facilis.<br><br>

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Deserunt voluptates vero esse veritatis eius mollitia quae, 
                    incidunt necessitatibus alias voluptatum dignissimos soluta in aspernatur cupiditate, 
                    officiis magni numquam laudantium! Voluptate. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Officiis nesciunt in beatae asperiores delectus minus quas, fugit voluptate earum tempora laborum 
                     magnam obcaecati at, ea praesentium amet saepe accusantium illo!<br><br>      

                     Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Deserunt voluptates vero esse veritatis eius mollitia quae, 
                    incidunt necessitatibus alias voluptatum dignissimos soluta in aspernatur cupiditate, 
                    officiis magni numquam laudantium! Voluptate. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Officiis nesciunt in beatae asperiores delectus minus quas, fugit voluptate earum tempora laborum 
                     magnam obcaecati at, ea praesentium amet saepe accusantium illo!
                     </v-card-text>
                     <v-divider class="divider_class"/>
                     <v-card-text>
                        <v-btn class="btn_class" color="success" @click="gotoApply()">APPLY</v-btn>
                     </v-card-text>
            </v-card>
        </div>
    </div>
</template>

<script>
export default {

    data()
    {
        return{
        }
    },
    methods:
    {
        gotoApply()
        {
            this.$router.push('apply_branded');
        }
    }
}   
</script>

<style lang="scss">
.max_card{
    padding: 15px;
}
</style>