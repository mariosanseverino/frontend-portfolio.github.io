'use client';
import React, { useEffect, useCallback, useState } from 'react';
import SwiperWrapper from './components/SwiperWrapper';
import { useBehaviorContext } from './context/BehaviorContext';
import Menu from './components/Menu';

export default function Home() {
	const totalSlides = 4;
	const { currentSlide, setCurrentSlide } = useBehaviorContext();
	const [touchStart, setTouchStart] = useState<number | null>(null);
	const [touchEnd, setTouchEnd] = useState<number | null>(null);
	const minSwipeDistance = 50;
	let isScrolling = false;

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
		}, [totalSlides]
	);
	
	const debouncedHandleWheel = useCallback(
		(event: WheelEvent) => {
			// Checks and prevents fast scrolling
			if (!isScrolling) {
				isScrolling = true;

				handleWheel(event);

				setTimeout(() => {
					isScrolling = false;
				}, 1000);
			}
		}, [handleWheel]
	);

	function onTouchStart (event: React.TouchEvent) {
		setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
		setTouchStart(event.targetTouches[0].clientY);
	}
	
	function onTouchMove (event: React.TouchEvent) {
		setTouchEnd(event.targetTouches[0].clientY);
	}
	
	function onTouchEnd() {
		if (!touchStart || !touchEnd) return;
		const distance = touchStart - touchEnd;
		const swipeUp = distance > minSwipeDistance;
		const swipeDown = distance < -minSwipeDistance;
		if (swipeUp || swipeDown) {
			swipeDown ? setCurrentSlide((prevSlide) => {
				return Math.max(prevSlide - 1, 0);
			}) : setCurrentSlide((prevSlide) => {
				return Math.min(prevSlide + 1, totalSlides - 1);
			});
		}
	}

	useEffect(() => {
		// Add the mouse wheel scroll event listener when the component is mounted
		document.addEventListener('wheel', debouncedHandleWheel);

		// Remove the event listener when the component is unmounted
		return () => {
			document.removeEventListener('wheel', debouncedHandleWheel);
		};
	}, [currentSlide]
	);

	return (
		<main
			className='h-full relative'
			onTouchStart={ onTouchStart }
			onTouchMove={ onTouchMove }
			onTouchEnd={ onTouchEnd }
		>
			<SwiperWrapper
				currentSlide={ currentSlide }
			/>
			<Menu />
		</main>
	);
}
