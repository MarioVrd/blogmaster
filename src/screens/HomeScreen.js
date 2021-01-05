import React, { useState, useEffect } from 'react';
import FeaturedBlog from '../components/FeaturedBlog';
import BlogItem from '../components/BlogItem';
import axios from 'axios';
import { Container } from '../styles';
import styled from 'styled-components';
import Alert from '../components/Alert';
import FeaturedBlogSkeleton from '../components/FeaturedBlogSkeleton';

const HomeScreen = () => {
	const [blogs, setBlogs] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchBlogs = async () => {
			try {
				const { data } = await axios.get('/data/blogs.json');
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
							{blogs.map(blog => (
								<BlogItem key={blog.id} blog={blog} />
							))}
						</BlogGrid>
					</Container>
				</>
			)}
		</>
	);
};

const BlogGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(35ch, 1fr));
	column-gap: 3rem;
	row-gap: 2rem;

	@media (max-width: 500px) {
		grid-template-columns: 1fr;
	}
`;

export default HomeScreen;
