import React from 'react';

export default function Menu() {
	const menuOptions = ['Home', 'About', 'Stack', 'Projects', 'Contact'];
	
	return (
		<menu className='flex flex-row'>
			{ menuOptions.map((option, index) => (
				<li key={ index } className='mx-2'>{ option }</li>
			)) }
		</menu>
	);
}