'use client'
import Link from "next/link";
import NavItem from "./NavItem";
import { useActivePath } from "@/hooks/useActivePath";

export default function Header() {
    const navItems = [
        { label: '_hello', link: '#hello' },
        { label: '_about-me', link: '#about-me' },
        { label: '_projects', link: '#projects' },
    ];
    const contactItem = {
        label: '_contact_me',
        link: '#contact-me'
    }

    const isContactMeActive = useActivePath(contactItem.link);

    return (
        <header className="flex items-center justify-between h-[52px] bg-background border-b border-gray-800 font-firaCode">
            <div className="flex items-center justify-between h-full">
                <div className="pl-4 pr-[12rem] h-full flex items-center border-r border-gray-800">
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
            <div className="h-full border-l border-gray-800">
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