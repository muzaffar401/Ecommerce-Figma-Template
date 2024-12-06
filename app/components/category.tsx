import React from 'react'
import { Button } from './ui/button'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import { CiCamera, CiHeadphones, CiMobile4 } from 'react-icons/ci'
import { HiOutlineComputerDesktop } from 'react-icons/hi2'
import { BsSmartwatch } from 'react-icons/bs'
import { SiYoutubegaming } from 'react-icons/si'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'

const Category = () => {
  return (
    <div className="w-full flex justify-center items-center mt-10 mb-1">
      <div className="w-full md:w-[80%] xl:w-full pb-10">
        {/* Header Section */}
        <div className="flex flex-col pl-4 md:pl-0 space-y-2 ml-2 md:ml-0">
          <div className="text-brandPrimary flex gap-2 text-lg  font-bold items-center">
          <div className="h-10 w-5 bg-brandPrimary rounded" />
            Categories
          </div>
          <div className="flex justify-between items-center pr-4">
            <h1 className="text-3xl md:text-4xl font-semibold">Browse By Category</h1>
            <div className="md:flex gap-2 items-center hidden">
              <Button variant={"outline"} size={"icon"} className="rounded-full sm:w-8 sm:h-8">
                <FaArrowLeft />
              </Button>
              <Button variant={"outline"} size={"icon"} className="rounded-full sm:w-8 sm:h-8">
                <FaArrowRight />
              </Button>
            </div>
          </div>
        </div>

        {/* Categories Section */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-4 mt-5">
          {/* Category Cards */}
          {[
            { icon: <CiMobile4 className="text-4xl" />, label: "Phones" },
            { icon: <HiOutlineComputerDesktop className="text-4xl" />, label: "Computers" },
            { icon: <BsSmartwatch className="text-4xl" />, label: "Smartwatches" },
            { icon: <CiCamera className="text-4xl" />, label: "Cameras" },
            { icon: <CiHeadphones className="text-4xl" />, label: "Headphones" },
            { icon: <SiYoutubegaming className="text-4xl" />, label: "Gaming" },
          ].map((category, index) => (
            <div
              key={index}
              className="group shadow-md border hover:text-white rounded-md transition duration-300 hover:bg-brandPrimary w-[45%] sm:w-[200px] h-[150px] flex flex-col gap-y-3 justify-center items-center cursor-pointer"
            >
              {category.icon}
              <p className="font-medium text-sm md:text-base">{category.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Category
