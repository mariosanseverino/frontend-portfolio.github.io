import React from 'react';
import Logo from './Logo';
import Menu from './Menu';

export default function Header() {
	return (
		<header className='fixed top-0 w-screen flex flex-row justify-between'>
			<Logo />
			<Menu />
		</header>
	);
}