import Icon from "@/components/icons";
import { Checkbox } from "@mui/material";

interface IModernCheckboxProps {
    label: string;
    checked: boolean;
    onChange: (name: string) => void;
    icon: string;
    name: string;
}

export const ModernCheckbox = ({ label, checked, onChange, icon, name }: IModernCheckboxProps) => {
    return (
        <div className="mb-2">
            <label className="flex items-center gap-2 cursor-pointer group">
                <div className="flex items-center gap-2">
                    <Checkbox 
                    />
                    <div className="flex items-center gap-2">
                        <Icon name={icon} className="w-4 h-4" />
                        <span>{label}</span>
                    </div>
                </div>
            </label>
        </div>
    );
};