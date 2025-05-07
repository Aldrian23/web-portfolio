import { FC } from 'react';
import { Link } from 'react-router';

interface ProjectCardProps {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    completedAt: string;
    techStack: string[];
    platformType: string;
    projectUrl?: string;
    preview?: boolean;
}

const ProjectCard: FC<ProjectCardProps> = ({
    id,
    title,
    description,
    imageUrl,
    techStack,
    platformType,
    projectUrl,
    preview = false
}) => {
    // Only show the first paragraph in preview mode
    const previewDescription = preview
        ? description.split('.')[0] + '...'
        : description;

    return (
        <div className="p-3 rounded-lg transition-colors duration-300 bg-neutral-800/50 hover:bg-neutral-800 md:p-4">
            <div className="flex flex-col">
                <div className="flex flex-wrap gap-2 justify-between items-start mb-3">
                    {preview && <h1 className="text-lg font-semibold tracking-wide md:text-2xl font-title">{title}</h1>}
                </div>

                {/* Project Image */}
                <div className="mb-3 w-full">
                    <img
                        src={imageUrl}
                        alt={`${title} preview`}
                        className="object-cover w-full h-48 rounded-md"
                    />
                </div>

                <p className="mt-2 text-sm md:text-base font-body">{previewDescription}</p>

                {/* Platform Type and Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-3">
                    <span className="inline-block px-3 py-1 text-xs rounded-md md:text-sm bg-neutral-700 md:px-4 font-body">
                        {platformType}
                    </span>
                    {!preview && (
                        <div className="flex flex-wrap gap-2">
                            {techStack.map((tech, index) => (
                                <span
                                    key={index}
                                    className="inline-block px-3 py-1 text-xs rounded-md md:text-sm bg-amber-600/30 md:px-4 font-body"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    )}
                </div>

                {/* Visit Website Button */}
                {projectUrl && !preview && (
                    <div className="mt-6">
                        <a
                            href={projectUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-amber-500 underline font-title"
                        >
                            Visit Website
                        </a>
                    </div>
                )}

                {/* Show "View Project" button only in preview mode */}
                {preview && (
                    <div className="mt-3 text-right">
                        <Link
                            to={`/projects/${id}`}
                            className="inline-block px-4 py-2 text-sm text-white bg-amber-500 rounded-md transition-colors duration-300 hover:bg-amber-600 font-title"
                        >
                            View Project
                        </Link>
                    </div>
                )}


            </div>
        </div>
    );
};

export default ProjectCard; 