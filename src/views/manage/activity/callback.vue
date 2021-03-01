<template>
    <div class="callback_main">
        <div>
          <v-card class="user_card">
              <v-card-title>Callback Request</v-card-title> 
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
                {text: 'Contact',value: 'contact'},
                {text: 'Comments',value: 'comments'},
                {text: 'Best Time To Call',value: 'time'},
            ],
            items : [
                {userid:'123',name:'Jack Smith',contact:'1234567890',comments:'Hi,are my documents good to go',time:'Morning'},
                {userid:'058',name:'Noah Martin',contact:'786654354',comments:'When do i upload my documents',time:'Evening'},
                {userid:'8786',name:'Lucas Watson',contact:'134564534',comments:'what are the documents i have to upload',time:'ASAP'},           
                {userid:'548',name:'Oliver Ross',contact:'123456654',comments:'Hi,are my documents good to go',time:'Morning'},
                {userid:'545',name:'Ethan Fortin',contact:'876542343',comments:'Hi,are my documents good to go',time:'Morning'},
                {userid:'458',name:'Mike Rudd',contact:'876544232',comments:'Hi,are my documents good to go',time:'Morning'},
                {userid:'351',name:'Pete Gibbins',contact:'123452324',comments:'Hi,are my documents good to go',time:'Morning'},
                {userid:'431',name:'Dana Scottie',contact:'987654534',comments:'Hi,are my documents good to go',time:'Morning'}, 
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