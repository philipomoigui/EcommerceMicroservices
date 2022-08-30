import React from "react";
import ProductCard from "../components/Card/ProductCard";

const Category = () => {
  return (
    <div>
      <div>
        <h3 className="mt-[12px] mb-[5px] text-[22px] font-normal">Category</h3>
        <hr className="pb-[1rem] pt-[1rem]" />
        <div className="text-[#333e48] font-normal text-[14px] leading-[26px]">
          Shop Laptop feature only the best laptop deals on the market. By
          comparing laptop deals from the likes of PC World, Comet, Dixons, The
          Link and Carphone Warehouse, Shop Laptop has the most comprehensive
          selection of laptops on the internet. At Shop Laptop, we pride
          ourselves on offering customers the very best laptop deals. From
          refurbished laptops to netbooks, Shop Laptop ensures that every laptop
          - in every colour, style, size and technical spec - is featured on the
          site at the lowest possible price.
        </div>
        <div className="flex justify-between items-center mt-[40px] flex-wrap">
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
          <ProductCard
            image="https://capricathemes.com/opencart/OPC09/OPC090216/OPC1/image/cache/catalog/02-208x230.jpg"
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
            image="https://capricathemes.com/opencart/OPC09/OPC090216/OPC1/image/cache/catalog/12-208x230.jpg"
            price="92.0"
            description="Volutpat commodo sed egestas egesta"
            category="Phone"
            rating={0}
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
            image="https://capricathemes.com/opencart/OPC09/OPC090216/OPC1/image/cache/catalog/13-208x230.jpg"
            price="80.0"
            description="Amet aliquam id diam maecenas ultricies mi"
            category="Speaker"
            rating={4}
            slug="this-is-a-slug"
          />
          <ProductCard
            image="https://capricathemes.com/opencart/OPC09/OPC090216/OPC1/image/cache/catalog/14-208x230.jpg"
            price="99.0"
            description="Volutpat commodo sed egestas egesta"
            category="Phone"
            rating={0}
            slug="this-is-a-slug"
          />
          <ProductCard
            image="https://capricathemes.com/opencart/OPC09/OPC090216/OPC1/image/cache/catalog/09-208x230.jpg"
            price="99.0"
            description="Volutpat commodo sed egestas egesta"
            category="Phone"
            rating={0}
            slug="this-is-a-slug"
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
