import React from 'react';
import styled from 'styled-components';
import { Button } from '../styles';
import { getFirstParagraph } from '../utils/blogContent';
import ReactHtmlParser from 'react-html-parser';
import { Link } from 'react-router-dom';

const FeaturedBlog = ({ blog }) => {
	return (
		<HeroBlog>
			<article className='hero__article'>
				<h1>{blog.title}</h1>
				<p>{ReactHtmlParser(getFirstParagraph(blog.body))}</p>
				<Link to={`/blog/${blog.id}`}>
					<Button>Read More</Button>
				</Link>
			</article>
			<img src={blog.thumbnailImg} alt={blog.title} />
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
		padding: 2rem 0;

		@media (max-width: 840px) {
			min-width: 100%;
		}
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

	@media (min-width: 1920px) {
		height: 60vh;
	}

	@media (min-width: 2860px) {
		height: 40vh;
	}
`;

export default FeaturedBlog;
