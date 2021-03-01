import Vue from 'vue';
import Vuerouter from 'vue-router'
import Login from '../views/home/login.vue'
import SignUp from '../views/home/signup.vue'
import ForgotPassword from '../views/home/forgot_password.vue'
import AppBar from '../views/manage/app_bar.vue'
import dashboardIndex from '../views/manage/dashboard/index.vue'
import ActivityUser from '../views/manage/activity/users.vue'
import ActivityIndex from '../views/manage/activity/activity_index.vue'
import ReportDialog from '../views/manage/activity/report_dialog.vue'
import Calculation from '../views/manage/activity/calculations.vue'
import UserReportDialog from '../views/manage/activity/user_report.vue'
import Callback from '../views/manage/activity/callback.vue'
import Documents from '../views/manage/activity/documents.vue'
import ProfileIndex from '../views/manage/appsetting/profile/profile_index.vue'
import ProfileBio from '../views/manage/appsetting/profile/bio.vue'
import ProfileContact from '../views/manage/appsetting/profile/contact.vue'
import Color from '../views/manage/appsetting/color.vue'
import MenuIndex from '../views/manage/appsetting/menus/menu_index.vue'
import AppsettigIndex from '../views/manage/appsetting/appsetting_index.vue'
import LoanFha from '../views/manage/loansetting/calculator/fha.vue'
import LoanIndex from '../views/manage/loansetting/calculator/loansetting_index.vue'
import LoanMain from '../views/manage/loansetting/loan_main_index.vue'
Vue.use(Vuerouter);

const routes = [
    {
        path: '/',
        name: 'login',
        component: Login,
    },
    {
        path: '/signup',
        name: 'signup',
        component: SignUp,
    },
    {
        path: '/forgot_password',
        name: 'forgot_password',
        component: ForgotPassword,
    },
    {
        path: '/app_bar',
        name: 'app_bar',
        component: AppBar,
    },
    {
        path: '/dashboard/index',
        name: 'dashboard_index',
        component: dashboardIndex,
    },
    {
        path: '/activity/index',
        name: 'activity_index',
        component: ActivityIndex,
    },
    {
        path: '/activity/users',
        name: 'activity_users',
        component: ActivityUser,
    },
    {
        path: '/activity/report',
        name: 'activity_report',
        component: ReportDialog,
    },
    {
        path: '/activity/userreport',
        name: 'activity_user_report',
        component: UserReportDialog,
    },
    {
        path: '/activity/calculation',
        name: 'activity_calculation',
        component: Calculation,
    },
    {
        path: '/activity/callback',
        name: 'activity_callback',
        component: Callback,
    },
    {
        path: '/activity/documents',
        name: 'activity_documents',
        component: Documents,
    },
    {
        path: '/profile/profileindex',
        name: 'profile_index',
        component: ProfileIndex,
    },
    {
        path: '/profile/bio',
        name: 'profile_bio',
        component: ProfileBio,
    },
    {
        path: '/profile/contact',
        name: 'profile_contact',
        component: ProfileContact,
    },
    {
        path: '/appsetting/color',
        name: 'appsetting_color',
        component: Color,
    },
    {
        path: '/menu/menuindex',
        name: 'menu_index',
        component: MenuIndex,
    },
    {
        path: '/appsetting/index',
        name: 'appsetting_index',
        component: AppsettigIndex,
    },
    {
        path: '/loansetting/fha',
        name: 'loansetting_fha',
        component: LoanFha,
    },
    {
        path: '/loansetting/loansettingindex',
        name: 'loansetting_index',
        component: LoanIndex,
    },
    {
        path: '/loansetting/loanmain',
        name: 'loan_main',
        component: LoanMain,
    },

];

const router = new Vuerouter({
    mode: 'history',
    routes,
});

export default router;