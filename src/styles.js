import styled from 'styled-components';

export const Container = styled.div`
	width: 85%;
	max-width: 1400px;
	margin: 0 auto;
`;

export const Button = styled.button`
	display: inline-block;
	padding: 0.65em 1.5em;
	background-color: var(--primary-color);
	color: #fff;
	border-radius: 4px;
	border: none;
	font-family: 'Poppins', sans-serif;
	cursor: pointer;
	transition: background-color 200ms ease-out;

	&:hover {
		background-color: var(--primary-color-hover);
	}
`;
