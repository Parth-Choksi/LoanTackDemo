<template>
  <div class="calculation_main">
      <div>
          <v-card class="user_card">
              <v-card-title>Calculations </v-card-title> 
                <v-card-text>
                    Export To : 
                    <v-btn>Excel
                        <i class="fas fa-caret-down"></i>
                    </v-btn>
                    <v-btn class="export_btn" large color="success"> EXPORT
                    </v-btn>
                    <v-btn text class="export_btn" color="success" @click="generateReport()"> GENERATE REPORT
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
                {text: 'EMAIL',value: 'email'},
                {text: 'TOTAL CALCULATION',value: 'calculation'},
                {text: 'SAVED',value: 'save'},
                {text: 'INSTALL DATE',value: 'date'},
                {text: 'ACTIONS',value: 'action'},
            ],
            items : [
                {userid:'123',name:'Jack Smith',partnerName:'Robert Baker',email:'jacksmith@gmail.com',calculation:'5',save:'Yes',date : "Apr 9,'20-3:14 pm",action:''},
                {userid:'058',name:'Noah Martin',partnerName:'Louis King',email:'noahmartin@gmail.com',calculation:'4',save:'No',date : "Apr 9,'20-3:14 pm",action:''},
                {userid:'8786',name:'Lucas Watson',partnerName:'--',email:'lucaswatson@gmail.com',calculation:'8',save:'Yes',date : "Apr 9,'20-3:14 pm",action:''},                
                {userid:'548',name:'Oliver Ross',partnerName:'Davis Hill',email:'oliverross@gmail.com',calculation:'10',save:'Yes',date : "Apr 9,'20-3:14 pm",action:''},
                {userid:'545',name:'Ethan Fortin',partnerName:'William Scott',email:'ethanfortin@gmail.com',calculation:'3',save:'Yes',date : "Apr 9,'20-3:14 pm",action:''},
                {userid:'458',name:'Mike Rudd',partnerName:'--',email:'mikerudd@gmail.com',calculation:'5',save:'No',date : "Apr 9,'20-3:14 pm",action:''},
                {userid:'351',name:'Pete Gibbins',partnerName:'Ron Green',email:'petegibbins@gmail.com',calculation:'2',save:'Yes',date : "Apr 9,'20-3:14 pm",action:''},
                {userid:'431',name:'Dana Scottie',partnerName:'--',email:'danascottie@gmail.com',calculation:'12',save:'Yes',date : "Apr 9,'20-3:14 pm",action:''},
                {userid:'123',name:'Jack Smith',partnerName:'Robert Baker',email:'jacksmith@gmail.com',calculation:'5',save:'Yes',date : "Apr 9,'20-3:14 pm",action:''},
                {userid:'123',name:'Jack Smith',partnerName:'Robert Baker',email:'jacksmith@gmail.com',calculation:'5',save:'Yes',date : "Apr 9,'20-3:14 pm",action:''},

            ]
        }
    },
    methods:
    {
        generateReport()
        {
            this.$router.push("report")
        }
    }
}
</script>

<style>

</style>