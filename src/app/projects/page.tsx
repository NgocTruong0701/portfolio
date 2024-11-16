'use client'
import { useState } from "react";
import { Sidebar } from "./components/sidebar";
import { ProjectCard } from "./components/project-card";

export interface IProject {
    id: number;
    title: string;
    description: string;
    tags: string[];
    demo: string;
    github: string;
    image: string;
}

export interface ITag {
    id: number;
    name: string;
    icon: string;
}

export default function Projects() {
    const [projects] = useState<IProject[]>([
        {
            id: 1,
            title: "_be-onl-doctor-app",
            description: "A full-stack e-commerce solution with React and Node.js",
            tags: ["Node.js", "TS", "Nest.js"],
            demo: "https://demo.example.com",
            github: "https://github.com/NgocTruong0701/backend_online_doctor_appointment",
            image: 'NestJS.svg'
        },
        {
            id: 2,
            title: "_fe-onl-doctor-app",
            description: "Collaborative task management application",
            tags: ["React", "HTML", "Tailwind", "CSS", "TS"],
            demo: "https://demo.example.com",
            github: "https://github.com/NgocTruong0701/app_online_doctor_appointment",
            image: 'react-native-1.svg'
        },
        {
            id: 3,
            title: "_portfolio",
            description: "Collaborative project management application",
            tags: ["HTML", "CSS", "TS", "Next.js", "Tailwind"],
            demo: "https://demo.example.com",
            github: "https://github.com/NgocTruong0701/portfolio",
            image: 'nextjs-13.svg'
        },
    ]);

    const [listTag] = useState<ITag[]>([
        { id: 1, name: "HTML", icon: "Html" },
        { id: 2, name: "CSS", icon: "CSS" },
        { id: 3, name: "JS", icon: "JS" },
        { id: 4, name: "TS", icon: "TypeScript" },
        { id: 5, name: "C#", icon: "CSharp" },
        { id: 6, name: "Node.js", icon: "Nodejs" },
        { id: 7, name: "Nest.js", icon: "Nestjs" },
        { id: 8, name: ".Net", icon: "DotNet" },
        { id: 9, name: "React", icon: "Reactjs" },
        { id: 10, name: "Next.js", icon: "Nextjs" },
        { id: 11, name: "Vue.js", icon: "VueJs" },
        { id: 12, name: "Angular", icon: "Angular" },
        { id: 13, name: "Tailwind", icon: "TailwindCss" },
    ]);

    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    const handleTagToggle = (tagName: string) => {
        setSelectedTags(prev =>
            prev.includes(tagName)
                ? prev.filter(t => t !== tagName)
                : [...prev, tagName]
        );
    };

    const filteredProjects = projects.filter(project =>
        selectedTags.length === 0 ||
        project.tags.some(tag => selectedTags.includes(tag))
    );

    return (
        <div className="flex h-full font-firaCode text-secondary-1">
            <Sidebar
                tags={listTag}
                selectedTags={selectedTags}
                onTagToggle={handleTagToggle}
            />
            <div className="flex-1">
                <div className='w-full flex flex-col border-r border-border-gray h-full'>
                    <div className='border-b border-border-gray'>
                        <div className='flex items-center justify-between px-4 py-2 border-r border-border-gray min-w-48 max-w-fit gap-4'>
                            {selectedTags.length > 0 ? (
                                <div className="flex items-center gap-2">
                                    {selectedTags.map((tag, index) => (
                                        <span key={tag}>
                                            {tag}
                                            {index < selectedTags.length - 1 && "; "}
                                        </span>
                                    ))}
                                </div>
                            ) : (
                                <span>projects</span>
                            )}
                            <span className="ml-auto cursor-pointer">×</span>
                        </div>
                    </div>
                    <div className='flex flex-1 overflow-auto scrollbar-hide'>
                        <div className='flex-1 mx-28 my-5 mt-[10%]'>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                                {filteredProjects.map((project, index) => (
                                    <ProjectCard key={index} project={project} index={index} />
                                ))}
                            </div>
                        </div>
                        <div className='w-6 border-l border-border-gray h-full'>
                            <div className='bg-secondary-1 h-[1%] mt-2 mx-[2px]'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}