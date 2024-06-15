"use client";
import React from "react";
import Slider from "../hero/Slider";
import Stats from "../hero/Stats";
import Feature from "../features/Feature";
import { features, features2 } from "@/utils/data";
import Products from "./NewProducts";
import NewsLetter from "./NewsLetter";

const Home = () => {
  return (
    <>
      <Slider />
      <Stats />
      <Feature features={features} />
      <Feature features={features2} reverse />
      <Products />
      <NewsLetter />
    </>
  );
};

export default Home;
