import { FC } from 'react';
import { TOURS } from '@/data/constants/tours.const';
import TourCard from '@/components/common/TourCard';

const Blogs: FC = () => {
    return (
        <div className="flex flex-col pt-4 space-y-4 md:pt-6">
            <div>
                <h1 className="text-xl font-bold tracking-wide md:text-2xl lg:text-3xl font-title">
                    Blogs
                </h1>
                <div className="max-w-[120px] h-[2px] bg-gradient-to-r from-amber-400 to-amber-500 rounded-full mt-2 mb-3 md:mb-5"></div>

                <div className="space-y-4 text-sm md:space-y-6 md:text-base font-body">
                    {TOURS.description.map((value, index) => (
                        <p key={index} className="font-body">{value}</p>
                    ))}
                </div>
            </div>

            <div className="flex flex-col pb-6 mt-0 space-y-4 md:space-y-6">
                {TOURS.list.map((tour) => (
                    <TourCard
                        key={tour.id}
                        id={tour.id}
                        title={tour.title}
                        description={tour.description}
                        images={tour.images}
                        createdAt={tour.createdAt}
                        preview={true}
                    />
                ))}
            </div>
        </div>
    );
};

export default Blogs; 