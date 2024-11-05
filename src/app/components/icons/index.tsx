import { FC } from "react";
import FacebookFill from "./FacebookFill";
import InstagramFill from "./InstagramFill";
import GithubFill from "./GithubFill";

type IconMapType = {
    [key: string]: FC<SVGProps>;
}
const IconMap: IconMapType = {
    FacebookFill,
    InstagramFill,
    GithubFill,
};

export type IconName = keyof typeof IconMap;

export type IconProps = {
    name: IconName;
    color?: string;
    fill?: string;
    width?: string;
    height?: string;
    strokeWidth?: string;
    className?: string;
}

export type SVGProps = Omit<IconProps, 'name'>;

export default function Icon({ name, ...svgProps }: IconProps) {
    const IconComponent = IconMap[name];
    return <IconComponent { ...svgProps } />;
}