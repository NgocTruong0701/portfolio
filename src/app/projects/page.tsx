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
            title: "E-commerce Platform",
            description: "A full-stack e-commerce solution with React and Node.js",
            tags: ["React", "Node.js", "MongoDB", "Typescript"],
            demo: "https://demo.example.com",
            github: "https://github.com/example/project"
        },
        {
            id: 2,
            title: "Task Manager",
            description: "Collaborative task management application",
            tags: ["Vue.js", "Firebase", "Tailwind"],
            demo: "https://demo.example.com",
            github: "https://github.com/example/project"
        },
        {
            id: 3,
            title: "Project Manager",
            description: "Collaborative project management application",
            tags: ["Vue.js", "Firebase", "Tailwind"],
            demo: "https://demo.example.com",
            github: "https://github.com/example/project"
        },
    ]);

    const [listTag] = useState<ITag[]>([
        { id: 1, name: "React", icon: "Reactjs" },
        { id: 2, name: "HTML", icon: "Html" },
        { id: 3, name: "CSS", icon: "CSS" },
        { id: 4, name: "JS", icon: "JS" },
        { id: 5, name: "Vue", icon: "VueJs" },
        { id: 6, name: "Angular", icon: "Angular" },
        { id: 7, name: "Nodejs", icon: "Nodejs" },
        { id: 8, name: "C#", icon: "CSharp" },
        { id: 9, name: "Tailwind CSS", icon: "TailwindCss" }
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
        <div className="flex-1 h-screen flex font-firaCode text-secondary-1">
            <Sidebar
                tags={listTag}
                selectedTags={selectedTags}
                onTagToggle={handleTagToggle}
            />
            <div className="flex-1">
                <div className='w-full flex flex-col border-r border-border-gray'>
                    <div className='border-b border-border-gray'>
                        <div className='flex items-center justify-between px-4 py-2 border-r border-border-gray w-48'>
                            <div>personal-info</div>
                            <div>x</div>
                        </div>
                    </div>
                    <div className='flex flex-1 h-full'>
                        <div className='flex-1 mx-12 my-5 h-full'>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {filteredProjects.map((project, index) => (
                                    <ProjectCard key={index} project={project} />
                                ))}
                            </div>
                        </div>
                        <div className='w-[3%] border-l border-border-gray h-full'>
                            <div className='bg-secondary-1 h-[1%] mt-2 mx-[2px]'></div>
                        </div>
                        <div className='w-6 border-l border-border-gray h-full'>
                            <div className='bg-secondary-1 h-[1%] mt-2 mx-[2px]'></div>
                        </div>
                    </div>
                </div >
            </div >
        </div >
    )
}