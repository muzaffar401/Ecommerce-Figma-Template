import React from 'react';

const Section4 = () => {
    const items = [
        {
            id: 1,
            title: 'PlayStation 5',
            description: 'Black and White version of the PS5 coming out on sale.',
            button: 'Shop Now',
            imageSrc: '/img5.webp',
            bgColor: 'bg-black',
            colSpan: 'col-span-2 row-span-2',
        },
        {
            id: 2,
            title: "Women's Collections",
            description: 'Featured woman collections that give you another vibe.',
            button: 'Shop Now',
            imageSrc: '/img6.webp',
            bgColor: 'bg-[#0C0C0C]',
            colSpan: 'col-span-2 row-span-1',
        },
        {
            id: 3,
            title: 'Speakers',
            description: 'Amazon wireless speakers',
            button: 'Shop Now',
            imageSrc: '/img7.webp',
            bgColor: 'bg-[#303030]',
            colSpan: 'xl:col-span-1 row-span-1 col-span-2',
        },
        {
            id: 4,
            title: 'Perfume',
            description: 'GUCCI INTENSE OUD EDP',
            button: 'Shop Now',
            imageSrc: '/img8.webp',
            bgColor: 'bg-[#303030]',
            colSpan: 'col-span-2 row-span-2 xl:col-span-1 xl:row-span-1',
        },
    ];

    return (
        <>
            <div className="space-y-2 ml-2 md:ml-0 mt-10">
                <div className="text-brandPrimary flex gap-2 text-lg font-bold items-center">
                    <div className="h-10 w-5 bg-brandPrimary rounded" />
                    Featured
                </div>
                <h1 className="text-2xl md:text-4xl font-semibold">New Arrival</h1>
            </div>
            <section className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 w-full py-10 text-[#FAFAFA]">
                {items.map((item) => (
                    <div
                        key={item.id}
                        className={`relative w-full h-72 md:h-full ${item.bgColor} ${item.colSpan}`}
                    >
                        {item.title && (
                            <div className="absolute bottom-5 sm:bottom-10 left-3 sm:left-10 z-10 flex flex-col gap-2">
                                <h1 className="text-lg sm:text-3xl font-medium">{item.title}</h1>
                                <span className="text-xs sm:text-sm">{item.description}</span>
                                {item.button && (
                                    <span className="border-b font-medium text-xs sm:text-sm w-fit">
                                        {item.button}
                                    </span>
                                )}
                            </div>
                        )}
                        <img
                            alt={item.title || 'Decorative image'}
                            loading="lazy"
                            className="w-full h-full object-contain md:object-cover"
                            src={item.imageSrc}
                        />
                    </div>
                ))}
            </section>
        </>
    );
};

export default Section4;
