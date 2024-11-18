import Link from "next/link";
import Icon from "../icons";

export default function Footer() {
    const socialNetworks = [
        {
            name: "FacebookFill" as const,
            link: 'https://www.facebook.com/ngoctruong0701'
        },
        {
            name: "InstagramFill" as const,
            link: 'https://www.instagram.com/ngoctruong0701'
        }
    ];

    return (
        <footer className="flex justify-between items-center h-[52px] font-firaCode border-t border-gray-800">
            <div className="flex h-full max-md:flex-1">
                <div className="flex items-center px-4 h-full border-r border-gray-800 max-md:flex-1">
                    find me in:
                </div>
                <div className="flex h-full">
                    {socialNetworks.map((item, index) => (
                        <Link
                            key={index}
                            href={item.link}
                            target="_blank"
                            className="flex items-center px-4 h-full border-r border-gray-800 hover:text-secondary-4"
                        >
                            <Icon name={item.name} className="w-5 h-5" />
                        </Link>
                    ))}
                </div>
            </div>
            <div className="h-full border-l border-border-gray">
                <Link href="https://github.com/NgocTruong0701" target="_blank" className="flex items-center px-6 h-full hover:text-secondary-4">
                    <span className="hidden md:block">@NgocTruong0701</span>
                    <Icon name="GithubFill" className="w-5 h-5 ml-2" />
                </Link>
            </div>
        </footer>
    )
}