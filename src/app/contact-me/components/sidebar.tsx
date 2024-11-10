'use client'
import Icon from "@/components/icons";
import Link from "next/link";

type SocialLink = {
    id: string,
    title: string,
    url: string
}

export const Sidebar = () => {
    const mailFill = "MailFill";
    const phoneFill = "PhoneFill";
    const shareBoxLine = "ShareBoxLine";
    const socialLinks: SocialLink[] = [
        {
            id: 'linkedin',
            title: 'Linkedin profile',
            url: 'https://www.linkedin.com/in/lengoctruong0701'
        },
        {
            id: 'instagram',
            title: 'Instagram account',
            url: 'https://www.instagram.com/ngoctruong0701'
        },
        {
            id: 'tiktok',
            title: 'Tiktok profile',
            url: 'https://www.tiktok.com/@lengoctruong0701'
        }
    ];

    return (
        <div className="w-[300px] min-w-[300px] border-r border-border-gray">
            <div className="flex-1">
                <div className='flex gap-1 items-center border-b py-2 px-3 border-border-gray text-secondary-4'>
                    <Icon name="ArrowDownFill" />
                    contacts
                </div>
                <div className="space-y-2 px-4 py-5 border-b border-border-gray">
                    <div className="flex justify-content items-center gap-1">
                        <Icon name={mailFill} />
                        ngoctruongf5@gmail.com
                    </div>
                    <div className="flex justify-content items-center gap-1">
                        <Icon name={phoneFill} />
                        +84343630541
                    </div>
                </div>

                <div className='flex gap-1 items-center border-b py-3 px-3 border-border-gray text-secondary-4'>
                    <Icon name="ArrowDownFill" />
                    find-me-also-in
                </div>
                <div className="space-y-2 px-4 py-5 border-b border-border-gray">
                    {socialLinks.map((item, index) => (
                        <Link href={item.url} key={index} target="_blank" className="flex items-center gap-5 hover:text-secondary-4">
                            <Icon name={shareBoxLine} />
                            {item.title}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};