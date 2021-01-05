import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
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
				<>
					<ShareSidebar>
						<Link to='#'>
							<i className='fab fa-facebook-f'></i>
						</Link>
						<Link to='#'>
							<i className='fab fa-twitter'></i>
						</Link>
						<Link to='#'>
							<i className='fas fa-envelope'></i>
						</Link>
					</ShareSidebar>
					<BlogArticle>
						<div className='created'>
							{blog.category} - {blog.createdAt} by {blog.user.name}
						</div>
						<h1>{blog.title}</h1>
						<img src={blog.thumbnailImg} alt={blog.title} />
						<div>{ReactHtmlParser(blog.body)}</div>

						<footer>
							<BlogAuthor author={blog.user} />
						</footer>
					</BlogArticle>
				</>
			)}
		</Container>
	);
};

const BlogArticle = styled.article`
	padding: 2rem 0;

	.created {
		margin-bottom: 2rem;
		opacity: 0.8;
	}

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
	ul {
		margin-bottom: 1rem;
	}

	li {
		margin-left: 1.5rem;
	}
`;

const ShareSidebar = styled.aside`
	display: flex;
	flex-direction: column;
	position: fixed;
	top: 20%;
	left: 0;
	text-align: center;
	background-color: var(--primary-color);

	a {
		color: #fff;
		padding: 1rem;
		display: block;
		line-height: 1;

		i {
			transition: transform 200ms ease-out;
		}

		&:hover,
		&:focus {
			i {
				transform: rotate(-10deg) scale(1.1);
			}
		}
	}

	a + a {
		border-top: 1px solid #fff;
	}

	@media (max-width: 850px) {
		top: unset;
		bottom: 0;
		flex-direction: row;
		width: 100vw;
		z-index: 20;

		a {
			flex-grow: 1;
		}

		a + a {
			border-top: none;
			border-left: 1px solid #fff;
		}
	}
`;

export default BlogScreen;
