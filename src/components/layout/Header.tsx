'use client'
import Link from "next/link";
import NavItem from "./NavItem";
import { useActivePath } from "@/hooks/useActivePath";

export default function Header() {
    const navItems = [
        { label: '_hello', link: '/' },
        { label: '_about-me', link: 'about-me' },
        { label: '_projects', link: 'projects' },
    ];
    const contactItem = {
        label: '_contact_me',
        link: 'contact-me'
    }

    const isContactMeActive = useActivePath(contactItem.link);

    return (
        <header className="flex items-center justify-between h-[52px] bg-background border-b border-border-gray font-firaCode">
            <div className="flex items-center justify-between h-full">
                <div className="min-w-[300px] h-full flex items-center px-4 text-secondary-4 border-r border-border-gray">
                    Le Ngoc Truong
                </div>
                <nav className="h-full">
                    <ul className="flex h-full">
                        {navItems.map((item, index) => (
                            <NavItem key={index} label={item.label} link={item.link} />
                        ))}
                    </ul>
                </nav>
            </div>
            <div className="h-full border-l border-border-gray">
                <Link
                    href={contactItem.link}
                    className={`flex gap-8 justify-center items-center h-full px-6 border-b-2 border-transparent hover:text-secondary-4 hover:border-orange-500 ${isContactMeActive ? "border-b-2 border-orange-500 text-secondary-4" : ""
                        }`}
                >
                    {contactItem.label}
                </Link>
            </div>
        </header>
    )
}