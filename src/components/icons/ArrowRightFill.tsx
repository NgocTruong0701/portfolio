import { SVGProps } from ".";

export default function ArrowRightFill({ fill = 'currentColor', width = "24", height = "24", className }: SVGProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={fill} width={width} height={height} className={className}>
            <path d="M16 12L10 18V6L16 12Z"></path>
        </svg>
    );
}