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
            colSpan: 'col-span-1 row-span-1',
        },
        {
            id: 4,
            title: 'Perfume',
            description: 'GUCCI INTENSE OUD EDP',
            button: 'Shop Now',
            imageSrc: '/img8.webp',
            bgColor: 'bg-[#303030]',
            colSpan: 'col-span-1 row-span-1',
        },
    ];

    return (
        <>
            <div className="space-y-2 ml-2 md:ml-0 mt-10">
                <div className="text-brandPrimary flex gap-2 text-lg  font-bold items-center">
                    <div className="h-10 w-5 bg-brandPrimary rounded" />
                    Featured
                </div>
                <h1 className="text-4xl font-semibold">New Arrival</h1>
            </div>
            <section className="md:grid grid-cols-4 grid-rows-2 w-full md:h-[700px] xl:gap-6 sm:gap-4 gap-3 py-10 text-[#FAFAFA]">
                {items.map((item) => (
                    <div
                        key={item.id}
                        className={`${item.colSpan} ${item.bgColor} relative md:w-full md:h-full w-full h-96`}
                    >
                        {item.title && (
                            <div className="h-full w-full z-[1] flex flex-col gap-2 justify-end absolute bottom-10 sm:left-10 left-3">
                                <h1 className="text-3xl font-medium">{item.title}</h1>
                                <span className="text-sm">{item.description}</span>
                                {item.button && (
                                    <span className="border-b font-medium w-fit">{item.button}</span>
                                )}
                            </div>
                        )}
                        <img
                            alt={item.title || 'Decorative image'}
                            loading="lazy"
                            className="w-full h-full lg:object-cover object-contain"
                            src={item.imageSrc}
                        />
                    </div>
                ))}
            </section>
        </>
    );
};

export default Section4;
