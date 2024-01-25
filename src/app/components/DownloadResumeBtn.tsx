import React from 'react';
import Link from 'next/link';

export default function DowloadResumeBtn() {	
	return (
		<Link href='https://docs.google.com/document/d/1Dto16FZorrhd39cfuKaVNWYYMvBTZR_5zhpXMbZ69gs/edit?usp=sharing' target='_blank'>
			<button className={ `text-white h-16 w-full rounded-[1.5rem] z-50
			lg:w-[20rem] download-resume` }
			>
				View resume
			</button>
		</Link>
	);
}
