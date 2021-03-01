<template>
    <div class="user_main">
        <div>
            <v-card class="user_card" elevation="1" >
                <v-card-title>Users </v-card-title> 
                <v-card-text>
                    Export To : 
                    <v-btn>Excel
                        <i class="fas fa-caret-down"></i>
                    </v-btn>
                    <v-btn class="export_btn" large color="success"> EXPORT
                    </v-btn>
                    <v-btn class="export_btn" outlined color="success"> PUSH NOTIFICATION
                    </v-btn>
                    <v-btn text class="export_btn" color="success" @click="generateReport()"> GENERATE REPORT
                    </v-btn>
                    <div class="search_div">
                        <p class="p_search"> Search</p>
                        <v-text-field class="search_text"  solo append-icon="fas fa-search"></v-text-field>
                    </div>
                    <v-divider class="divider_class"/>
                    <v-card-text>
                        <div class="user_table">
                            <v-data-table :headers="headers" :items="items">
                            </v-data-table>
                        </div> 
                    </v-card-text>
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
            headers:[
                {text: 'USER ID',align: 'start',value: 'userid'},
                {text: 'NAME',value: 'name'},
                {text: 'PARTNER',value: 'partnerName'},
                {text: 'EMAIL',value: 'email'},
                {text: 'INSTALL DATE',value: 'date'},
                {text: 'ACTIONS',value: 'action'},
            ],
            items : [
                {userid:'123',name:'Jack Smith',partnerName:'Robert Baker',email:'jacksmith@gmail.com',date : "Apr 9,'20-3:14 pm",action:''},
                {userid:'058',name:'Noah Martin',partnerName:'Louis King',email:'noahmartin@gmail.com',date : "Apr 9,'20-3:14 pm",action:''},
                {userid:'8786',name:'Lucas Watson',partnerName:'--',email:'lucaswatson@gmail.com',date : "Apr 9,'20-3:14 pm",action:''},                
                {userid:'548',name:'Oliver Ross',partnerName:'Davis Hill',email:'oliverross@gmail.com',date : "Apr 9,'20-3:14 pm",action:''},
                {userid:'545',name:'Ethan Fortin',partnerName:'William Scott',email:'ethanfortin@gmail.com',date : "Apr 9,'20-3:14 pm",action:''},
                {userid:'458',name:'Mike Rudd',partnerName:'--',email:'mikerudd@gmail.com',date : "Apr 9,'20-3:14 pm",action:''},
                {userid:'351',name:'Pete Gibbins',partnerName:'Ron Green',email:'petegibbins@gmail.com',date : "Apr 9,'20-3:14 pm",action:''},
                {userid:'431',name:'Dana Scottie',partnerName:'--',email:'danascottie@gmail.com',date : "Apr 9,'20-3:14 pm",action:''},
                {userid:'123',name:'Jack Smith',partnerName:'Robert Baker',email:'jacksmith@gmail.com',date : "Apr 9,'20-3:14 pm",action:''},
                {userid:'123',name:'Jack Smith',partnerName:'Robert Baker',email:'jacksmith@gmail.com',date : "Apr 9,'20-3:14 pm",action:''},

            ]
        }
    },
    methods:
    {
        generateReport()
        {
            this.$router.push("userreport")
        }
    }
}
</script>

<style lang="scss">
.user_card{
    width: 100%;
    height: 100%;
}

.export_btn{
    margin: 0 0 0 40px;
}

.user_table .v-btn:before{
    opacity: 1!important;
}

.search_div{
    float: right;
    margin-top: -15px;
}

.search_text{
    float: left;
    margin-left: 10px;
}

.search_text .v-input__control{
    min-height: 35px !important;
}

.v-text-field__details{
    display: none !important;
}

.v-input__slot{
    margin: 0 !important;;
}
.p_search{
    margin-bottom: 0 !important;
    float: left;
    line-height: 55px;
}

.v-icon.v-icon{
    font-size: 15px !important;
}
</style>
