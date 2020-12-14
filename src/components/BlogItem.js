import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BlogItem = ({ blog }) => {
	return (
		<Article>
			<header>
				<Link to={`/blog/${blog.id}`}>
					<img height='350' src={blog.thumbnailImg} loading='lazy' alt='' />
				</Link>
				<div className='category'>{blog.category}</div>
			</header>
			<Link to={`/blog/${blog.id}`}>
				<h1 className='blog__title'>{blog.title}</h1>
			</Link>
			<p className='blog__content'>{blog.body}</p>
			<footer>
				<div className='user'>
					<img className='user__avatar' src={blog.user.avatar} alt={blog.user.name} />
					<div className='user__details'>
						<span className='user__name'>{blog.user.name}</span>
						<p className='user__title'>{blog.user.title}</p>
					</div>
				</div>

				<p className='date'>{blog.createdAt}</p>
			</footer>
		</Article>
	);
};

const Article = styled.article`
	padding-bottom: 3rem;

	header {
		position: relative;

		.category {
			position: absolute;
			top: 10%;
			left: 0;
			background-color: var(--primary-color);
			padding: 0.5em 1em;
			color: #fff;
			border-top-right-radius: 4px;
			border-bottom-right-radius: 4px;
		}

		&::after {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			box-shadow: inset 0 0 2.5rem rgba(0, 0, 0, 0.5);
			border-radius: 8px;
			transition: opacity 250ms ease-out;
			pointer-events: none;
		}

		&:hover::after {
			opacity: 0.2;
		}
	}

	img {
		width: 100%;
		display: block;
		position: relative;
		object-fit: cover;
		height: auto;
		border-radius: 8px;
	}

	p {
		opacity: 0.8;
	}

	a {
		text-decoration: none;
	}

	.blog__title {
		line-height: 1.2;
		margin: 0.85em 0 0.65em;
		text-transform: capitalize;
		font-weight: 500;
		font-size: 1.25rem;
		text-decoration: none;
		color: #333;
		transition: color 250ms ease-in-out;

		&:hover {
			color: var(--primamry-color);
		}
	}

	.blog__content::first-letter {
		text-transform: capitalize;
	}

	footer {
		margin-top: 1.65rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 0.875em;

		.user {
			display: flex;
			align-items: center;

			&__avatar {
				width: 40px;
				height: 40px;
				object-fit: cover;
				border-radius: 50%;
				margin-right: 1rem;
			}

			&__name {
				font-weight: 500;
			}
		}
	}
`;

export default BlogItem;
