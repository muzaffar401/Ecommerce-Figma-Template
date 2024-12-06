"use client"
import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const hero: React.FC = () => {
    const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

    return (
        <div className="xl:container xl:mx-auto mb-5 ">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 border-t lg:pt-5">
                {/* Categories */}
                <nav className="hidden lg:block bg-[#fcfcfc] shadow-lg left-0 py-2 xl:py-6 pl-0 xl:px-4  font-[poppins] overflow-auto">
                    <div className="space-y-1 xl:space-y-3">
                        {[
                            "Woman’s Fashion",
                            "Men’s Fashion",
                            "Electronics",
                            "Home & Lifestyle",
                            "Medicine",
                            "Sports & Outdoor",
                            "Baby’s & Toys",
                            "Groceries & Pets",
                            "Health & Beauty"
                        ].map((category, idx) => (
                            <div key={idx} className="flex cursor-pointer group">
                                <h6 className="text-black text-[14px] sm:text-[16px] font-[400] font-[poppins] px-4 flex-1">
                                    {category}
                                </h6>
                                {["Woman’s Fashion", "Men’s Fashion"].includes(category) && (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-3 fill-gray-600 group-hover:fill-black -rotate-90"
                                        viewBox="0 0 451.847 451.847"
                                    >
                                        <path
                                            d="M225.923 354.706c-8.098 0-16.195-3.092-22.369-9.263L9.27 151.157c-12.359-12.359-12.359-32.397 0-44.751 12.354-12.354 32.388-12.354 44.748 0l171.905 171.915 171.906-171.909c12.359-12.354 32.391-12.354 44.744 0 12.365 12.354 12.365 32.392 0 44.751L248.292 345.449c-6.177 6.172-14.274 9.257-22.369 9.257z"
                                        />
                                    </svg>
                                )}
                            </div>
                        ))}
                    </div>
                </nav>

                {/* Carousel */}
                <div className="relative w-full my-auto col-span-1 lg:col-span-3" data-carousel="slide">
                    <div className="embla overflow-hidden" ref={emblaRef}>
                        <div className="embla__container flex">
                            {["/img1.png", "/img2.jpg", "/img3.jpg"].map((img, idx) => (
                                <div key={idx} className="embla__slide min-w-full">
                                    <img
                                        src={img}
                                        alt={`Slide ${idx + 1}`}
                                        className="w-full xl:h-[352px] object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default hero;
