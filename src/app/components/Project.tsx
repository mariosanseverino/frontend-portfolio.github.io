import React, { useState } from 'react';
import ViewMoreBtn from './ViewMoreBtn';
import ProjectCard from './ProjectCard';

type ProjectsProps = {
    title: string,
    logo: string,
    short: string,
	long: string,
	role: string,
	setting: string,
	duration: string,
	deploy?: string,
	repository: string,
	stack: string[],
}

export default function Project({ title, logo, short, long, role, setting, duration, stack, deploy, repository }: ProjectsProps) {
	const [card, setCard] = useState(false);

	return (
		<section className={ `h-full z-10 relative flex flex-col items-center justify-end
		` }>
			<div className='absolute top-1/2 -translate-y-1/2 flex flex-col items-center gap-4'>
				<img
					src={ logo }
					className='w-[11.375rem] z-10 lg:w-[15rem]'
					alt={ `${ title } logo` }
				/>
				<p className='project-description'>
					{ short }
				</p>
				<ViewMoreBtn
					setCard={ setCard }
				/>
			</div>
			<ProjectCard
				title={ title }
				card={ card }
				setCard={ setCard }
				long={ long }
				role={ role }
				setting={ setting }
				duration={ duration }
				deploy={ deploy ? deploy : undefined }
				repository={ repository }
				stack={ stack }
			/>
		</section>
	);
}
