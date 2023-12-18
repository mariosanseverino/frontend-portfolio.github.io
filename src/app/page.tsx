'use client';
import React, { useState, useEffect, useCallback } from 'react';
import SwiperWrapper from './components/SwiperWrapper';

export default function Home() {
	const [currentSlide, setCurrentSlide] = useState<number>(0);
	const totalSlides = 2;

	const handleWheel = useCallback(
		(event: WheelEvent) => {
			// Value that identifies when the scroll direction is up or down
			const delta = event.deltaY;
	
			// Function that updates the state with the new slide index according to the scroll direction
			setCurrentSlide((prevSlide) => {
				if (delta > 0) {
					return Math.min(prevSlide + 1, totalSlides - 1);
				} else if (delta < 0) {
					return Math.max(prevSlide - 1, 0);
				}
				return prevSlide;
			});
		},
		[totalSlides]
	);

	useEffect(() => {
		// Add the mouse wheel scroll event listener when the component is mounted
		document.addEventListener('wheel', handleWheel);

		// Remove the event listener when the component is unmounted
		return () => {
			document.removeEventListener('wheel', handleWheel);
		};
	}, [currentSlide]);

	return (
		<main className={ 'h-full' }>
			<SwiperWrapper
				currentSlide={ currentSlide }
			/>
		</main>
	);
}
