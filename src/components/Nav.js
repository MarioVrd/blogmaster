import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../styles';

const Nav = () => {
	return (
		<StyledNav>
			<Link to='/' className='logo'>
				blogMASTER
			</Link>

			<ul className='nav__list'>
				<li className='nav__item'>Home</li>
				<li className='nav__item'>Nature</li>
				<li className='nav__item'>Technology</li>
				<li className='nav__item'>School</li>
			</ul>

			<div className='subscribe'>
				<input type='email' className='subscribe__email' placeholder='Email' />
				<Button>Subscribe</Button>
			</div>
		</StyledNav>
	);
};

const StyledNav = styled.nav`
	display: flex;
	align-items: center;
	padding: 0 5%;
	position: sticky;
	top: 0;
	height: 60px;
	background-color: #fff;
	z-index: 10;

	.logo {
		font-family: 'Roboto Slab', serif;
		font-weight: bold;
		font-size: 1.25rem;
		text-decoration: none;
		display: inline-block;
	}

	.nav__list {
		display: flex;
		list-style: none;
		margin-left: 2rem;
	}

	.nav__item {
		margin: 0 1rem;
		cursor: pointer;
	}

	.subscribe {
		margin-left: auto;

		&__email {
			padding: 0.6em;
			line-height: 1;
			font-family: 'Poppins', sans-serif;
			border-radius: 4px;
			border: 1px solid #ccc;
			margin-right: 1rem;

			&:focus {
				outline: none;
				border-color: var(--primary-color);
			}
		}
	}
`;

export default Nav;
