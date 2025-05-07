import { FC, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router';
import { PROJECTS } from '@/data/constants/projects.const';
import ProjectCard from '@/components/common/ProjectCard';

const ProjectDetail: FC = () => {
    const { id } = useParams<{ id: string }>();
    const [project, setProject] = useState(PROJECTS.list.find(project => project.id === id));
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        // Find the project from the id parameter
        const foundProject = PROJECTS.list.find(project => project.id === id);

        if (foundProject) {
            setProject(foundProject);
            setNotFound(false);
        } else {
            setNotFound(true);
        }
    }, [id]);

    if (notFound) {
        return (
            <div className="flex flex-col justify-center items-center pt-6 space-y-4 text-center md:pt-10">
                <h1 className="text-xl font-bold tracking-wide md:text-2xl lg:text-3xl font-title">
                    Project Not Found
                </h1>
                <p className="font-body">
                    Sorry, the project you're looking for doesn't exist.
                </p>
                <Link
                    to="/projects"
                    className="inline-block px-4 py-2 mt-4 text-sm text-white bg-amber-500 rounded-md transition-colors duration-300 hover:bg-amber-600 font-title"
                >
                    Back to All Projects
                </Link>
            </div>
        );
    }

    if (!project) {
        return (
            <div className="flex flex-col justify-center items-center h-64">
                <div className="w-12 h-12 rounded-full border-t-2 border-b-2 border-amber-500 animate-spin"></div>
                <p className="mt-4 font-body">Loading project...</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col pt-4 space-y-4 md:pt-6">
            <div className="flex items-center mb-4">
                <Link
                    to="/projects"
                    className="inline-flex items-center text-sm text-amber-400 hover:text-amber-500 font-body"
                >
                    ← Back to All Projects
                </Link>
            </div>

            <div>
                <h1 className="text-xl font-bold tracking-wide md:text-2xl lg:text-3xl font-title">
                    {project.title}
                </h1>
                <div className="max-w-[120px] h-[2px] bg-gradient-to-r from-amber-400 to-amber-500 rounded-full mt-2 mb-5"></div>

                <ProjectCard
                    id={project.id}
                    title={project.title}
                    description={project.description}
                    imageUrl={project.imageUrl}
                    completedAt={project.completedAt}
                    techStack={project.techStack}
                    platformType={project.platformType}
                    projectUrl={project.projectUrl}
                    preview={false}
                />
            </div>

            <div className="flex justify-between pb-6 mt-6">
                {/* Previous Project */}
                {getPrevProject(project.id) && (
                    <Link
                        to={`/projects/${getPrevProject(project.id)?.id}`}
                        className="inline-flex items-center px-4 py-2 text-sm text-white rounded-md transition-colors duration-300 bg-neutral-700 hover:bg-neutral-600 font-title"
                    >
                        ← Previous Project
                    </Link>
                )}

                <div className="flex-1"></div>

                {/* Next Project */}
                {getNextProject(project.id) && (
                    <Link
                        to={`/projects/${getNextProject(project.id)?.id}`}
                        className="inline-flex items-center px-4 py-2 text-sm text-white rounded-md transition-colors duration-300 bg-neutral-700 hover:bg-neutral-600 font-title"
                    >
                        Next Project →
                    </Link>
                )}
            </div>
        </div>
    );
};

// Helper functions to get previous and next projects
function getPrevProject(currentId: string) {
    const currentIndex = PROJECTS.list.findIndex(project => project.id === currentId);
    return currentIndex > 0 ? PROJECTS.list[currentIndex - 1] : null;
}

function getNextProject(currentId: string) {
    const currentIndex = PROJECTS.list.findIndex(project => project.id === currentId);
    return currentIndex < PROJECTS.list.length - 1 ? PROJECTS.list[currentIndex + 1] : null;
}

export default ProjectDetail; 