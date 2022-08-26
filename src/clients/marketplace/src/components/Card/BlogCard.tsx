import React from "react";

const BlogCard = (props: {
  image: string;
  date: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="max-w-[290px] max-h-[380px] border border-black-100">
      <div className="w-[100%]">
        <img src={props.image} alt="" className="h-[239px] w-[100%]" />
      </div>
      <div className="p-[20px]">
        <div className="text-[14px] font-medium capitalize leading-[18px] tracking-[.5px] text-blue-500">
          {props.date}
        </div>
        <div>
          <h4 className="capitalize text-[#333e48] font-medium text-[14px] leading-[26px]">
            {props.title}
          </h4>
        </div>
        <div className="text-[#333e48] font-normal leading-[22px] capitalize text-lg">
          {props.description}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
