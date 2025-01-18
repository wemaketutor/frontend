import { createRouter, createWebHistory } from 'vue-router'
import ItemPage from "@/views/ItemPage.vue";
import LoginPage from "@/views/LoginPage.vue";
import RegisterPage from "@/views/RegisterPage.vue";
import StudentsPage from "@/views/StudentsPage.vue";
import ResourcePage from "@/views/ResourcePage.vue";
import ProfilePage from "@/views/ProfilePage.vue";
import TeacherPage from "@/views/TeacherPage.vue";
import QAPage from "@/views/QAPage.vue";
import AboutPage from "@/views/AboutPage.vue";
import TimeTablePage from "@/views/TimeTablePage.vue";


export default createRouter({
    history: createWebHistory(),

    routes: [
        {
            path: '/',
            name: 'main',
            component: ItemPage,
        },
        {
            path: '/login',
            name: 'login',
            component: LoginPage,
        },
        {
            path: '/register',
            name: 'register',
            component: RegisterPage,
        },
        {
            path: '/teacher',
            name: 'teacher',
            component: TeacherPage,
        },
        {
            path: '/students',
            name: 'students',
            component: StudentsPage,
        },
        {
            path: '/resources',
            name: 'resources',
            component: ResourcePage,
        },
        {
            path: '/profile',
            name: 'profile',
            component: ProfilePage,
        },
        {
            path: '/about',
            name: 'about',
            component: AboutPage,
        },
        {
            path: '/qa',
            name: 'qa',
            component: QAPage,
        },
        {
            path: '/timetable',
            name: 'timetable',
            component: TimeTablePage,
        },
    ]
})
