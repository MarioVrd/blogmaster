import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { Container } from '../styles';
import Alert from '../components/Alert';
import Loader from '../components/Loader';
import styled from 'styled-components';
import BlogAuthor from '../components/BlogAuthor';

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
			{error ? (
				<Alert>{error}</Alert>
			) : !blog ? (
				<Loader />
			) : (
				<BlogArticle>
					<div className='created'>
						{blog.category} - {blog.createdAt} by {blog.user.name}
					</div>
					<h1>{blog.title}</h1>
					<img src={blog.thumbnailImg} alt={blog.title} />
					{/* <p>{blog.body}</p> */}
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis illum ex ab
						laudantium eum odio possimus minima beatae ipsum impedit molestias qui, ratione
						voluptate id consequatur cumque, fugiat quis! Ad.
					</p>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis voluptatem
						quibusdam sed ducimus incidunt. Eveniet, quasi error blanditiis, rem vel libero eaque
						consequatur, corrupti molestiae eligendi modi sed culpa nemo iure veniam. Quae, deleniti
						corrupti!
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, eveniet veritatis.
						Eius, culpa omnis.
					</p>

					<footer>
						<BlogAuthor author={blog.user} />
					</footer>
				</BlogArticle>
			)}
		</Container>
	);
};

const BlogArticle = styled.article`
	h1 {
		font-weight: 500;
		font-size: 2.5rem;
		line-height: 1.1;
		margin: 1rem 0 2rem;
	}

	img {
		object-fit: cover;
		height: 45vh;
		width: 100%;
		display: block;
		margin-bottom: 2rem;
	}

	p {
		font-size: 1.125em;
		line-height: 1.8;
		margin-bottom: 1rem;
	}
`;

export default BlogScreen;
