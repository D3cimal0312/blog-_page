import React, { useEffect, useState } from 'react';
import categoriesData from "../Data/categories.json";
import './Table.css'
const Table = () => {
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
    setEditItem({ ...blogData[index] });
  };


  const handleSave = (index) => {
    const updatedData = [...blogData];
    updatedData[index] = editItem;           
    setBlogData(updatedData);
    localStorage.setItem("blogs", JSON.stringify(updatedData)); 
    setEditIndex(null);                    
    setEditItem({});
  };


  const handleDelete = (index) => {
    const updatedData = blogData.filter((_, i) => i !== index);
    setBlogData(updatedData);
    localStorage.setItem("blogs", JSON.stringify(updatedData));
  };

  return (
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
                {editIndex === index
                  ? <input value={editItem.authorstr} onChange={(e) => setEditItem({ ...editItem, authorstr: e.target.value })} />
                  : item.authorstr}
              </td>

              <td>
                {editIndex === index
                  ? <input value={editItem.titlestr} onChange={(e) => setEditItem({ ...editItem, titlestr: e.target.value })} />
                  : item.titlestr}
              </td>

              <td>
                {editIndex === index
                  ? <textarea className='w-full'  value={editItem.descriptionstr} onChange={(e) => setEditItem({ ...editItem, descriptionstr: e.target.value })} />
                  : item.descriptionstr.split(" ").slice(0, 30).join(" ")}...
              </td>

              <td>
                {editIndex === index
                  ? <select  onChange={(e) => setEditItem({ ...editItem, categorystr: e.target.value })} >


                    <option value="{editItem.categorystr}"  className="">...Select</option>
  {categoriesData.categories.map((cat) => (
    <option key={cat} value={cat} className="text-black">{cat}</option>
  ))}
</select>                  
                  : item.categorystr}
              </td>

              <td>
                {editIndex === index
                  ? <input value={editItem.imgstr} onChange={(e) => setEditItem({ ...editItem, imgstr: e.target.value })} />
                  : item.imgstr}
              </td>

              <td>
                {editIndex === index
                  ? <input type="date" value={editItem.datestr} onChange={(e) => setEditItem({ ...editItem, datestr: e.target.value })} />
                  : item.datestr}
              </td>


              <td>
                {editIndex === index ? (
                  <button onClick={() => handleSave(index)} className='bg-green-600 text-white rounded px-2 py-1'>
                    Save
                  </button>
                ) : (
                  <button onClick={() => handleEdit(index)} className='bg-green-600 text-white rounded px-2 py-1'>
                    Edit
                  </button>
                )}
                <button onClick={() => handleDelete(index)} className='bg-red-600 text-white rounded px-2 py-1'>
                  Delete
                </button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;