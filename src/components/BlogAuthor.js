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

			<div className='socials'>
				<span>T</span>
				<span>T</span>
				<span>T</span>
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

	.user {
		display: flex;
		align-items: center;

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
`;

export default BlogAuthor;
