import React from 'react';
import styled from 'styled-components';

const BlogAuthor = ({ author }) => {
	return (
		<Author>
			<div className='user'>
				<img className='user__avatar' src={author.avatar} alt={author.name} />
				<div className='user__details'>
					<span className='user__name'>{author.name}</span>
					<p className='user__title'>{author.title}</p>
				</div>
			</div>

			<div className='about'>
				<p>{author.about}</p>
			</div>
		</Author>
	);
};

const Author = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 3rem;
	padding-top: 3rem;
	border-top: 1px solid #ddd;
	flex-wrap: wrap;
	font-size: 0.9em;
	color: #555;

	.user {
		display: flex;
		align-items: center;
		flex-basis: 28%;
		min-width: 300px;

		&__avatar {
			width: 60px;
			height: 60px;
			object-fit: cover;
			border-radius: 50%;
			margin-right: 1rem;
		}

		&__name {
			font-weight: 500;
		}
	}

	.about {
		flex-basis: 70%;
		flex-grow: 1;
	}
`;

export default BlogAuthor;
