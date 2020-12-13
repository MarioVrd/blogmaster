import React from 'react';
import styled from 'styled-components';
import { Button } from '../styles';

const FeaturedBlog = ({ blog }) => {
	return (
		<HeroBlog>
			<article className='hero__article'>
				<h1>{blog.title}</h1>
				<p>{blog.body}</p>
				<Button>Read More</Button>
			</article>
			<img src='https://picsum.photos/id/450/1920/1080' alt={blog.title} />
		</HeroBlog>
	);
};

const HeroBlog = styled.header`
	display: grid;
	grid-template-areas: 'hero';
	height: 85vh;
	overflow: hidden;
	background: rgba(0, 0, 0, 0.65);
	color: white;
	place-items: center;
	text-align: center;
	margin-bottom: 3rem;

	> * {
		grid-area: hero;
	}

	.hero__article {
		z-index: 1;
		max-width: 50%;
		min-width: 30ch;
	}

	h1 {
		text-transform: capitalize;
		font-size: 2rem;
		line-height: 1.3;
		margin-bottom: 1em;
	}

	p {
		margin-bottom: 2rem;
	}

	img {
		object-fit: cover;
		width: 100%;
		height: 100%;
		z-index: -1;
	}
`;

export default FeaturedBlog;
