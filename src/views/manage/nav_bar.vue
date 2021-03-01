<template>
    <v-navigation-drawer app dark >
        <v-list-item>
            <!-- For Logo of LoanTack -->
        </v-list-item>
        <v-divider></v-divider>

        <v-list>
            <v-list-group
                v-for="item in items"
                :key="item.title"
                v-model="item.active"
                :prepend-icon="item.action"
                link :to="item.link"
            >
                <template v-slot:activator >
                <v-list-item-content>
                    <v-list-item-title  v-text="item.title"></v-list-item-title>
                </v-list-item-content>
                </template>

                <v-list-item
                v-for="child in item.items"
                :key="child.title"
                link
                :to="child.link1"
                >
                <v-list-item-content>
                    <v-list-item-title v-text="child.title"></v-list-item-title>
                </v-list-item-content>
                </v-list-item>
            </v-list-group>
        </v-list>        
    </v-navigation-drawer>
</template>

<script>
export default {
    data()
    {
        return{
            items: [
                {
                action: 'fab fa-dashcube',
                title: 'Dashboard',
                },
                {
                action: 'fab fa-accusoft',
                items: [
                    { title: 'Users' ,link1: '/activity/users'},
                    { title: 'Calculation',link1: '/activity/calculation' },
                    { title: 'Callback Request',link1: '/activity/callback' },
                    { title: 'Documents',link1: '/activity/documents' },
                ],
                title: 'Activity',
                link:'/activity/users',
                },
                {
                action: 'fab fa-app-store',
                items: [
                    { title: 'Profile',link1: '/profile/profileindex' },
                    { title: 'Color Scheme' ,link1: '/appsetting/color' },
                    { title: 'Menus', link1: '/menu/menuindex' },
                ],
                title: 'App Settings',
                },
                {
                action: 'fas fa-cog',
                items: [
                    { title: 'Calculators',link1: '/loansetting/loansettingindex'  },
                    { title: 'Fees',link1: '/loansetting/loanmain' },
                    ],
                title: 'Loan Settings',
                },
                {
                action: 'fas fa-file',
                items: [
                    { title: 'Learning Center' },
                    { title: 'Loan Programs' },
                    { title: 'CheckLists' },
                    { title: 'Legal' },
                    ],
                title: 'Content',
                },
                {
                action: 'fas fa-bullhorn',
                items: [
                    { title: 'Share App' },
                    { title: 'QR Codes' },
                    { title: 'Email Signature' },
                    { title: 'Auto Responder' },
                    { title: 'Widgets' },
                    ],
                title: 'Marketing',
                },
                {
                action: 'fas fa-hands-helping',
                title: 'Co-Branding',
                },
                {
                action: 'fas fa-gem',
                title: 'Branded App',
                },
                {
                action: 'fas fa-comment-alt',
                items: [
                    { title: 'Guide' },
                    { title: 'FAQs' },
                    ],
                title: 'Support',
                },
            ],
        }
    }
}
</script>

<style>

</style>