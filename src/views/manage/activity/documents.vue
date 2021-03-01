<template>
    <div class="document_main">
        <div>
            <v-card class="user_card" elevation="1" >
                <v-card-title>Documents </v-card-title> 
                <v-card-text>
                    Export To : 
                    <v-btn>Excel
                        <i class="fas fa-caret-down"></i>
                    </v-btn>
                    <v-btn class="export_btn" large color="success"> EXPORT
                    </v-btn>
                    <div class="search_div">
                        <p class="p_search"> Search</p>
                        <v-text-field class="search_text"  solo append-icon="fas fa-search">
                        </v-text-field>
                    </div>
                    <v-divider class="divider_class"/>
                    
                    <v-card-text>
                        <div class="user_table">
                            <v-data-table show-select class="elevation-1" :headers="headers" :items="items">
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
                {text: 'DOCUMENT NAME',value: 'document'},
                {text: 'DATE',value: 'date'},
                {text: 'ACTIONS',value: 'action'},
            ],
            items : [
                {userid:'123',name:'Jack Smith',partnerName:'Robert Baker',document:"Jack's ID",date : "Apr 9,'20-3:14 pm",action:''},
                {userid:'058',name:'Noah Martin',partnerName:'Louis King',document:'Rental Insurance',date : "Apr 9,'20-3:14 pm",action:''},
                {userid:'8786',name:'Lucas Watson',partnerName:'--',document:'Health Insurance',date : "Apr 9,'20-3:14 pm",action:''},                
                {userid:'548',name:'Oliver Ross',partnerName:'Davis Hill',document:"Oliver's Driving ID",date : "Apr 9,'20-3:14 pm",action:''},
                {userid:'545',name:'Ethan Fortin',partnerName:'William Scott',document:'Annual Taxes',date : "Apr 9,'20-3:14 pm",action:''},
                {userid:'458',name:'Mike Rudd',partnerName:'--',document:"Mike's Account Details",date : "Apr 9,'20-3:14 pm",action:''},
                {userid:'351',name:'Pete Gibbins',partnerName:'Ron Green',document:'Pete Credit Score',date : "Apr 9,'20-3:14 pm",action:''},
                {userid:'431',name:'Dana Scottie',partnerName:'--',document:'Dana Driving',date : "Apr 9,'20-3:14 pm",action:''},
                {userid:'123',name:'Jack Smith',partnerName:'Robert Baker',document:'',date : "Apr 9,'20-3:14 pm",action:''},
                {userid:'123',name:'Jack Smith',partnerName:'Robert Baker',document:'',date : "Apr 9,'20-3:14 pm",action:''},

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

<style>

</style>