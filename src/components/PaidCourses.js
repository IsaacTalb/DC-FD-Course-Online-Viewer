import React, { useEffect, useState } from 'react';
import api from '../api';

const PaidCourses = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get('/PaidCourses');
        setPosts(response.data.data);
      } catch (error) {
        console.error("Error fetching Paid Courses posts", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Paid Courses</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h2>{post.attributes.title}</h2>
            <p>{post.attributes.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaidCourses;
