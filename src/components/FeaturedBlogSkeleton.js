import React from 'react';
import styled from 'styled-components';

const FeaturedBlogSkeleton = () => {
	return <FeaturedSkeleton />;
};

const FeaturedSkeleton = styled.div`
	width: 100vw;
	height: 85vh;

	background-repeat: no-repeat;
	background-image:
    /* animation blur */ linear-gradient(
			90deg,
			rgba(211, 211, 211, 0) 0%,
			rgba(211, 211, 211, 0.9) 50%,
			rgba(211, 211, 211, 0) 100%
		),
		/* title */ linear-gradient(white 60px, transparent 0),
		/* first line */ linear-gradient(white 20px, transparent 0),
		/* second line */ linear-gradient(white 20px, transparent 0),
		/* button */ linear-gradient(white 40px, transparent 0),
		/* background */ linear-gradient(lightgray 100%, transparent 0);

	background-size:
    /* animation blur */ 300px 100%, /* title */ 60% 60px,
		/* first line */ 75% 20px, /* second line */ 55% 20px, /* second line */ 160px 40px,
		/* background */ 100% 100%;

	background-position: -5% 0, center 30%, center calc(30% + 80px), center calc(30% + 120px),
		center calc(30% + 180px), 0 0;

	animation: loading 1.25s ease-in-out infinite alternate;

	@keyframes loading {
		to {
			background-position: 105% 0, center 30%, center calc(30% + 80px), center calc(30% + 120px),
				center calc(30% + 180px), 0 0;
		}
	}
`;

export default FeaturedBlogSkeleton;
