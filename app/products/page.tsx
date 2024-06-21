import Products from "@/components/products/Products";
import { productProps } from "@/utils/types";
import { fetchProducts } from "@/utils/actions/actions";
import EmptyList from "@/components/EmptyList";

async function page({ searchParams }: { searchParams: { category?: string } }) {
  const category = searchParams?.category;

  const products: productProps[] = await fetchProducts({
    category,
  });

  // if (products.length < 1) {
  //   return <EmptyList />;
  // }
  return <Products products={products} />;
  // <main className="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8">
  //   <div className="border-b border-gray-200 pb-10 pt-24">
  //     <h1 className="text-4xl font-bold tracking-tight text-gray-900  dark:text-white">
  //       Catalogues
  //     </h1>
  //     <p className="mt-4 text-base text-gray-500  dark:text-white">
  //       Checkout out our catalogues of Basic furnitures, accessories...
  //     </p>
  //   </div>

  //   <div className="pb-24 pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
  //     <Filter />

  //     <section
  //       aria-labelledby="product-heading"
  //       className="mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3"
  //     >
  //       <h2 id="product-heading" className="sr-only">
  //         Products
  //       </h2>

  //       <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3">
  //         {/* {products.map((product) => (
  //           <div
  //             key={product.id}
  //             className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
  //           >
  //             <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96">
  //               <img
  //                 src={product.imageSrc}
  //                 alt={product.imageAlt}
  //                 className="h-full w-full object-cover object-center sm:h-full sm:w-full"
  //               />
  //             </div>
  //             <div className="flex flex-1 flex-col space-y-2 p-4">
  //               <h3 className="text-sm font-medium text-gray-900">
  //                 <a href={product.href}>
  //                   <span aria-hidden="true" className="absolute inset-0" />
  //                   {product.name}
  //                 </a>
  //               </h3>
  //               <p className="text-sm text-gray-500">{product.description}</p>
  //               <div className="flex flex-1 flex-col justify-end">
  //                 <p className="text-sm italic text-gray-500">
  //                   {product.options}
  //                 </p>
  //                 <p className="text-base font-medium text-gray-900">
  //                   {product.price}
  //                 </p>
  //               </div>
  //             </div>
  //           </div>
  //         ))} */}
  //         {products.map((property) => {
  //           const { name, image, price, id } = property;
  //           return (
  //             <article className="group relative" key={id}>
  //               <Link href={`/products/${id}`}>
  //                 <div className="relative h-[300px] mb-2 overflow-hidden rounded-md">
  //                   <Image
  //                     src={image}
  //                     fill
  //                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
  //                     alt={name}
  //                     className="rounded-md object-cover transform group-hover:scale-110 transition-transform duration-500"
  //                   />
  //                 </div>
  //                 <div className="flex justify-between items-center">
  //                   <h3 className="text-sm font-semibold mt-1">
  //                     {name.substring(0, 30)}
  //                   </h3>
  //                   {/* property rating */}
  //                   {/* <PropertyRating inPage={false} propertyId={propertyId} /> */}
  //                 </div>
  //               </Link>
  //             </article>
  //           );
  //         })}
  //       </div>
  //     </section>
  //   </div>
  // </main>
}

export default page;
