import Vue from 'vue';
import Vuerouter from 'vue-router'
import Login from '../views/home/login.vue'
import SignUp from '../views/home/signup.vue'
import ForgotPassword from '../views/home/forgot_password.vue'
import VerificationCode from '../views/home/verification.vue'
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
import LearningCenter from '../views/manage/content/learning_center.vue'
import ShareApp from '../views/manage/marketing/shareapp.vue'
import QrCode from '../views/manage/marketing/QRcodes.vue'
import EmailSignature from '../views/manage/marketing/email_signature.vue'
import UploadImage from '../views/manage/marketing/upload_image.vue'
import AutoResponder from '../views/manage/marketing/auto_responder.vue'
import CoBranding from '../views/manage/cobranding/co_branding.vue'
import AddCoBranding from '../views/manage/cobranding/add_co_branding.vue'
import BradedIndex from '../views/manage/brandedapp/branded_index.vue'
import ApplyBranded from '../views/manage/brandedapp/apply_branded.vue'
import Guide from '../views/manage/support/guide.vue'
import FAQS from '../views/manage/support/FAQ.vue'
import Subscription from '../views/manage/menufiles/subscription.vue'
import Subscribe from '../views/manage/menufiles/subscribe.vue'
import Account from '../views/manage/menufiles/myaccount.vue'
import Billing from '../views/manage/menufiles/billing_history.vue'
import Setting from '../views/manage/menufiles/setting.vue'
import PushNotification from '../views/manage/activity/pushnotification.vue'
import Widgets from '../views/manage/marketing/widgets.vue'
import Quill from '../views/manage/support/quill.vue'

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
        path: '/verification',
        name: 'verification',
        component: VerificationCode,
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
        path: '/activity/pushnotification',
        name: 'activity_notification',
        component: PushNotification,
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
    {
        path: '/content/learning_center',
        name: 'learning_center',
        component: LearningCenter,
    },
    {
        path: '/marketing/shareapp',
        name: 'shareapp',
        component: ShareApp,
    },
    {
        path: '/marketing/qrcode',
        name: 'qrcode',
        component: QrCode,
    },
    {
        path: '/marketing/email',
        name: 'email_signature',
        component: EmailSignature,
    },
    {
        path: '/marketing/uploadimage',
        name: 'upload_image',
        component: UploadImage,
    },
    {
        path: '/marketing/autoresponder',
        name: 'auto_responder',
        component: AutoResponder,
    },
    {
        path: '/cobranding/co_branding',
        name: 'co_branding',
        component: CoBranding,
    },
    {
        path: '/cobranding/add_co_branding',
        name: 'add_co_branding',
        component: AddCoBranding,
    },
    {
        path: '/brandedapp/branded_index',
        name: 'branded_index',
        component: BradedIndex,
    },
    {
        path: '/brandedapp/apply_branded',
        name: 'branded_apply',
        component: ApplyBranded,
    },
    {
        path: '/support/guide',
        name: 'guide',
        component: Guide,
    },
    {
        path: '/support/faqs',
        name: 'faqs',
        component: FAQS,
    },
    {
        path: '/subscription',
        name: 'subscription',
        component: Subscription,
    },
    {
        path: '/subscribe',
        name: 'subscribe',
        component: Subscribe,
    },
    {
        path: '/account',
        name: 'account',
        component: Account,
    },
    {
        path: '/billinghistory',
        name: 'bill_history',
        component: Billing,
    },
    {
        path: '/setting',
        name: 'setting',
        component: Setting,
    },
    {
        path: '/marketing/widgets',
        name: 'widgets',
        component: Widgets,
    },
    {
        path: '/quill',
        name: 'quill',
        component: Quill,
    },

];

const router = new Vuerouter({
    mode: 'history',
    routes,
});

export default router;