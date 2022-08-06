import { useEffect, useState } from "react";
import BlogCard from "./components/BlogCard";

const Blogs = () => {

  const mediumURL = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@robertroybritt";

  useEffect(() => {
    fetch(mediumURL)
      .then(response => response.json())
      .then(data => {
        setBlogs(data.items);
        setIsLoading(false);
      })
      .catch(error => console.log(error));
  }, []);

  const [isLoading, setIsLoading] = useState(true);

  const [blogs, setBlogs] = useState([]);

  return (
    <>
      {isLoading ? (
        <h1 className="text-center my-5">Loading blogs...</h1>
      ) : (
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
      )}
    </>
  );
};

export default Blogs;