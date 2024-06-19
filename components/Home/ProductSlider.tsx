import React from "react";

import ban1 from "../../assets/ban-1.jpeg";
import ban2 from "../../assets/ban-2.jpeg";
import { HiPlus } from "react-icons/hi";
// import { HeartIcon } from "lucide-react";
import { BsHeartFill } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

const products = [
  {
    id: 1,
    image: ban1,
    //   icon: <IoMdAddCircle />,
    name: "Ceiling Light",
    price: 75,
    oldPrice: 82,
  },
  {
    id: 2,
    image: ban2,
    //   icon: <IoMdAddCircle />,
    name: "Wood Chair",
    price: 50,
    oldPrice: 70,
  },
  {
    id: 3,
    image: ban1,
    //   icon: <IoMdAddCircle />,
    name: "Ceiling Light",
    price: 75,
    oldPrice: 82,
  },
  {
    id: 4,
    image: ban2,
    //   icon: <IoMdAddCircle />,
    name: "Wood Chair",
    price: 50,
    oldPrice: 70,
  },
];
const ProductSlider = () => {
  return (
    <section className="mt-4 gap-8 grid sm:grid-cols-2  lg:grid-cols-3  xl:grid-cols-4">
      {products.map((property) => {
        const { name, image, price, id } = property;
        return (
          <article className="group relative" key={id}>
            <Link href={`/products/${id}`}>
              <div className="relative h-[300px] mb-2 overflow-hidden rounded-md">
                <Image
                  src={image}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
                  alt={name}
                  className="rounded-md object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-semibold mt-1">
                  {name.substring(0, 30)}
                </h3>
                {/* property rating */}
                {/* <PropertyRating inPage={false} propertyId={propertyId} /> */}
              </div>
              <div className="flex justify-between items-center mt-1">
                <p className="text-sm mt-1 ">
                  <span className="font-semibold">$ {price} </span>
                </p>
              </div>
            </Link>
            <div className="absolute top-5 right-5 z-5">
              <BsHeartFill className="text-white w-4 h-4" />
              {/* favorite toggle button */}
              {/* <FavoriteToggleButton propertyId={propertyId} /> */}
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default ProductSlider;
