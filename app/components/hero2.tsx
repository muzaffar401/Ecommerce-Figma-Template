"use client"
import React from 'react'
import Image from 'next/image'
import HeroTimer from './heroTimer'

const Hero2 = () => {
    return (
        <div className="flex imagebg flex-col lg:flex-row items-center justify-between w-full  h-full px-4 sm:px-8 lg:px-[50px]  font-inter bg-gradient-to-br from-[#211c24] to-[#39303d] text-white mt-10">
            {/* Text Content */}
            <div className="flex flex-col gap-5 py-20">
                <span className="text-[#00FF66] font-medium">Categories</span>
                <h1 className="sm:text-6xl text-4xl text-white">Enhance Your<br /> Music Experience</h1>
                <HeroTimer />
                <button className="px-8 py-3 text-2xl bg-[#00FF66] m-auto xl:m-0 text-white rounded-sm w-fit xs:mt-0 mt-8">Buy Now</button>

            </div>


            {/* Banner Image */}
            <div className="w-full lg:w-auto">
                <Image height={500} width={550} src='/speaker.webp' alt="banner" className=" object-cover m-auto" />
            </div>
        </div>
    )
}

export default Hero2