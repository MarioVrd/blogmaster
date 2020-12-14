import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { Container } from '../styles';

const BlogScreen = () => {
	const { pathname } = useLocation();
	const blogId = parseInt(pathname.split('/')[2]);

	const [blog, setBlog] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchBlog = async () => {
			try {
				const { data } = await axios.get('/data/blogs.json');
				const [theBlog] = data.filter(blog => blog.id === blogId);
				setBlog(theBlog);
			} catch (error) {
				setError(error.message);
			}
		};

		fetchBlog();
	}, [blogId]);

	return (
		<Container>
			<h2>{error && error}</h2>
			<h1>{blog && blog.title}</h1>
		</Container>
	);
};

export default BlogScreen;
