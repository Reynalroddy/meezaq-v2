"use client";
import React from "react";
import Slider from "../hero/Slider";
import Stats from "../hero/Stats";
import Feature from "../features/Feature";
import { features, features2 } from "@/utils/data";
import Products from "./NewProducts";
import NewsLetter from "./NewsLetter";
import { productProps } from "@/utils/types";

const Home = ({ products }: { products: productProps[] }) => {
  return (
    <>
      <Slider />
      <Stats />
      <Feature features={features} />
      <Feature features={features2} reverse />
      <Products prod={products} />
      <NewsLetter />
    </>
  );
};

export default Home;
