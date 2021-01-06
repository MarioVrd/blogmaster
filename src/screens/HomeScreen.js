import React from 'react';
import FeaturedBlog from '../components/FeaturedBlog';
import BlogItem from '../components/BlogItem';
import { Container, BlogGrid } from '../styles';
import Alert from '../components/Alert';
import FeaturedBlogSkeleton from '../components/FeaturedBlogSkeleton';
import useData from '../hooks/useData';

const HomeScreen = () => {
	const [blogs, error] = useData();

	return (
		<>
			{error ? (
				<Container>
					<Alert>{error}</Alert>
				</Container>
			) : blogs == null ? (
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

export default HomeScreen;
