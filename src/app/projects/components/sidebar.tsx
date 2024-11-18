'use client'
import Icon from "@/components/icons";
import { ITag } from "../page";
import { ModernCheckbox } from "./modern-checkbox";

interface ISideProps {
    tags: ITag[];
    selectedTags: string[];
    onTagToggle: (tag: string) => void;
}

export const Sidebar = ({ tags, selectedTags, onTagToggle }: ISideProps) => {
    return (
        <div className="w-[300px] min-w-[300px] border-r border-border-gray">
            <div className="flex-1">
                <div className='flex gap-1 items-center border-b py-2 px-3 border-border-gray text-secondary-4'>
                    <Icon name="ArrowDownFill" />
                    projects
                </div>
                <div className="px-4 py-3">
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