import { SVGProps } from ".";

export default function ArrowDownFill({ fill = 'currentColor', width = "24", height = "24", className }: SVGProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={fill} width={width} height={height} className={className}>
            <path d="M12 16L6 10H18L12 16Z"></path>
        </svg>
    );
}