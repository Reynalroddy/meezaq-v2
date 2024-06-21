"use client";
import { productProps } from "@/utils/types";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "lucide-react";

function Product({ product }: { product: productProps }) {
  const { image, name, description } = product;
  return (
    <div className="py-8">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          {/* Image gallery */}
          <TabGroup className="flex flex-col-reverse">
            {/* Image selector */}
            <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
              <TabList className="grid grid-cols-4 gap-6">
                {JSON.parse(image).map((image: any) => (
                  <Tab
                    key={image.url}
                    className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                  >
                    {({ selected }) => (
                      <>
                        <span className="sr-only">{image.name}</span>
                        <span className="absolute inset-0 overflow-hidden rounded-md">
                          <img
                            src={image.url}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </span>
                        <span
                          className={`${
                            selected ? "ring-primary" : "ring-transparent"
                          }
                            pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2
                          `}
                          aria-hidden="true"
                        />
                      </>
                    )}
                  </Tab>
                ))}
              </TabList>
            </div>

            <TabPanels className="aspect-h-1 aspect-w-1 w-full">
              {JSON.parse(image).map((image: any) => (
                <TabPanel key={image.id}>
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="h-full w-full object-cover object-center sm:rounded-lg"
                  />
                </TabPanel>
              ))}
            </TabPanels>
          </TabGroup>

          {/* Product info */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h1>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6 text-base text-gray-700  dark:text-white">
                {description}
              </div>
            </div>

            <form className="mt-6">
              <div className="mt-10 flex">
                <button
                  type="submit"
                  className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-primary px-8 py-3 text-base font-medium text-white hover:bg-primary/70 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                >
                  <a href="https://wa.me/9134446144" target="_blank">
                    Make A request
                  </a>
                </button>
              </div>
            </form>

            <section aria-labelledby="details-heading" className="mt-12">
              <h2 id="details-heading" className="sr-only">
                Additional details
              </h2>
              {/* 
              <div className="divide-y divide-gray-200 border-t">
                <Disclosure as="div">
                  {({ open }) => (
                    <>
                      <h3>
                        <DisclosureButton className="group relative flex w-full items-center justify-between py-6 text-left">
                          <span
                            className={`${
                              open ? "text-primary" : "text-gray-900"
                            } text-sm font-medium')`}
                          >
                            description
                          </span>
                          <span className="ml-6 flex items-center">
                            {open ? (
                              <MinusIcon
                                className="block h-6 w-6 text-primary group-hover:text-primary/70"
                                aria-hidden="true"
                              />
                            ) : (
                              <PlusIcon
                                className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </DisclosureButton>
                      </h3>
                      <DisclosurePanel as="div" className="prose prose-sm pb-6">
                        <ul role="list">
                          <li>{description}</li>
                        </ul>
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>
              </div> */}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
