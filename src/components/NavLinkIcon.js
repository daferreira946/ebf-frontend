import Link from 'next/link';
import { classNames } from '@/lib/classNames';

const NavLinkIcon = ({ active = false, icon, children, ...props }) => {
    const Icon = icon;

    return (
        <Link {...props}>
            <a
                className={classNames(
                    active
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'group flex items-center px-2 py-2 text-base font-medium rounded-md',
                )}>
                <Icon
                    className={classNames(
                        active
                            ? 'text-gray-300'
                            : 'text-gray-400 group-hover:text-gray-300',
                        'mr-3 flex-shrink-0 h-6 w-6',
                    )}
                    aria-hidden="true"
                />
                {children}
            </a>
        </Link>
    );
};

export default NavLinkIcon;
