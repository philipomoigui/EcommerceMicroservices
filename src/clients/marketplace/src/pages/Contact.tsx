import React from "react";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";

const location = {
  address: "1600 Amphitheatre Parkway, Mountain View, california.",
  lat: 37.42216,
  lng: -122.08427,
};

const Contact = () => {
  return (
    <div>
      <div className="flex justify-end items-center">
        <div className="flex justify-center items-center">
          <Link to="/" className="p-[1rem]">
            <AiFillHome className="hover:text-yellow-500" />
          </Link>
        </div>
        <div>|</div>
        <div className="flex justify-center items-center">
          <Link
            to="/contact"
            className="text-[14px] text-[#333E48] tracking-wide hover:text-yellow-500 p-[1rem]"
          >
            Contact Us
          </Link>
        </div>
      </div>
      <h3 className="mt-[12px] mb-[5px] text-[22px] font-semibold">
        Contact Us
      </h3>
      <div className="w-100 flex justify-start">
        <div className="w-[50%] border-r-2 border-[#eaeaea] p-[2rem]">
          <h3 className="mt-[12px] mb-[5px] text-[20px] font-normal pl-0 pr-0">
            Contact Form
          </h3>
          <div className="w-100">
            <form>
              <div className="flex justify-between items-center w-[100%] mb-[1rem]">
                <label
                  htmlFor="Name"
                  className="text-[14px] font-semibold text-[#333E48] w-[25%]"
                >
                  Your Name:
                </label>
                <input
                  type="text"
                  className="w-[75%] pt-[6px] pb-[6px] pl-[12px] pr-[12px] text-[#333E48] bg-[#fff] border border-[#eaeaea] h-[40px] focus:outline-none"
                />
              </div>
              <div className="flex justify-between items-center w-[100%] mb-[1rem]">
                <label
                  htmlFor="Name"
                  className="text-[14px] font-semibold text-[#333E48] w-[25%]"
                >
                  Your Email:
                </label>
                <input
                  type="email"
                  className="w-[75%] pt-[6px] pb-[6px] pl-[12px] pr-[12px] text-[#333E48] bg-[#fff] border border-[#eaeaea] h-[40px] focus:outline-none"
                />
              </div>
              <div className="flex justify-between w-[100%] mb-[1rem]">
                <label
                  htmlFor="Name"
                  className="text-[14px] font-semibold text-[#333E48] w-[25%]"
                >
                  Enquiry:
                </label>
                <textarea
                  className="w-[75%] pt-[6px] pb-[6px] pl-[12px] pr-[12px] text-[#333E48] bg-[#fff] border border-[#eaeaea] focus:outline-none"
                  rows={15}
                ></textarea>
              </div>
              <div className="flex justify-end items-center">
                <input
                  type="submit"
                  value="Submit"
                  className="font-medium text-center pt-[7px] pb-[7px] pl-[20px] pr-[20px] uppercase leading-[24px] bg-[#fed700] hover:text-[#fff] hover:border-[#333e48] hover:bg-[#333e48]"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="w-[50%] p-[2rem]">
          <h3 className="mt-[12px] mb-[5px] text-[20px] font-normal pl-0 pr-0">
            Our Location
          </h3>
          <div className="w-100">
            <div className="border-b-2 border-[#eaeaea] flex justify-start">
              <div className="w-[50%]">
                <h5 className="text-[14px] font-semibold text-[#333E48]">
                  Address:
                </h5>
                <div className="mt-[10px] mb-[20px] text-[14px] font-normal leading-[26px] tracking-[0.5px]">
                  JayStore - Electronic Store - Ikeja City Mall Lagos, Nigeria
                </div>
              </div>
              <div className="w-[50%] justify-start">
                <div className="mb-[5px]">
                  <h5 className="text-[14px] font-semibold text-[#333E48]">
                    Telephone:
                  </h5>
                  <div className="mt-[10px] mb-[10px] text-[14px] font-normal leading-[26px] tracking-[0.5px]">
                    :(234) 813 307 906
                  </div>
                </div>
                <div className="mb-[5px]">
                  <h5 className="text-[14px] font-semibold text-[#333E48]">
                    Email:
                  </h5>
                  <div className="mt-[10px] mb-[10px] text-[14px] font-normal leading-[26px] tracking-[0.5px]">
                    jamesekene8@gmail.com
                  </div>
                </div>
                <div className="mb-[5px]">
                  <h5 className="text-[14px] font-semibold text-[#333E48]">
                    Opening Times:
                  </h5>
                  <div className="mt-[10px] mb-[10px] text-[14px] font-normal leading-[26px] tracking-[0.5px]">
                    9:00 AM to 6:00 PM (Monday to Friday)
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-[10px] mb-[10px] text-[14px] font-normal leading-[26px] tracking-[0.5px]">
              <p className="text-[14px] font-semibold text-[#333E48]">Note:</p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
