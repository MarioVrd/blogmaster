import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container } from '../styles';

const CategoryScreen = () => {
	const { pathname } = useLocation();
	const category = pathname.split('/')[2];
	return (
		<Container>
			<h1>Blogs in {category} category</h1>
		</Container>
	);
};

export default CategoryScreen;
