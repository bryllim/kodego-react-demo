import BlogCard from "./components/BlogCard";

const Blogs = () => {
  return (
    <>
      <h1 className="my-4">Blogs</h1>
      <BlogCard
        title="This is a title"
        content="This is the content"
        author="Bryl Lim"
      />
      <BlogCard
        title="Another title"
        content="another content"
        author="Another author"
      />
    </>
  );
};

export default Blogs;