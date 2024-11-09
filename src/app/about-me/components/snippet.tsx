import Image from "next/image";

interface ISnippetProps {
    children: React.ReactNode;
}

export default function Snippet({ children }: ISnippetProps) {
    const avatar = "https://avatars.githubusercontent.com/u/92860999?v=4";
    return (
        <div className="py-4">
            <div className="flex items-center gap-3">
                <Image
                    alt="avatar"
                    src={avatar}
                    width={36}
                    height={36}
                    className="rounded-full"
                />
                <div className="flex-1">
                    <div className="flex items-center justify-between">
                        <div className="text-[#2563eb]">@NgocTruong0701</div>
                        <div className="flex items-center gap-4 text-[#64748b]">
                            <div className="flex items-center gap-2">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 5.33333V8L10 10M14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                details
                            </div>
                            <div className="flex items-center gap-2">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.43408 2.76409C7.63209 2.24194 8.36791 2.24194 8.56592 2.76409L9.61159 5.31282C9.69742 5.52358 9.89745 5.66473 10.1242 5.67659L12.8351 5.84362C13.3957 5.87801 13.6271 6.57538 13.1889 6.93487L11.0704 8.69375C10.8951 8.84031 10.8181 9.07301 10.8686 9.29567L11.4419 11.9641C11.5554 12.5127 10.9574 12.9375 10.4703 12.6473L8.1751 11.2446C7.98009 11.1249 7.7339 11.1249 7.5389 11.2446L5.24369 12.6473C4.75657 12.9375 4.15863 12.5127 4.27206 11.9641L4.84537 9.29567C4.89591 9.07301 4.81893 8.84031 4.64362 8.69375L2.52506 6.93487C2.08691 6.57538 2.31831 5.87801 2.87889 5.84362L5.58983 5.67659C5.81655 5.66473 6.01658 5.52358 6.10241 5.31282L7.14808 2.76409Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                3 starts
                            </div>
                        </div>
                    </div>
                    <div className="text-[#64748b] text-sm">Created 5 months ago</div>
                </div>
            </div>
            <div className="my-3 border border-border-gray rounded-lg min-h-16 bg-primary-3">
                <div className="p-4">
                    {children}
                </div>
            </div>
        </div>
    );
}