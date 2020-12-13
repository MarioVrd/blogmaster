import React from 'react';
import styled from 'styled-components';

const BlogItem = ({ blog }) => {
	return (
		<Article>
			<img height='350' src={blog.thumbnailImg} loading='lazy' alt='' />
			<div className='category'>{blog.category}</div>
			<div className='user'>
				<img className='user__avatar' src={blog.user.avatar} alt={blog.user.name} />
				<div className='user__details'>
					<span className='user__name'>{blog.user.name}</span>
					<p className='user__title'>{blog.user.title}</p>
				</div>
			</div>
			<h1>{blog.title}</h1>
			<p>{blog.body}</p>
		</Article>
	);
};

const Article = styled.article`
	.user {
		display: flex;
		align-items: center;
	}

	.user__avatar {
		width: 40px;
		height: 40px;
		object-fit: cover;
		border-radius: 50%;
		margin-right: 1rem;
	}

	img {
		width: 100%;
		object-fit: cover;
		height: auto;
		border-radius: 10px;
	}

	h1 {
		line-height: 1.2;
		margin: 0.5em 0 0.75em;
		text-transform: capitalize;
		font-weight: 500;
		font-size: 1.25rem;
	}

	p {
		opacity: 0.8;
	}
`;

export default BlogItem;
