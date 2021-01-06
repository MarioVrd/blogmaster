import React from 'react';
import BlogItem from '../components/BlogItem';
import Alert from '../components/Alert';
import Loader from '../components/Loader';
import { useLocation } from 'react-router-dom';
import { BlogGrid, Container } from '../styles';
import styled from 'styled-components';
import useData from '../hooks/useData';

const CategoryScreen = () => {
	const { pathname } = useLocation();
	const category = pathname.split('/')[2];

	const [blogs, error] = useData({ category: category });

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
					{blogs.map(blog => (
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
