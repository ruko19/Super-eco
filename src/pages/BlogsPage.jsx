import BlogItem from "../components/BlogItem/BlogItem";
import { useBlogs } from "../hooks/useBlogs";
const BlogsPage = () => {

  const { blogs } = useBlogs()
  return (
    <div className="container flex gap-8 ">
      <div>
        {
          blogs.map((b) => (
            <BlogItem data={b} key={b.id} />

          ))

        }
      </div>



    </div>
  );
}

export default BlogsPage
