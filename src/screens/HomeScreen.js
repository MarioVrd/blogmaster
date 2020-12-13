import React, { useState, useEffect } from 'react';
import Loader from '../components/Loader';
import FeaturedBlog from '../components/FeaturedBlog';
import BlogItem from '../components/BlogItem';
import axios from 'axios';
import { Container } from '../styles';
import styled from 'styled-components';

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
		<div>
			{error ? (
				<div className='alert alert--danger'>{error}</div>
			) : !blogs ? (
				<Loader />
			) : (
				<>
					<FeaturedBlog key='featured' blog={blogs[0]} />

					<Container>
						<BlogGrid>
							{blogs.map((blog, index) => (
								<BlogItem key={blog.id} blog={blog} />
							))}
						</BlogGrid>
					</Container>
				</>
			)}
		</div>
	);
};

const BlogGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
	gap: 2rem;
`;

export default HomeScreen;
