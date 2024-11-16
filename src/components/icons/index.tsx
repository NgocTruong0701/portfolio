import { FC } from "react";
import FacebookFill from "./FacebookFill";
import InstagramFill from "./InstagramFill";
import GithubFill from "./GithubFill";
import ArrowUpFill from "./ArrowUpFill";
import ArrowDownFill from "./ArrowDownFill";
import ArrowLeftFill from "./ArrowLeftFill";
import ArrowRightFill from "./ArrowRightFill";
import TerminalBoxFill from "./TerminalBoxFill";
import GamepadFill from "./GamepadFill";
import User4Fill from "./User4Fill";
import Folder3Fill from "./Folder3Fill";
import ArrowDownSLine from "./ArrowDownSLine";
import ArrowRightSLine from "./ArrowRightSLine";
import GitRepositoryFill from "./GitRepositoryFill";
import MailFill from "./MailFill";
import PhoneFill from "./PhoneFill";
import ShareBoxLine from "./ShareBoxLine";
import Html from "./Html";
import CSS from "./CSS";
import JS from "./JS";
import Nodejs from "./Nodejs";
import Reactjs from "./Reactjs";
import Angular from "./Angular";
import VueJs from "./VueJs";
import CSharp from "./CSharp";
import TailwindCss from "./TailwindCss";
import Nextjs from "./Nextjs";
import Nestjs from "./Nestjs";
import TypeScript from "./TypeScript";
import DotNet from "./DotNet";

type IconMapType = {
    [key: string]: FC<SVGProps>;
}
const IconMap: IconMapType = {
    FacebookFill,
    InstagramFill,
    GithubFill,
    ArrowUpFill,
    ArrowDownFill,
    ArrowLeftFill,
    ArrowRightFill,
    TerminalBoxFill,
    GamepadFill,
    User4Fill,
    Folder3Fill,
    ArrowDownSLine,
    ArrowRightSLine,
    GitRepositoryFill,
    MailFill,
    PhoneFill,
    ShareBoxLine,
    Html,
    CSS,
    JS,
    Nodejs,
    Reactjs,
    Angular,
    VueJs,
    CSharp,
    TailwindCss,
    Nextjs,
    Nestjs,
    TypeScript,
    DotNet,
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
    return <IconComponent {...svgProps} />;
}