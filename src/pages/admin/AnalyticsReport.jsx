import React, { useState, useEffect } from "react";
import axios from "axios";

const AnalyticsReport = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/posts");
        setPosts(response.data);
      } catch (error) {
        console.error("Gagal mengambil data berita:", error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold mb-4">Laporan Analitik Berita</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="mb-2">
            <span className="font-semibold">{post.title}</span> - {post.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnalyticsReport;
