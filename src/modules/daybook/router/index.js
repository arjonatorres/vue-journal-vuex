export default {
    name: 'daybook',
    component: () => import(/* webpackChunckName: "daybook" */ '@/modules/daybook/layouts/DayBookLayout.vue'),
    children: [
        {
            path: '',
            name: 'no-entry',
            component: () => import(/* webpackChunckName: "daybook-no-entry" */ '@/modules/daybook/views/NoEntrySelected.vue'),
        },
        {
            path: ':id',
            name: 'entry',
            component: () => import(/* webpackChunckName: "entry" */ '@/modules/daybook/views/EntryView.vue'),
        }
    ]
}