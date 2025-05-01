import { FC } from 'react';
import { Link } from 'react-router';

interface TourCardProps {
  id: string;
  title: string;
  description: string;
  images: string[];
  createdAt: string;
  preview?: boolean;
}

const TourCard: FC<TourCardProps> = ({ id, title, description, images, preview = false }) => {
  // Only show the first paragraph in preview mode
  const previewDescription = preview
    ? description.split('.')[0] + '.'
    : description;

  return (
    <div className="bg-neutral-800/50 hover:bg-neutral-800 transition-colors duration-300 rounded-lg p-3 md:p-4">
      <div className="flex flex-col">
        <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
          <h1 className="text-lg md:text-2xl font-semibold tracking-wide font-title">{title}</h1>
          {/* <span className="text-xs md:text-sm py-1 bg-neutral-700 rounded-md px-3 md:px-4 inline-block font-body">
            🕛 {moment(createdAt).format('MMM DD, YYYY')}
          </span> */}
        </div>

        {/* Image gallery - show only first image in preview mode */}
        <div className="w-full mb-3">
          {preview ? (
            <img
              src={images[0]}
              alt={`${title} preview`}
              className="w-full h-48 object-cover rounded-md"
            />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${title} image ${index + 1}`}
                  className="w-full h-48 object-cover rounded-md"
                />
              ))}
            </div>
          )}
        </div>

        <p className="mt-2 text-sm md:text-base font-body">{previewDescription}</p>

        {/* Show "Read More" button only in preview mode */}
        {preview && (
          <div className="mt-3 text-right">
            <Link
              to={`/blogs/${id}`}
              className="inline-block px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white text-sm font-title rounded-md transition-colors duration-300"
            >
              Read More
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default TourCard; 