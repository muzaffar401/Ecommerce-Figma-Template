import Hero from "@/app/components/hero";
import Category from "@/app/components/category";
import ProductSection from "@/app/components/product-section";
import { Button } from "@/app/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import { ChevronLeftIcon } from "lucide-react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import ProductSection2 from "./components/productSection2";
import Hero2 from "./components/hero2";
import ProductSection3 from "./components/productSection3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";

export default async function Home() {
  const res = await fetch("https://fakestoreapi.com/products")
  const data = await res.json()
  const res2 = await fetch("https://fakestoreapi.com/products?limit=4")
  const data2 = await res2.json()
  const res3 = await fetch("https://fakestoreapi.com/products?limit=8")
  const data3 = await res3.json()
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Hero />
        <ProductSection
          heading="New Arrival"
          subHeading="Today's"
          showTimer
          isCarousel
          ctaText="View All Products"
          products={data}
          action={
            <div className="flex gap-2">
              <Button variant={"outline"} size={"icon"} className="rounded-full">
                <FaArrowLeft />
              </Button>
              <Button variant={"outline"} size={"icon"} className="rounded-full">
                <FaArrowRight />
              </Button>
            </div>
          }
        />
      </div>
      <Category />
      <div className="max-w-7xl mx-auto ">
        <ProductSection2
          heading="Best Selling Products"
          subHeading="This Month"
          showTimer={false}
          isCarousel={false}
          products={data2}
          action={
            <div className="flex">
              <Button className="bg-brandPrimary text-white w-fit rounded-none mx-auto mt-4">View All</Button>
            </div>
          }
        />
      </div>
      <Hero2 />
      <div className="max-w-7xl mx-auto mt-10">
        <ProductSection3
          heading="Explore Our Products"
          subHeading="Our Products"
          showTimer={false}
          isCarousel={false}
          ctaText="View All Products"
          products={data3}
          action={
            <div className="flex gap-2">
              <Button variant={"outline"} size={"icon"} className="rounded-full">
                <FaArrowLeft />
              </Button>
              <Button variant={"outline"} size={"icon"} className="rounded-full">
                <FaArrowRight />
              </Button>
            </div>
          }
        />
      </div>

      <Section4/>

      <Section5/>

      
    </>
  );
}
