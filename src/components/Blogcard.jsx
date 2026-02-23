import React, { useEffect, useState } from "react";
import categoriesData from "../Data/categories.json";
import { Link } from "react-router-dom";
const Blogcard = ({Cate}) => {
  const [blogitem, SetBlogItem] = useState([]);
 console.log(Cate,"category");       
  useEffect(() => {
    const storedBlogData = localStorage.getItem("blogs");

    if (storedBlogData) {
      SetBlogItem(JSON.parse(storedBlogData));
    }
  }, []);

  console.log(blogitem[2]);
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 p-12 gap-8">
      {blogitem.filter((p)=>p.categorystr===Cate.item).map((post) => (
        <Link to={`/blog/${post.id}`} key={post.id}>
        <div className="bg-white rounded-lg shadow p-6 h-125">
          <img
            src={post.imgstr}
            alt={post.titlestr}
            className="w-full h-60 object-cover rounded mb-4"
          />
          <span className="text-xs text-white bg-black p-2 uppercase rounded tracking-widest">
            {post.categorystr}
          </span>
          <h2 className="text-xl font-bold mt-2 capitalize">{post.titlestr}</h2>
          <p className="text-gray-500 text-sm mt-1 line-clamp-3">
             {post.descriptionstr.split(" ").slice(0, 30).join(" ")}...
          </p>
          <div className="flex justify-between text-xs text-gray-400 mt-3 capitalize">
            <span>By: {post.authorstr}</span>
            <span>{post.datestr}</span>
          </div>
        </div>
        </Link>
      ))}
    </div>
  );
};

export default Blogcard;
