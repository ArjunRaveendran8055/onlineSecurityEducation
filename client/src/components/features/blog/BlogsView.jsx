import React from "react";
import { blogData } from "../../../static/data";

const BlogsView = () => {
  return (
    <div className=" bg-white">
      <div className="main-container sm:p-4  lg:px-80 lg:py-12">
        <div className="page-tile sm:text-xl lg:text-2xl uppercase font-semibold pb-5">
          <span className="sm:pb-2 lg:pb-5 border-b-2">edublink | Blogs</span>
        </div>
        <div className="blogs-container ">
          {blogData.map((item, index) => (
            <div
              key={index}
              className="blog-item-container flex flex-col gap-2"
            >
              <div
                className="blog-heading pt-12 sm:text-3xl lg:text-4xl font-Playfiar"
                key={index}
              >
                {item.blogName}
              </div>
              <div className="dataLikesComments w-full bg-white flex sm:gap-2 lg:gap-8">
                <span className="text-xs text-gray font-ShadowIntoLight">{item.date}</span>
                <span className="text-xs text-gray font-ShadowIntoLight">10 comments</span>
                <span className="text-xs text-gray font-ShadowIntoLight">{item.likes} Likes</span>
              </div>
              <div className="para-container sm:pt-2  lg:pt-5 sm:line-clamp-5 lg:line-clamp-4 text-justify">
                {item.details.map((data, i) => (
                  <div key={i}>
                    <div className="paraheader sm:pt-2 lg:pt-5">
                      {data.para}
                    </div>
                    <div className="para-desc-container font-ShadowIntoLight text-gray">{data.desc}</div>
                  </div>
                ))}
              </div>
              <div className="bg-white flex sm:gap-4 lg:gap-20 pt-5">
                <button className="uppercase py-1 px-4 bg-white rounded-3xl font-Barlaw border-orange text-orange border-2
                hover:bg-orange hover:text-white duration-200">
                    Read More
                </button>
                <button className="uppercase py-1 px-4 bg-white text-gray-light border-2 border-gray-light 
                rounded-2xl font-Barlaw hover:bg-gray-light hover:text-white duration-200">
                    Leave a comment
                    </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsView;
