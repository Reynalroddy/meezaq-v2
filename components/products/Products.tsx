"use client";

import Filter from "@/components/filters/Filter";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { productProps } from "@/utils/types";
import EmptyList from "../EmptyList";

const Products = ({ products }: { products: productProps[] }) => {
  return (
    <main className="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8">
      <div className="border-b border-gray-200 pb-10 pt-24">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900  dark:text-white">
          Catalogues
        </h1>
        <p className="mt-4 text-base text-gray-500  dark:text-white">
          Checkout out our catalogues of Basic furnitures, accessories...
        </p>
      </div>

      <div className="pb-24 pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
        <Filter />

        <section
          aria-labelledby="product-heading"
          className="mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3"
        >
          <h2 id="product-heading" className="sr-only">
            Products
          </h2>

          <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3">
            {products.map((property) => {
              const { name, image, id } = property;
              return (
                <article className="group relative" key={id}>
                  <Link href={`/products/${id}`}>
                    <div className="relative h-[300px] mb-2 overflow-hidden rounded-md">
                      <Image
                        src={JSON.parse(image)[0].url}
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
                  </Link>
                </article>
              );
            })}
          </div>
          {products.length < 1 && <EmptyList />}
        </section>
      </div>
    </main>
  );
};

export default Products;
