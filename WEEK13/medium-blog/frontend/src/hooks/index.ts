import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";

export interface Blog {
  content: string;
  title: string;
  id: number;
  author: {
    name: string;
  };
  publishedDate: string; // ✅ Added publishedDate field
}

export const useBlog = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<Blog>();

  useEffect(() => {
    try {
      axios
        .get(`${BACKEND_URL}/api/v1/blog/blog/${id}`, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((response) => {
          console.log(response);
          setBlog(response.data.blog);
          setLoading(false);
        });
    } catch (error) {
      alert("Something went wrong");
      console.log(error);
    }
  }, [id]);
  return {
    loading,
    blog,
  };
};

export const useBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    try {
      axios
        .get(`${BACKEND_URL}/api/v1/blog/blog/bulk`, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((response) => {
          console.log(response);
          setBlogs(response.data.blog);
          setLoading(false);
        });
    } catch (error) {
      alert("Something went wrong");
      console.log(error);
    }
  }, []);
  return {
    loading,
    blogs,
  };
};
