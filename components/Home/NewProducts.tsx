import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ProductSlider from "./ProductSlider";
// import data
// import { products } from '../data';

// import components
// import ProductSlider from './ProductSlider';

const Products = () => {
  //   const { title, subtitle } = products;
  return (
    <section className="section text-center pb-[40px] lg:pb-[80px]">
      <div className="container mx-auto">
        <div>
          <h2 className="text-2xl md:text-4xl font-bold mb-[16px]">
            Latest Catalogues
          </h2>
          <p className="max-w-[639px] mx-auto mb-[50px] lg:mb-[70px]">
            {/* latest products added to our catalogues{" "} */}
            {/* <span className="underline  "> */}
            <Link href="" className="flex justify-center items-center">
              view more{" "}
              <ArrowRight className="w-4 h-4 text-black  dark:text-white mr-2" />
            </Link>
            {/* </span> */}
          </p>
        </div>
        <ProductSlider />
      </div>
    </section>
  );
};

export default Products;
