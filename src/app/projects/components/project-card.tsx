// import Icon from "@/components/icons";
import Image from "next/image";
import { IProject } from "../page";
import Link from "next/link";

export const ProjectCard = ({ project, index }: { project: IProject, index: number }) => {
    return (
        <div className="grid grid-rows-[auto_1fr]">
            <div className="min-h-[40px]">
                <h3 className="text-lg font-semibold mb-2">
                    <span className="text-accent-7">Project {index + 1}</span> {`// ${project.title}`}
                </h3>
            </div>
            <div className="border border-border-gray rounded-xl hover:border-secondary-1 transition-colors flex flex-col">
                <div className="h-[200px] flex items-center justify-center mb-2 border-b border-border-gray">
                    <Image
                        src={project.image}
                        width={100}
                        height={100}
                        alt="Picture of the project"
                        className="object-contain w-full h-full py-3 px-4"
                    />
                </div>
                <div className="flex-1 flex flex-col px-8 py-5">
                    <p className="text-secondary-4 mb-5">{project.description}</p>
                    <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-secondary-4 hover:text-secondary-1 bg-secondary-6 w-fit py-3 px-6 rounded-lg">
                        <span>view-project</span>
                    </Link>
                </div>
            </div>
        </div >
    );
};