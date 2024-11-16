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
        <div>
            <label className="flex items-center cursor-pointer group">
                <div className="flex items-center gap-5">
                    <Checkbox
                        sx={{
                            '& .MuiSvgIcon-root': {
                                color: '#94a3b8',
                                fontSize: 30
                            },
                            '&.Mui-checked': {
                                '& .MuiSvgIcon-root': {
                                    color: '#607B96',
                                    '& path': {
                                        fill: 'white'
                                    }
                                }
                            },
                            '&:hover': {
                                backgroundColor: 'rgba(96, 165, 250, 0.04)',
                            }
                        }}
                        checked={checked || false}
                        onChange={() => onChange(name)}
                    />
                    <div className="flex items-center gap-2 text-xl">
                        <Icon name={icon} className="w-6 h-6" />
                        <span className={`${checked ? "text-secondary-4" : ""}`}>{label}</span>
                    </div>
                </div>
            </label>
        </div>
    );
};