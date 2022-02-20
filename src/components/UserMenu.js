import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { classNames } from '@/lib/classNames';

const UserMenu = ({ user, userNavigation }) => {
    return (
        <Menu
            as="div"
            className="flex-shrink-0 flex justify-center border-t border-gray-800 p-4">
            <div>
                <Menu.Button className="max-w-xs flex text-sm rounded-full focus:outline-none item-center">
                    <span className="sr-only">Open user menu</span>
                    <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                    />
                    <div className="ml-3">
                        <p className="text-sm font-medium text-white">
                            {user?.username}
                        </p>
                        <p className="text-sm font-medium text-gray-400 group-hover:text-gray-300">
                            {user?.email}
                        </p>
                    </div>
                </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95">
                <Menu.Items className="bottom-0 origin-top-right absolute left-0 float-left mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none">
                    {userNavigation.map(item => (
                        <Menu.Item key={item.name}>
                            {({ active }) => (
                                <a
                                    href={item.href}
                                    onClick={item.event}
                                    className={classNames(
                                        active ? 'bg-gray-100' : '',
                                        'block py-2 px-4 text-sm text-gray-700',
                                    )}>
                                    {item.name}
                                </a>
                            )}
                        </Menu.Item>
                    ))}
                </Menu.Items>
            </Transition>
        </Menu>
    );
};

export default UserMenu;
