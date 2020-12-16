import React from 'react';
import styled from 'styled-components';

const Alert = ({ variant, children }) => {
	const color = variant === 'danger' ? '#ff0457' : '#31de5a';

	return <StyledAlert style={{ backgroundColor: color }}>{children}</StyledAlert>;
};

const StyledAlert = styled.div`
	color: #fff;
	border-radius: 5px;
	padding: 1rem;
	margin: 1rem 0;
`;

Alert.defaultProps = {
	variant: 'danger'
};

export default Alert;
