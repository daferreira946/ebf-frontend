import React from 'react';
import NavLinkIcon from '@/components/NavLinkIcon';

const Navigation = ({ navigation }) => {
    return (
        <nav className="mt-5 flex-1 px-2 space-y-1">
            {navigation.map(item => (
                <NavLinkIcon
                    key={item.name}
                    href={item.href}
                    icon={item.icon}
                    active={item.current}>
                    {item.name}
                </NavLinkIcon>
            ))}
        </nav>
    );
};

export default Navigation;
