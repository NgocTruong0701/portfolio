'use client'
import Icon from "@/components/icons";
import { useState } from "react";

export const Sidebar = () => {
    const listIcon = [
        'TerminalBoxFill',
        'User4Fill',
        'GamepadFill',
    ];

    const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({
        bio: true,
        interests: false,
        education: false,
        contacts: false,
        personalInfo: true,
    });

    const nameFolder = "Folder3Fill";
    const gitRepo = "GitRepositoryFill";
    const mailFill = "MailFill";
    const phoneFill = "PhoneFill";

    const toggleExpand = (item: string) => {
        setExpandedItems(prev => ({
            ...prev,
            [item]: !prev[item]
        }));
    };

    return (
        <div className="w-full md:w-[300px] md:min-w-[250px] border-r border-border-gray md:flex ">
            <div className="md:hidden text-secondary-4 py-5 px-5">
                _about-me
            </div>
            <div className='w-3/12 border-r border-border-gray hidden md:block'>
                {listIcon.map((item, index) => (
                    <Icon key={index} name={item} className="mx-auto text-secondary-1 my-7" />
                ))}
            </div>
            <div className="flex-1">
                <div
                    onClick={() => toggleExpand('personalInfo')}
                    className='flex gap-1 items-center max-md:bg-border-gray max-md:mb-1 md:border-b py-2 px-3 border-border-gray text-secondary-4'
                >
                    <Icon name={expandedItems.personalInfo ? "ArrowDownFill" : "ArrowRightFill"} />
                    personal-info
                </div>
                <div className={`space-y-2 px-4 py-4 md:border-b border-border-gray ${expandedItems.personalInfo ? 'block' : 'hidden'}`}>
                    <div
                        className="flex items-center gap-2 cursor-pointer"
                        onClick={() => toggleExpand('bio')}
                    >
                        <Icon name={expandedItems.bio ? "ArrowDownSLine" : "ArrowRightSLine"} />
                        <Icon name={nameFolder} className="text-accent-3" />
                        <span className={expandedItems.bio ? 'text-secondary-4' : ''}>bio</span>
                    </div>

                    <div
                        className="flex items-center gap-2 cursor-pointer"
                        onClick={() => toggleExpand('interests')}
                    >
                        <Icon name={expandedItems.interests ? "ArrowDownSLine" : "ArrowRightSLine"} />
                        <Icon name={nameFolder} className="text-accent-2" />
                        <span className={expandedItems.interests ? 'text-secondary-4' : ''}>interests</span>
                    </div>

                    <div
                        className="flex gap-2 cursor-pointer"
                        onClick={() => toggleExpand('education')}
                    >
                        <Icon name={expandedItems.education ? "ArrowDownSLine" : "ArrowRightSLine"} />
                        <div className="flex flex-col">
                            <Icon name={nameFolder} className="text-accent-5" />
                            {expandedItems.education && (
                                <div className="space-y-2">
                                    <Icon name={gitRepo} className="text-accent-6 mt-2" />
                                    <Icon name={gitRepo} className="text-accent-6 mt-2" />
                                </div>
                            )}
                        </div>
                        <div className="flex flex-col">
                            <span className={expandedItems.education ? 'text-secondary-4' : ''}>education</span>
                            {expandedItems.education && (
                                <div className="space-y-2">
                                    <div className="mt-2">high-school</div>
                                    <div>university</div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div
                    onClick={() => toggleExpand('contacts')}
                    className='flex gap-1 items-center max-md:bg-border-gray max-md:mb-1 md:border-b py-2 px-3 border-border-gray text-secondary-4'
                >
                    <Icon name={expandedItems.contacts ? "ArrowDownFill" : "ArrowRightFill"} />
                    contacts
                </div>
                <div className={`space-y-2 px-3 py-5 border-b border-border-gray text-sm ${expandedItems.contacts ? 'block' : 'hidden'}`}>
                    <div className="flex justify-content items-center gap-1">
                        <Icon name={mailFill} width="16.22" height="14.6" />
                        ngoctruongf5@gmail.com
                    </div>
                    <div className="flex justify-content items-center gap-1">
                        <Icon name={phoneFill} width="16.22" height="14.6" />
                        +84343630541
                    </div>
                </div>
            </div>
        </div>
    );
};