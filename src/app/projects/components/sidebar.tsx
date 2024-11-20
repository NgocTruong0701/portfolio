'use client'
import Icon from "@/components/icons";
import { ITag } from "../page";
import { ModernCheckbox } from "./modern-checkbox";
import { useState } from "react";

interface ISideProps {
    tags: ITag[];
    selectedTags: string[];
    onTagToggle: (tag: string) => void;
}

export const Sidebar = ({ tags, selectedTags, onTagToggle }: ISideProps) => {
    const [expandedItems, setExpandedItems] = useState<boolean>(false);

    return (
        <div className="w-full md:w-[300px] md:min-w-[250px] border-r border-border-gray md:overflow-y-auto">
            <div className="flex-1">
                <div className="md:hidden text-secondary-4 py-5 px-5">
                    _projects
                </div>
                <div
                    className='flex gap-1 max-md:bg-border-gray items-center md:border-b py-2 px-3 border-border-gray text-secondary-4'
                    onClick={() => setExpandedItems(!expandedItems)}
                >
                    <Icon name={expandedItems ? "ArrowDownFill" : "ArrowRightFill"} />
                    projects
                </div>
                <div className={`px-4 py-3 ${expandedItems ? 'block' : 'hidden'}`}>
                    {tags.map((item) => (
                        <ModernCheckbox
                            key={item.id}
                            label={item.name}
                            icon={item.icon}
                            checked={selectedTags.includes(item.name)}
                            onChange={onTagToggle}
                            name={item.name}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};