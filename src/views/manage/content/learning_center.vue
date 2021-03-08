<template>
    <div class="main_div">
        <div class="learning_center_main">
            <div class="learning_center_header">
                <h1>Learning Center</h1>
            </div>
            <v-divider class="divider_class"/>
            <div class="learning_center_middle">
                <v-card width="100%">
                    <v-card-text>
                <v-data-table  :headers="headers" :items="items">
                </v-data-table>
                    </v-card-text>
                    <v-card-text>
                        <v-btn class="btn_class" color="success" @click="addNew()">ADD NEW</v-btn>
                        <v-btn text color="success">RESTORE DEFAULTS</v-btn>
                    </v-card-text>
                </v-card>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data()
    {
        return{
            headers:[
                {text:'Title',align: 'start',value:'title'},
                {text:'Action',value:'action'}
            ],
            items:[
                {title:'Is a Mortage Right For You ?',action:<i class="fas fa-eye"></i>},
                {title:'What Can I Afford ?',action:<i class="fas fa-eye"></i>},
                {title:'Loan Processing ',action:<i class="fas fa-eye"></i>},
                {title:'Mortage Closing ',action:<i class="fas fa-eye"></i>},
                {title:'Choosing a Home',action:<i class="fas fa-eye"></i>},
                {title:'Choosing a Home',action:<i class="fas fa-eye"></i>}
            ]
        }
    }
}
</script>

<style lang="scss">
.learning_center_middle{
    margin: 40px;
}
</style>