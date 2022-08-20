import React from "react";
import ProductCard from "../components/Card/ProductCard";
import Carousel from "../components/Carousel/Carousel";
import { slides } from "../helpers/data";

const Home = () => {
  return (
    <div className="w-[100%]">
      <div className="h-[480px]">
        <Carousel slides={slides} />
      </div>
      <div className="flex justify-between items-center mt-[40px]">
        <ProductCard
          image="https://capricathemes.com/opencart/OPC09/OPC090216/OPC1/image/cache/catalog/19-208x230.jpg"
          price="99.0"
          description="Pretium lectus quam id leo in vitae turpis"
          category="Camera"
        />
        <ProductCard
          image="https://capricathemes.com/opencart/OPC09/OPC090216/OPC1/image/cache/catalog/18-208x230.jpg"
          price="50.0"
          description="Viverra ipsum nunc aliquet bibendum enim facilisis"
          category="Accesories"
        />
        <ProductCard
          image="https://capricathemes.com/opencart/OPC09/OPC090216/OPC1/image/cache/catalog/17-208x230.jpg"
          price="99.0"
          description="Amet aliquam id diam maecenas ultricies mi"
          category="Speaker"
        />
        <ProductCard
          image="https://capricathemes.com/opencart/OPC09/OPC090216/OPC1/image/cache/catalog/16-208x230.jpg"
          price="99.0"
          description="Volutpat commodo sed egestas egesta"
          category="Phone"
        />
      </div>
    </div>
  );
};

export default Home;
