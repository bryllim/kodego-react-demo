import { useEffect, useState } from "react";
import BlogCard from "./components/BlogCard";

const Blogs = () => {

  const mediumURL = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@bryllim";

  useEffect(() => {
    fetch(mediumURL)
      .then(response => response.json())
      .then(data => {
        setBlogs(data.items);
      })
      .catch(error => console.log(error));
  } , []);
  
  const [blogs, setBlogs] = useState([]);

  return (
    <>
      <h1 className="my-4">Blogs</h1>
      {blogs.map(blog => (
        <BlogCard
          title={blog.title}
          content={blog.content}
          author={blog.author}
        />
      ))}
    </>
  );
};

export default Blogs;