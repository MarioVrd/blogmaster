import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button, Container } from '../styles';

const Nav = () => {
	return (
		<Navbar>
			<Container>
				<StyledNav>
					<Link to='/' className='logo'>
						blogMASTER
					</Link>

					<ul className='nav__list'>
						<li className='nav__item'>
							<Link className='nav__link' to='/category/home'>
								Home
							</Link>
						</li>
						<li className='nav__item'>
							<Link className='nav__link' to='/category/nature'>
								Nature
							</Link>
						</li>
						<li className='nav__item'>
							<Link className='nav__link' to='/category/school'>
								School
							</Link>
						</li>
					</ul>

					<div className='subscribe'>
						<input type='email' className='subscribe__email' placeholder='Email' />
						<Button>Subscribe</Button>
					</div>
				</StyledNav>
			</Container>
		</Navbar>
	);
};

const Navbar = styled.nav`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 60px;
	background-color: #fff;
	z-index: 10;
	display: flex;
	align-items: center;
`;

const StyledNav = styled.div`
	display: flex;
	align-items: center;

	.logo {
		font-family: 'Roboto Slab', serif;
		font-weight: bold;
		font-size: 1.25rem;
		text-decoration: none;
		display: inline-block;

		@media (max-width: 500px) {
			margin: 0 auto;
		}
	}

	.nav__list {
		display: flex;
		list-style: none;
		margin-left: 2rem;

		@media (max-width: 840px) {
			display: none;
		}
	}

	.nav__item {
		margin: 0 1rem;
		cursor: pointer;
	}

	.nav__link {
		color: #333;

		&:hover,
		&:focus {
			color: var(--primary-color-hover);
		}
	}

	.subscribe {
		margin-left: auto;

		@media (max-width: 500px) {
			display: none;
		}

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
