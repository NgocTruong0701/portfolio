'use client'
import Icon from "@/components/icons";

type SocialLink = {
    id: string,
    title: string,
    url: string
}

export const Sidebar = () => {
    const mailFill = "MailFill";
    const phoneFill = "PhoneFill";

    const socialLinks: SocialLink[] = [
        {
            id: 'youtube',
            title: 'YouTube channel',
            url: 'https://youtube.com/username'
        },
        {
            id: 'instagram',
            title: 'Instagram account',
            url: 'https://instagram.com/username'
        },
        {
            id: 'twitch',
            title: 'Twitch profile',
            url: 'https://twitch.tv/username'
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
                <div className="space-y-2 px-2 py-5 border-b border-border-gray">

                </div>
            </div>
        </div>
    );
};