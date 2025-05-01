import { FC, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router';
import { TOURS } from '@/data/constants/tours.const';
import TourCard from '@/components/common/TourCard';

const BlogDetail: FC = () => {
    const { id } = useParams<{ id: string }>();
    const [tour, setTour] = useState(TOURS.list.find(tour => tour.id === id));
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        // Find the tour from the id parameter
        const foundTour = TOURS.list.find(tour => tour.id === id);

        if (foundTour) {
            setTour(foundTour);
            setNotFound(false);
        } else {
            setNotFound(true);
        }
    }, [id]);

    if (notFound) {
        return (
            <div className="flex flex-col items-center justify-center space-y-4 pt-6 md:pt-10 text-center">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-wide font-title">
                    Tour Not Found
                </h1>
                <p className="font-body">
                    Sorry, the tour you're looking for doesn't exist.
                </p>
                <Link
                    to="/blogs"
                    className="inline-block mt-4 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white text-sm font-title rounded-md transition-colors duration-300"
                >
                    Back to All Tours
                </Link>
            </div>
        );
    }

    if (!tour) {
        return (
            <div className="flex flex-col items-center justify-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
                <p className="mt-4 font-body">Loading tour...</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col space-y-4 pt-4 md:pt-6">
            <div className="flex items-center mb-4">
                <Link
                    to="/blogs"
                    className="inline-flex items-center text-sm text-amber-400 hover:text-amber-500 font-body"
                >
                    ← Back to All Tours
                </Link>
            </div>

            <div>
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-wide font-title">
                    {tour.title}
                </h1>
                <div className="max-w-[120px] h-[2px] bg-gradient-to-r from-amber-400 to-amber-500 rounded-full mt-2 mb-5"></div>

                <TourCard
                    id={tour.id}
                    title={tour.title}
                    description={tour.description}
                    images={tour.images}
                    createdAt={tour.createdAt}
                    preview={false}
                />
            </div>

            <div className="flex justify-between mt-6 pb-6">
                {/* Previous Tour */}
                {getPrevTour(tour.id) && (
                    <Link
                        to={`/blogs/${getPrevTour(tour.id)?.id}`}
                        className="inline-flex items-center px-4 py-2 bg-neutral-700 hover:bg-neutral-600 text-white text-sm font-title rounded-md transition-colors duration-300"
                    >
                        ← Previous Tour
                    </Link>
                )}

                <div className="flex-1"></div>

                {/* Next Tour */}
                {getNextTour(tour.id) && (
                    <Link
                        to={`/blogs/${getNextTour(tour.id)?.id}`}
                        className="inline-flex items-center px-4 py-2 bg-neutral-700 hover:bg-neutral-600 text-white text-sm font-title rounded-md transition-colors duration-300"
                    >
                        Next Tour →
                    </Link>
                )}
            </div>
        </div>
    );
};

// Helper functions to get previous and next tours
function getPrevTour(currentId: string) {
    const currentIndex = TOURS.list.findIndex(tour => tour.id === currentId);
    return currentIndex > 0 ? TOURS.list[currentIndex - 1] : null;
}

function getNextTour(currentId: string) {
    const currentIndex = TOURS.list.findIndex(tour => tour.id === currentId);
    return currentIndex < TOURS.list.length - 1 ? TOURS.list[currentIndex + 1] : null;
}

export default BlogDetail; 