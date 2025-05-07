import { FC } from 'react';
import { PROJECTS } from '@/data/constants/projects.const';
import ProjectCard from '@/components/common/ProjectCard';

const Projects: FC = () => {
    return (
        <div className="flex flex-col pt-4 space-y-4 md:pt-6">
            <div>
                <h1 className="text-xl font-bold tracking-wide md:text-2xl lg:text-3xl font-title">
                    Projects
                </h1>
                <div className="max-w-[120px] h-[2px] bg-gradient-to-r from-amber-400 to-amber-500 rounded-full mt-2 mb-3 md:mb-5"></div>

                <div className="space-y-4 text-sm md:space-y-6 md:text-base font-body">
                    {PROJECTS.description.map((value, index) => (
                        <p key={index} className="font-body">{value}</p>
                    ))}
                </div>
            </div>

            <div className="flex flex-col pb-6 mt-0 space-y-4 md:space-y-6">
                {PROJECTS.list.map((project) => (
                    <ProjectCard
                        key={project.id}
                        id={project.id}
                        title={project.title}
                        description={project.description}
                        imageUrl={project.imageUrl}
                        completedAt={project.completedAt}
                        techStack={project.techStack}
                        platformType={project.platformType}
                        projectUrl={project.projectUrl}
                        preview={true}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects; 