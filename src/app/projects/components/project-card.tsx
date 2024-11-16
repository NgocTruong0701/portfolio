// import Icon from "@/components/icons";
import { IProject } from "../page";

export const ProjectCard = ({ project }: { project: IProject }) => {
    return (
        <div className="border border-border-gray rounded-lg p-4 hover:border-secondary-1 transition-colors">
            <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
            <p className="text-secondary-4 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                    <span
                        key={index}
                        className="px-2 py-1 text-sm bg-opacity-10 bg-secondary-1 text-secondary-1 rounded"
                    >
                        {tag}
                    </span>
                ))}
            </div>
            <div className="flex gap-4">
                <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-secondary-4 hover:text-secondary-1"
                >
                    {/* <Icon name="Link" /> */}
                    <span>Demo</span>
                </a>
                <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-secondary-4 hover:text-secondary-1"
                >
                    {/* <Icon name="Github" /> */}
                    <span>Github</span>
                </a>
            </div>
        </div>
    );
};