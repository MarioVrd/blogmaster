import React, { useEffect, useState } from "react";
import BlogItem from "../components/BlogItem";
import Alert from "../components/Alert";
import Loader from "../components/Loader";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { BlogGrid, Container } from "../styles";
import styled from "styled-components";

const CategoryScreen = () => {
  const [blogs, setBlogs] = useState(null);
  const [error, setError] = useState(null);

  const { pathname } = useLocation();
  const category = pathname.split("/")[2];

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data } = await axios.get("/data/blogs.json");
        const filtered = data.filter(
          (blog) => blog.category.toLowerCase() === category.toLowerCase()
        );
        console.log(filtered);
        setBlogs(filtered);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchBlogs();

    return () => {
      setBlogs(null);
      setError(null);
    };
  }, [category]);

  return (
    <Container>
      <Heading>Blogs in {category} category</Heading>
      {error ? (
        <Container>
          <Alert>{error}</Alert>
        </Container>
      ) : !blogs ? (
        <Loader />
      ) : (
        <BlogGrid>
          {blogs.map((blog) => (
            <BlogItem blog={blog} key={blog.id} />
          ))}
        </BlogGrid>
      )}
    </Container>
  );
};

const Heading = styled.h1`
  font-weight: 500;
  margin: 3rem 0;
`;

export default CategoryScreen;
