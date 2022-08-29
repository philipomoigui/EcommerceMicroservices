import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/Card/ProductCard";
import Rating from "../components/Rating/Rating";

const Product = () => {
  return (
    <div className="mt-[5rem] w-100">
      <div className="flex justify-between">
        <div className="w-[48%]">
          <div className="w-[356px] h-[393px]">
            <img
              src="https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=356&h=393&dpr=1"
              alt="Product Image"
              className="w-100 h-100"
            />
          </div>
        </div>
        <div className="w-[48%]">
          <div>
            <h3 className="mt-[12px] mb-[5px] text-[22px] font-normal">
              Circumstances And Owing To The Claims
            </h3>
          </div>
          <div>
            <Rating rating={3} />
          </div>
          <div>
            <ul>
              <li className="leading-[26px] text-[16px] mt-[1rem]">
                <span className="font-medium text-[#333e48]">Brand:</span>
                <Link to="/" className="pl-[1rem]">
                  Palm
                </Link>
              </li>
              <li className="leading-[26px] text-[16px] mt-[1rem]">
                <span className="font-medium text-[#333e48] pr-[1rem]">
                  Avalaibility:
                </span>
                In Stock
              </li>
            </ul>
          </div>
          <hr className="mt-[1rem]" />
          <div>
            <div>
              <h3 className="mt-[12px] mb-[5px] text-[20px] font-normal">
                Price: $93.00
              </h3>
            </div>
            <div className="flex items-center">
              <label htmlFor="Qty" className="text-[14px]">
                Qty
              </label>
              <input
                type="number"
                className="h-[44px] ml-[5px] border border-[#eaeaea] focus:outline-none  w-[10%] text-center mr-[5px]"
                value={1}
              />
              <button
                type="submit"
                className="pt-[9px] pb-[9px] pl-[25px] pr-[25px] min-w-[170px] bg-[#fed700] border border-[#fed700] text-[#333e48] uppercase text-[14px] font-medium hover:bg-[#333e48] hover:text-[#fff] hover:border-[#333e48]"
              >
                add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 className="mt-[12px] mb-[5px] text-[22px] font-normal">
          Description
        </h3>
        <div className="p-[3rem] border border-[#eaeaea] text-[#333e48] font-normal text-[14px] leading-[26px]">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum Neque porro
          quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
          adipisci velit, sed quia non numquam eius modi tempora incidunt ut
          labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
          veniam, quis nostrum exercitationem ullam corporis suscipit
          laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel
          eum iure reprehenderit qui in ea voluptate velit esse quam nihil
          molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas
          nulla pariatur
        </div>
      </div>
      <div className=" font-[600] text-[15px] uppercase  text-[#333E48] p-[1rem] uppercase border-b-2 mt-[40px] w-[100%]">
        related products
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
    </div>
  );
};

export default Product;
