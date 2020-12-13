import styled from 'styled-components';

export const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr minmax(1000px, 1fr) 1fr;

	@media (max-width: 1050px) {
		grid-template-columns: 1fr minmax(90%, 1fr) 1fr;
	}

	> * {
		grid-column: 2 / 3;
	}
`;

export const Button = styled.button`
	display: inline-block;
	padding: 0.5em 1em;
	background: #fff;
`;
