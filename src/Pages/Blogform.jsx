import React, { useEffect, useState } from "react";

import Titlehead from "../components/Titlehead";

import categoriesData from "../Data/categories.json";

export const BlogePage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [img, setImg] = useState("");

  const [blog, setBlog] = useState([  ]);

  const submit = (e) => {
    e.preventDefault();

    if (
      title.trim() === "" ||
      description.trim() === "" ||
      author.trim() === "" ||
      category.trim() === ""
    ) {
      alert("enter all regarding data");
      return;
    }

    const newblog = {
      id: Date.now(),
      titlestr: title,
      descriptionstr: description,
      authorstr: author,
      categorystr: category,
      datestr: date,
      imgstr: img,
    };
    const updated=[...blog, newblog];
    setBlog([...blog, newblog]);

    console.log(blog);
    localStorage.setItem("blogs", JSON.stringify(updated));



    // reseting all daata
    setTitle("");
setDescription("");
setAuthor("");
setCategory("");
setDate("");
setImg("");
  };


  useEffect(() => {
  const stored = localStorage.getItem("blogs");
  if (stored) {
    setBlog(JSON.parse(stored));
  }
}, []);

  return (
    <>
    <Titlehead title={"Share your Experience"}/>
    <div className="flex justify-center  mt-12 ">
      
      <div className="bg-white sm:w-[90%] md:w-[80%] lg:w-[70%]  flex flex-col rounded-4xl ">
          <h1 className="bg-black text-white text-center text-2xl py-4 rounded-t-2xl mb-6">New Post Entry</h1>
        
        <form  className="flex flex-col md:p-6  sm:p-4 lg:p-12">
          <label htmlFor="title" id="titleinput" className="text-xl tracking-widest text-gray-500 mb-1  ">
            Title
          </label>
          <input
            id="title"

             value={title}
            type="text"
            className="bg-slate-100 mb-6 p-4 placeholder:text-gray-400 border border-black rounded-[8px]"
            placeholder="Title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />

          

          <label htmlFor="" id="decription" className="text-xl tracking-widest text-gray-500 mb-1" >
            Description
          </label>
          <textarea
            id="Share your experience"
            type="text"
            value={description}
            className="bg-slate-100 mb-6 p-4 placeholder:text-gray-400 border border-black rounded-[8px] min-h-50"
            placeholder="Details regarding vlog"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          


          

<div className="flex  justify-between">
    <div className="">
          <label htmlFor="author" className="text-xl tracking-widest text-gray-500 mb-1 mr-4" >Author</label>
          <input
            id="author"
            type="text"
            value={author}
            className="w-80 bg-slate-100 mb-6 p-4 placeholder:text-gray-400 border border-black rounded-[8px]"
            placeholder="e.g, Jhon Doe"
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
          />
</div>
  <div className="">
          <label htmlFor="category" className="text-xl tracking-widest text-gray-500 mb-1 mr-4  ml-6" >Category</label>

<select
  id="category"
  defaultValue=""
   value={category}
  className="bg-slate-100 mb-6 p-4 border border-black text-gray-400 rounded-[8px]"
  onChange={(e) => setCategory(e.target.value)}
>
  <option value="" disabled className="">...Select</option>
  {categoriesData.categories.map((cat) => (
    <option key={cat} value={cat} className="text-black">{cat}</option>
  ))}
</select>
</div>

<div className="">          <label htmlFor="date" className="text-xl tracking-widest text-gray-500 mb-1 mr-4 ml-6" >Date</label>
          <input
            type="date"
              value={date}
            className="bg-slate-100 mb-6 p-4 text-gray-400 border border-black rounded-[8px]"
            placeholder="date"
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
</div>
</div>

          <label htmlFor="image" className="text-xl tracking-widest text-gray-500 mb-1" >Image</label>
          <input
            type="text"
            value={img}
            className="bg-slate-100 mb-6 p-4 placeholder:text-gray-400 border border-black rounded-[8px]"
            placeholder="https://example.com/image.jpg"
            onChange={(e) => {
              setImg(e.target.value);
            }}
          />



          <button type="button"
          className=" w-fit px-8 py-4 rounded-lg bg-black text-white font-semibold "
          onClick={submit}
        >
          Publish Blog
        </button>
        </form>


      </div>
      </div>
    </>
  );
};
