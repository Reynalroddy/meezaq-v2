import { categoriesFilter } from "@/utils/data";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const Filter = () => {
  return (
    <aside>
      <h2 className="text-3xl font-bold mb-3">Filters</h2>
      <div className="block lg:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className=" w-full  font-semibold"
            >
              filters
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {categoriesFilter.map((cat, i) => (
              <DropdownMenuItem key={i}>
                <Link href={cat.href} className="">
                  {cat.name}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* <button
            type="button"
            className="inline-flex items-center lg:hidden"
            onClick={() => setMobileFiltersOpen(true)}
          >
            <span className="text-sm font-medium text-gray-700">Filters</span>
           
          </button> */}

      <div className="hidden lg:block">
        <div className="space-y-4 ">
          {categoriesFilter.map((cat, i) => (
            <div key={i} className={`${i === 0 ? null : ""}`}>
              <Link href={cat.href} className="">
                {cat.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Filter;
