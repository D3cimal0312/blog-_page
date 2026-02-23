import React, { useEffect, useState } from "react";
import categoriesData from "../Data/categories.json";
import "./Land.css";

import Blogcard from "../components/Blogcard";


import Titlehead from "../components/Titlehead";
const Land = () => {

    const [cat,setCat]=useState([]);
    const [cate,setCate]=useState("");

useEffect(() => {
  setCat(categoriesData.categories);
}, []);
const repeated = [...cat, ...cat];
console.log(cat)
  return (
    <div className="">
      <div className="land_title text-base/tight  sm:text-9xl  lg:text-[300px] lg:mt-12 tracking-[5px] font-extrabold text-center">
        BLOG /Z
      </div>

<div className="mx-6">
      <div className="overflow-hidden w-full  bg-black py-2 ">
 
        <ul className="  inhscroll flex gap-16  list-none   text-white animate-infinitescroll">
          {
          repeated.map(
            (item, index) => (
<li
  key={index}
  className={`border-r px-16 text-3xl`}
 onClick={()=>{setCate({item})}}>
  {item}
</li>
            )
          )}
        </ul>
      </div>
      </div>
          <Titlehead title={"Recent Blog"}/>

          <Blogcard Cate={cate}/>
    </div>
  );
};

export default Land;