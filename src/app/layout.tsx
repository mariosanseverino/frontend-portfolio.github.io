import React from 'react';
import Header from './components/Header';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: 'Mario Sanseverino\'s Portfolio',
};

export default function RootLayout({
	children,
}: {
  children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className='bg-black'>
				<Header />
				{children}
			</body>
		</html>
	);
}
