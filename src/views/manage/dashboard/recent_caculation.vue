    <v-card width="90%" height="300px">
        <v-card-title>Recent Calculations</v-card-title>
        <v-divider/>
        <v-card-text>
            {{this.chartData}}
        </v-card-text>
    </v-card>

<script>
import { Pie } from 'vue-chartjs'
export default {
    extends : Pie,
    data()
    {
        return{
            chartData: {
                labels: ["fha (Purchase)","Conventional (Purchase)","Jumbo","USDA","VA","Affordability"],
                datasets: [
                    {
                        // backgroundColor:[
                        //     color = 'orange',
                        //     color = 'green',
                        //     color = 'cyan',
                        //     color = 'red',
                        //     color = 'cream',
                        //     color = 'blue',
                        // ],
                        data:[603,643,228,46,406,629],
                    }
                ]
            },
            options:{
                responsive:true,
            }
        }
    },
    // mounted()
    // {
    //     this.renderChart(this.chartData,this.options)
    // }
}
</script>

<style>

</style>