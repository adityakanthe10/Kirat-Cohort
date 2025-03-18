import { BlogSkeleton } from "../components/BlogSkeleton";
import { FullBlog } from "../components/FullBlog";
import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";

export const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog({ id: id || "" });

  if (loading) {
    return (
      <div>
        <BlogSkeleton />
      </div>
    );
  }

  // Ensure blog is defined before rendering FullBlog
  if (!blog) {
    return <div>Error: Blog not found</div>;
  }
  return (
    <div>
      <FullBlog blog={blog} />
    </div>
  );
};
