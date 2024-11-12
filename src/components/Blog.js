import React, { useEffect, useState } from 'react';
import api from '../api';

const Blog = () => {
  const [blogs , setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await api.get('/api/blogs');
        setBlogs(response.data.data);
      } catch (error) {
        console.error("Error fetching blog posts", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {blogs.map((blog) => (
          <div key={blog.id}>
            <h2>{blog.attributes.title}</h2>
            <p>{blog.attributes.content}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
