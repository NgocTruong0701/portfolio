import { SVGProps } from ".";

export default function User4Fill({ fill = 'currentColor', width = "24", height = "24", className }: SVGProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={fill} width={width} height={height} className={className}>
            <path d="M5 20H19V22H5V20ZM12 18C7.58172 18 4 14.4183 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10C20 14.4183 16.4183 18 12 18Z"></path>
        </svg>
    );
}