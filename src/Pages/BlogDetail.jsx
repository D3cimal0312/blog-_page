import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null); 

  useEffect(() => {
    const stored = localStorage.getItem("blogs");
    if (stored) {
      const blogs = JSON.parse(stored);
      const found = blogs.find((p) => p.id === parseInt(id));
      setPost(found || null); 
    }
  }, [id]);

const deletePost = (id) => {
  const stored = localStorage.getItem("blogs");
  if (stored) {
    const blogs = JSON.parse(stored);
    const updated = blogs.filter((post) => post.id !== id);  
    localStorage.setItem("blogs", JSON.stringify(updated));   
    setBlog(updated);   
                                          
  }
};
  if (!post) return (
    <div className="flex justify-center items-center h-screen">
      <p className="text-gray-400">Loading...</p>
    </div>
  );

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">

      <button
        onClick={() => navigate(-1)}
        className="mb-8 text-sm text-gray-500 hover:text-black transition-colors"
      >
        ← Back
      </button>

      <img
        src={post.imgstr}
        alt={post.titlestr}
        className="w-full h-72 object-cover rounded-lg mb-8"
      />

      <div className="flex items-center gap-3 mb-4">
        <span className="text-xs uppercase tracking-widest text-white bg-black px-3 py-1 rounded-full">
          {post.categorystr}
        </span>
        <span className="text-xs text-gray-400">{post.datestr}</span>
      </div>

      <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.titlestr}</h1>
      <p className="text-sm text-gray-400 mb-8">By {post.authorstr}</p>

      <hr className="mb-8" />

      <p className="text-gray-700 text-lg leading-8">
        <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat neque iste odio tempore impedit quaerat rem maxime consequuntur debitis maiores earum itaque ut architecto consectetur aspernatur ad nam odit, dicta, eos cumque nostrum? Voluptatibus temporibus aliquid ducimus enim quos quidem quisquam, eos optio, dignissimos distinctio officiis odio expedita perferendis possimus?</p>
        <p className='mb-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, ipsam!</p>
        {post.descriptionstr}
        </p>

        <div className='w-full flex justify-end'>
        <div className="w-fit" onClick={()=>navigate(-1)}>
      
        <button className=' bg-red-600 text-white rounded-lg py-2 px-4 hover:bg-red-700 mt-25 hover:scale-110' onClick={()=>{deletePost(post.id);}}>Delete</button>
      

      
        </div>
        </div>
    </div>
  );
};

export default BlogDetail;