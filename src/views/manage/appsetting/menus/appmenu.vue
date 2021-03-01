<template>
    <div class="menu_dashboard_main">
        <div class="dashboard_inner_div">
            <v-row>
                <v-col cols="7">
                    <v-card>
                        <v-card-text>App Links</v-card-text>
                        <v-divider/>
                        <div class="gray">
                            <div class="one">
                                <span> <br></span>
                            </div>
                            <div class="two">
                                <h4>COMPANYWIDE LINKS</h4> 
                            </div>
                            <div class="three">
                                <h4>LIVE APP LINKS</h4>   
                            </div>
                        </div>
                        <div class="main-box">
                            <div class="box-one">
                                <ul>
                                    <li>
                                        <ul>
                                            <li class="list-name">Calculator</li>
                                            <li class="list-check"><v-checkbox></v-checkbox></li>
                                            <li class="list-check"><v-checkbox></v-checkbox></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <ul>
                                            <li class="list-name">Scan</li>
                                            <li class="list-check"><v-checkbox></v-checkbox></li>
                                            <li class="list-check"><v-checkbox></v-checkbox></li>
                                        </ul>
                                    </li>
                                     <li>
                                        <ul>
                                            <li class="list-name">Guide</li>
                                            <li class="list-check"><v-checkbox></v-checkbox></li>
                                            <li class="list-check"><v-checkbox></v-checkbox></li>
                                        </ul>
                                    </li>
                                     <li>
                                        <ul>
                                            <li class="list-name">Request a Callback</li>
                                            <li class="list-check"><v-checkbox></v-checkbox></li>
                                            <li class="list-check"><v-checkbox></v-checkbox></li>
                                        </ul>
                                    </li>
                                     <li>
                                        <ul>
                                            <li class="list-name">Dashboard</li>
                                            <li class="list-check"><v-checkbox></v-checkbox></li>
                                            <li class="list-check"><v-checkbox></v-checkbox></li>
                                        </ul>
                                    </li>
                                     <li>
                                        <ul>
                                            <li class="list-name">Saved Calculations</li>
                                            <li class="list-check"><v-checkbox></v-checkbox></li>
                                            <li class="list-check"><v-checkbox></v-checkbox></li>
                                        </ul>
                                    </li>
                                     <li>
                                        <ul>
                                            <li class="list-name">CheckLists</li>
                                            <li class="list-check"><v-checkbox></v-checkbox></li>
                                            <li class="list-check"><v-checkbox></v-checkbox></li>
                                        </ul>
                                    </li>
                                     <li>
                                        <ul>
                                            <li class="list-name">uploaded Documents</li>
                                            <li class="list-check"><v-checkbox></v-checkbox></li>
                                            <li class="list-check"><v-checkbox></v-checkbox></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <ul>
                                            <li class="list-name">Messages</li>
                                            <li class="list-check"><v-checkbox></v-checkbox></li>
                                            <li class="list-check"><v-checkbox></v-checkbox></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <ul>
                                            <li class="list-name">Notifications</li>
                                            <li class="list-check"><v-checkbox></v-checkbox></li>
                                            <li class="list-check"><v-checkbox></v-checkbox></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                        <v-card-text>
                            <v-btn class="dash_btn" color="success">SAVE</v-btn>
                            <v-card-text>The selectd options will reflect in the " Live App Dashboard Menu "</v-card-text>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="5">
                    <v-card>
                        <v-card-text>Live App Menu</v-card-text>
                        <v-divider/>
                        <v-list-item>
                            <div class="dash_menu_sec">
                            <p class="title">Calculator</p>
                            <span class="icont_div">
                                <i class="fas fa-arrow-circle-up"></i>
                                <i class="fas fa-arrow-circle-down"></i>
                            </span>
                            </div>
                        </v-list-item>
                        <v-list-item>
                            <div class="dash_menu_sec">
                            <p class="title">Scan</p>
                            <span class="icont_div">
                                <i class="fas fa-arrow-circle-up"></i>
                                <i class="fas fa-arrow-circle-down"></i>
                            </span>
                            </div>
                        </v-list-item>
                        <v-list-item>
                            <div class="dash_menu_sec">
                            <p class="title">Guide</p>
                            <span class="icont_div">
                                <i class="fas fa-arrow-circle-up"></i>
                                <i class="fas fa-arrow-circle-down"></i>
                            </span>
                            </div>
                        </v-list-item>
                        <v-list-item>
                            <div class="dash_menu_sec">
                            <p class="title">Request a Callback</p>
                            <span class="icont_div">
                                <i class="fas fa-arrow-circle-up"></i>
                                <i class="fas fa-arrow-circle-down"></i>
                            </span>
                            </div>
                        </v-list-item>
                        <v-list-item>
                            <div class="dash_menu_sec">
                            <p class="title">Apply Online</p>
                            <span class="icont_div">
                                <i class="fas fa-arrow-circle-up"></i>
                                <i class="fas fa-arrow-circle-down"></i>
                            </span>
                            </div>
                        </v-list-item>
                        <v-divider/>
                        <v-card-text>
                            <v-btn color="success">SAVE</v-btn>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12">
                    <v-card>
                        <v-card-title>Custom Links</v-card-title>
                        <v-divider/>
                        <div class="custom_link_sec">
                            <label>URL</label>
                            <v-text-field placeholder="https://" outlined></v-text-field>
                            <label>Link Text</label>
                            <v-text-field placeholder="Link Text" outlined></v-text-field>
                            <label>Icon</label> 
                            <v-card-text class="links_icon">
                                <i class="fas fa-file-alt"></i>
                                <i class="fas fa-comment-alt"></i>
                                <i class="fas fa-bars"></i>
                                <i class="fas fa-phone-alt"></i>
                                <i class="fas fa-bell"></i>
                                <i class="fas fa-clone"></i>
                                <i class="fas fa-th-large"></i>
                                <i class="fas fa-calculator"></i>
                                <i class="fas fa-retweet"></i>
                                <i class="fas fa-clipboard-list"></i>
                                <i class="fas fa-bookmark"></i>
                                <i class="fas fa-id-card-alt"></i>
                                <i class="fas fa-id-card-alt"></i>
                                <i class="fas fa-chart-line"></i>
                                <i class="fas fa-video"></i>
                            </v-card-text>
                        </div>
                        <v-divider/>
                        <v-card-text>
                            <v-btn class="btn_class" outlined color="success">ADD</v-btn>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script>
export default {
    data()
    {
        return{
            checkbox:'',
        }
    }
}
</script>

<style lang="scss">
i{
    padding-left: 20px;
    font-size: 30px;
}

.custom_link_sec{
    width: 100%;
}

.dash_menu_sec
{
    width: 100%;
    float: left;
    padding-top: 10px;
}

.title{
    float: left;
}

.icont_div{
    float: right;
    i{
        margin-right: 5px;
        font-size: 18px;
    }
}

.dash_btn{
    margin: 15px 0 0 20px;
}

.cbox_heading{
    text-align: center;
    margin-left: 250px;
}
.dashboard_inner_div{
    margin-top: 20px;
    margin-left: 20px;
}
.gray {
    width: 100%;
    float: left;
    min-height: 50px;
    background-color: rgba(0,0,0,0.3);
    .one {
        width: 50%;
        float: left;
    }
    .two,.three {
        width: 25%;
        float: left;
        h4 {
            line-height: 50px;
            text-align: left;
        }
    }
}
.box-one {
    float: left;
    width: 100%;
}

.main-box {
    width: 100%;
    float: left;
    .box-one ul {
        li {
            width: 100%;
            list-style-type: none;
            display: inline-block;
            margin-top: 7px;
            input {
                opacity: 1 !important;
            }
            .list-name {
                width: 50%;
                padding-left: 30px;
            }
            .list-check {
                width: 25%;
                vertical-align: middle;
                .v-input__control {
                    margin: 0px !important;
                }
                .v-messages {
                    display: none !important;
                }
            }
        }
    }
}
.v-application ul {
    padding: 0px !important;
}

</style>