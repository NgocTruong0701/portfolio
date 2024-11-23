'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Icon from "../icons";
import Footer from "./Footer";

export default function Header() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        <>
            {/* Mobile Header */}
            <header className="md:hidden flex items-center justify-between h-[52px] bg-background border-b border-border-gray font-firaCode">
                <div className="px-4 text-secondary-1">
                    le ngoc truong
                </div>
                <button
                    onClick={() => setIsMenuOpen(true)}
                    className="px-4"
                >
                    <Icon name="Menu" className="w-6 h-6 text-secondary-1" />
                </button>
            </header>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="md:hidden fixed inset-0 bg-background z-50 font-firaCode flex flex-col justify-between">
                    <div>
                        <div className="flex items-center justify-between h-[52px] border-b border-border-gray px-4">
                            <span className="text-secondary-4">le ngoc truong</span>
                            <button onClick={() => setIsMenuOpen(false)}>
                                <Icon name="Close" className="w-6 h-6 text-secondary-1" />
                            </button>
                        </div>
                        <nav>
                            <ul>
                                {(leftNavItems.concat(rightNavItems)).map((item, index) => (
                                    <li key={index} className="border-b border-border-gray px-4 py-3">
                                        <Link
                                            href={item.link}
                                            className="text-secondary-1 hover:text-secondary-4"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                    <Footer />
                </div>
            )}

            {/* Desktop header */}
            <header className="hidden md:flex items-center justify-between h-[52px] bg-background border-b border-border-gray font-firaCode">
                <div className="min-w-[300px] h-full flex items-center px-4 text-secondary-1 border-r border-border-gray">
                    le ngoc truong
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
        </>
    )
}