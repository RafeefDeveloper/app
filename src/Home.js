import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const title = "Home Component";
  // const [blogs, setBlogs] = useState([
  //   { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
  //   { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
  //   {
  //     title: "Web dev top tips",
  //     body: "lorem ipsum...",
  //     author: "mario",
  //     id: 3,
  //   },
  // ]);
  const [blogs, setBlogs] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const handleDelete = (id) => {
    const newBlog = blogs.filter((blog) => {
      return blog.id !== id;
    });
    setBlogs(newBlog);
  };
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) {
          throw Error("Could not fetch data for the resource");
        }
        return response.json();
      })
      .then((data) => {
        data.length = 10;
        setBlogs(data);
        setIsPending(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
      });
  }, [blogs]);
  return (
    <div>
      <h1>{title}</h1>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && (
        <BlogList
          blogs={blogs}
          title={"All Blogs!"}
          handleDelete={handleDelete}
        />
      )}
    </div>
  );
};
export default Home;
