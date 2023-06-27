import { MenuItem } from "../pages/dashboard/models/menu.models";

export class Menu {
    public static pages: MenuItem[] = [
        {
            group: 'Home',
            separator: true,
            items: [
                {
                    icon: 'assets/icons/outline/chart-pie.svg',
                    label: 'Dashboard',
                    route: '/dashboard',
                    children: [{ label: 'perfil', route: '/dashboard/perfil' }],
                },
                {
                    icon: 'assets/icons/outline/lock-closed.svg',
                    label: 'Credenciales',
                    route: '/auth',
                    children: [
                        // { label: 'Sign up', route: '/auth/sign-up' },
                        // { label: 'Sign in', route: '/auth/sign-in' },
                        { label: 'Cambiar contraseña', route: 'http://tuclave.uniminuto.edu' },
                    ],
                },
            ],
        },
        {
            group: 'Eventos',
            separator: true,
            items: [
                {
                    icon: 'assets/icons/outline/calendar-event-activity.svg',
                    label: 'Disponibles',
                    route: '/eventos',
                },
                {
                    icon: 'assets/icons/outline/calendar-event-available.svg',
                    label: 'Asistencia',
                    route: '/eventos/asistencia',
                },
                {
                    icon: 'assets/icons/outline/calendar-event-busy.svg',
                    label: 'Cancelar asistencia',
                    route: '/eventos/cancelar',
                },
            ],
        },
        {
            group: 'Bicicletero',
            separator: true,
            items: [
                {
                    icon: 'assets/icons/outline/bicicleta.svg',
                    label: 'Solicitudes',
                    route: '/bicicletero',
                },
                {
                    icon: 'assets/icons/outline/position.svg',
                    label: 'Asignación',
                    route: '/bicicletero/asignado',
                },
                // {
                //     icon: 'assets/icons/outline/folder.svg',
                //     label: 'Horario',
                //     route: '/Horario',
                //     children: [
                //         { label: 'Current Files', route: '/folders/current-files' },
                //         { label: 'Downloads', route: '/folders/download' },
                //         { label: 'Trash', route: '/folders/trash' },
                //     ],
                // },
            ],
        },
    ];
}
