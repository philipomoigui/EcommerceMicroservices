import React from "react";
import BlogCard from "../components/Card/BlogCard";
import ProductCard from "../components/Card/ProductCard";
import Carousel from "../components/Carousel/Carousel";
import HomeDiscount from "../components/Discount/HomeDiscount";
import { slides } from "../helpers/data";

const Home = () => {
  return (
    <div className="w-[100%]">
      <div className="h-[480px]">
        <Carousel slides={slides} />
      </div>
      <div className=" font-[600] text-[15px] uppercase  text-[#333E48] p-[1rem] uppercase border-b-2 mt-[40px] w-[100%]">
        latest products
      </div>
      <div className="flex justify-between items-center mt-[40px]">
        <ProductCard
          image="https://capricathemes.com/opencart/OPC09/OPC090216/OPC1/image/cache/catalog/19-208x230.jpg"
          price="99.0"
          description="Pretium lectus quam id leo in vitae turpis"
          category="Camera"
          rating={5}
          slug="this-is-a-slug"
        />
        <ProductCard
          image="https://capricathemes.com/opencart/OPC09/OPC090216/OPC1/image/cache/catalog/18-208x230.jpg"
          price="50.0"
          description="Viverra ipsum nunc aliquet bibendum enim facilisis"
          category="Accesories"
          rating={2}
          slug="this-is-a-slug"
        />
        <ProductCard
          image="https://capricathemes.com/opencart/OPC09/OPC090216/OPC1/image/cache/catalog/17-208x230.jpg"
          price="99.0"
          description="Amet aliquam id diam maecenas ultricies mi"
          category="Speaker"
          rating={4}
          slug="this-is-a-slug"
        />
        <ProductCard
          image="https://capricathemes.com/opencart/OPC09/OPC090216/OPC1/image/cache/catalog/16-208x230.jpg"
          price="99.0"
          description="Volutpat commodo sed egestas egesta"
          category="Phone"
          rating={0}
          slug="this-is-a-slug"
        />
      </div>
      <div className="mt-[40px]">
        <HomeDiscount />
      </div>
      <div className=" font-[600] text-[15px] uppercase  text-[#333E48] p-[1rem] uppercase border-b-2 mt-[40px] w-[100%]">
        latest blog
      </div>
      <div className="flex justify-between items-center mt-[40px]">
        <BlogCard
          image="https://capricathemes.com/opencart/OPC09/OPC090216/OPC1/image/cache/catalog/blog-5-900x771.jpg"
          date="26 Aug, 2022"
          title="incididunt ut labore"
          description="laboris nisi ut aliquip ex ea commodo consequat..."
        />
        <BlogCard
          image="https://capricathemes.com/opencart/OPC09/OPC090216/OPC1/image/cache/catalog/blog-6-900x771.jpg"
          date="6 Jan, 2022"
          title="reprehenderit in voluptate"
          description="laboris nisi ut aliquip ex ea commodo consequat..."
        />
        <BlogCard
          image="https://capricathemes.com/opencart/OPC09/OPC090216/OPC1/image/cache/catalog/blog-3-900x771.jpg"
          date="15 July, 2022"
          title="officia deserunt mollit"
          description="laboris nisi ut aliquip ex ea commodo consequat..."
        />
      </div>
    </div>
  );
};

export default Home;
