'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();

    const leftNavItems = [
        { label: '_hello', link: '/' },
        { label: '_about-me', link: 'about-me' },
        { label: '_projects', link: 'projects' },
    ];

    const rightNavItems = [
        { label: '_contact_me', link: 'contact-me' },
    ];

    const isActive = (path: string) => {
        if (path === '/') {
            return pathname === path;
        }
        return pathname === `/${path}`;
    };

    return (
        <header className="flex items-center justify-between h-[52px] bg-background border-b border-border-gray font-firaCode">
            <div className="min-w-[300px] h-full flex items-center px-4 text-secondary-4 border-r border-border-gray">
                Le Ngoc Truong
            </div>
            <nav className="h-full flex-1 flex justify-between">
                <ul className="flex h-full">
                    {leftNavItems.map((item, index) => (
                        <li key={index} className="h-full border-r border-border-gray">
                            <Link
                                href={item.link}
                                className={`flex justify-center items-center h-full px-8 border-b-2 hover:text-secondary-4 hover:border-orange-500 ${isActive(item.link) ? "border-b-2 border-orange-500 text-secondary-4" : "border-transparent"
                                    }`}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <ul className="flex h-full">
                    {rightNavItems.map((item, index) => (
                        <li key={index} className="h-full border-l border-border-gray">
                            <Link
                                href={item.link}
                                className={`flex justify-center items-center h-full px-8 border-b-2 hover:text-secondary-4 hover:border-orange-500 ${isActive(item.link) ? "border-b-2 border-orange-500 text-secondary-4" : "border-transparent"
                                    }`}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}