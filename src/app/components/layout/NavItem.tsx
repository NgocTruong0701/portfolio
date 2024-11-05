import { useActivePath } from '@/hooks/useActivePath';
import Link from 'next/link';
import React from 'react';

interface NavItemProps {
    label: string;
    link: string;
}

const NavItem: React.FC<NavItemProps> = ({ label, link }) => {
    const isActive = useActivePath(link);

    return (
        <li className="h-full border-r border-gray-800 h-full">
            <Link
                href={link}
                className={`flex gap-8 justify-center items-center h-full px-6 border-b-2 border-transparent hover:text-secondary-4 hover:border-orange-500 ${isActive ? "border-b-2 border-orange-500 text-secondary-4" : ""
                    }`}
            >
                {label}
            </Link>
        </li>
    );
};

export default NavItem;