import React from 'react';
import { useState } from 'react';
import { useAuth } from '@/hooks/auth';
import {
    CalendarIcon,
    ChartBarIcon,
    FolderIcon,
    HomeIcon,
    InboxIcon,
    MenuIcon,
    UserAddIcon,
} from '@heroicons/react/outline';
import Sidebar from '@/components/Layouts/Sidebar';
import { useRouter } from 'next/router';

const AppLayout = ({ header, children }) => {
    const { user, logout } = useAuth({ middleware: 'auth' });
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const router = useRouter();

    const navigation = [
        {
            name: 'Dashboard',
            href: '/dashboard',
            icon: HomeIcon,
            current: router.pathname === '/dashboard',
        },
        {
            name: 'Register',
            href: '/register',
            icon: UserAddIcon,
            current: router.pathname === '/register',
        },
        {
            name: 'Projects',
            href: '#',
            icon: FolderIcon,
            current: router.pathname === '/projects',
        },
        {
            name: 'Calendar',
            href: '#',
            icon: CalendarIcon,
            current: router.pathname === '/calendar',
        },
        {
            name: 'Documents',
            href: '#',
            icon: InboxIcon,
            current: router.pathname === '/documents',
        },
        {
            name: 'Reports',
            href: '#',
            icon: ChartBarIcon,
            current: router.pathname === '/reports',
        },
    ];

    const userNavigation = [
        { name: 'Your Profile', href: '#' },
        { name: 'Sign out', href: '#', event: logout },
    ];

    return (
        <div>
            <Sidebar
                user={user}
                setSidebarOpen={setSidebarOpen}
                sidebarOpen={sidebarOpen}
                navigation={navigation}
                userNavigation={userNavigation}
            />

            <div className="md:pl-64 flex flex-col flex-1">
                <div className="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-gray-100">
                    <button
                        type="button"
                        className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(true)}>
                        <span className="sr-only">Open sidebar</span>
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <main className="flex-1">
                    <div className="py-6">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                            {header}
                        </div>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                            {/* Replace with your content */}
                            {children}
                            {/* /End replace */}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AppLayout;
