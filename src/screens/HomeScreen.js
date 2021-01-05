import React, { useState, useEffect } from "react";
import FeaturedBlog from "../components/FeaturedBlog";
import BlogItem from "../components/BlogItem";
import axios from "axios";
import { Container, BlogGrid } from "../styles";
import Alert from "../components/Alert";
import FeaturedBlogSkeleton from "../components/FeaturedBlogSkeleton";

const HomeScreen = () => {
  const [blogs, setBlogs] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data } = await axios.get("/data/blogs.json");
        setBlogs(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <>
      {error ? (
        <Container>
          <Alert>{error}</Alert>
        </Container>
      ) : !blogs ? (
        <FeaturedBlogSkeleton />
      ) : (
        <>
          <FeaturedBlog key='featured' blog={blogs[0]} />

          <Container>
            <BlogGrid>
              {blogs.map((blog) => (
                <BlogItem key={blog.id} blog={blog} />
              ))}
            </BlogGrid>
          </Container>
        </>
      )}
    </>
  );
};

export default HomeScreen;
