import React, { useEffect, useState } from "react";

import Titlehead from "../components/Titlehead";

import categoriesData from "../Data/categories.json";
import Table from "./Table";
import './Table.css'

export const BlogePage = () => {
  const [blogData, setBlogData] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [editItem, setEditItem] = useState({});

    // !load huda sath local storage bata data pull garxa
    useEffect(() => {
      const storedData = localStorage.getItem("blogs");
      if (storedData) {
        setBlogData(JSON.parse(storedData));
      }
    }, []);
  
  
    const handleEdit = (index) => {
      setEditIndex(index);
      // console.log(index);
      setEditItem({ ...blogData[index] });
const activeBlog=(blogData[index]);

console.log(activeBlog);




    setTitle(activeBlog.titlestr);
setDescription(activeBlog.descriptionstr);
setAuthor(activeBlog.authorstr);
setCategory(activeBlog.categorystr);
setDate(activeBlog.datestr);
setImg(activeBlog.imgstr);
    };
  
  
    const handleSave = () => {
 const updatedBlog = {
    ...blogData[editIndex],
    titlestr: title,
    descriptionstr: description,
    authorstr: author,
    categorystr: category,
    datestr: date,
    imgstr: img,
  };

  const updatedData = [...blogData];
  updatedData[editIndex] = updatedBlog;

  setBlogData(updatedData);
  localStorage.setItem("blogs", JSON.stringify(updatedData));

  // reset
  setEditIndex(null);
  setEditItem({});
  setTitle("");
  setDescription("");
  setAuthor("");
  setCategory("");
  setDate("");
  setImg("");



    };
  
  
    const handleDelete = (index) => {
      const updatedData = blogData.filter((_, i) => i !== index);
      setBlogData(updatedData);
      localStorage.setItem("blogs", JSON.stringify(updatedData));
    };
  
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
    <div className="flex justify-center flex-col mt-12 ">
      
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




{editIndex!==null ? (<button onClick={() => handleSave()} className='bg-green-600 w-fit px-8 py-4 rounded-lg text-white font-semibold'>
                    Save
                  </button>
                ) : (
          <button type="button"
          className=" w-fit px-8 py-4 rounded-lg bg-black text-white font-semibold "
          onClick={submit}
        >
          Publish Blog
        </button>
                )}

        </form>


      </div>
          <div>
      <table border="1" cellPadding="8" className='border-collapse border m-8 '>
        <thead>
          <tr>
            <th>Id</th>
            <th>Author</th>
            <th>Blog</th>
            <th id="describe">Description</th>
            <th>Category</th>
            <th>ImageUrl</th>
            <th id="date">Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogData.map((item, index) => (
            <tr key={index}>

              <td>{index + 1}</td>


              <td>
                {  item.authorstr}
              </td>

              <td>
                { item.titlestr}
              </td>

              <td>
                { item.descriptionstr.split(" ").slice(0, 30).join(" ")}...
              </td>

              <td>
                { item.categorystr}
              </td>

              <td>
                {item.imgstr}
              </td>

              <td>
                {item.datestr}
              </td>


              <td>
                {editIndex === index ? 
                                  <div>
                  <button onClick={() => handleEdit(index)} className='bg-gray-600 text-white rounded px-2 py-1' disabled>
                    Edit
                  </button>
                                <button onClick={() => handleDelete(index)} className='ml-2 bg-gray-600 text-white rounded px-2 py-1' disabled>
                  Delete
                </button>
                </div> : (
                  <div>
                  <button onClick={() => handleEdit(index)} className='bg-green-600 text-white rounded px-2 py-1'>
                    Edit
                  </button>
                                <button onClick={() => handleDelete(index)} className='ml-2 bg-red-600 text-white rounded px-2 py-1'>
                  Delete
                </button>
                </div>
                )}
                
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
      </div>
    </>
  );
};
