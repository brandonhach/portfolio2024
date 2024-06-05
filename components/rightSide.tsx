'use client';
import { siteConfig } from '@/config/site-config';
import GridItem from '@/components/grid-item';
import SocialBox from '@/components/grid-items/socialBox';
import LanguageBox from '@/components/grid-items/languageBox';
import PictureBox from '@/components/grid-items/pictureBox';
import ProjectBox from '@/components/grid-items/projectBox';
import { useAnimate, stagger } from 'framer-motion';
import { useEffect } from 'react';

const staggerDelay = stagger(0.02, { from: 'center' });

const RightSide = () => {
	const [scope, animate] = useAnimate();

	useEffect(() => {
		if (scope.current) {
			animate(
				'div',
				{
					opacity: 1,
					y: 0,
					scale: 1,
				},
				{
					duration: 0.15,
					type: 'spring',
					stiffness: 330,
					damping: 35,
					delay: staggerDelay,
				}
			);
		}
	}, [scope]);

	return (
		<div className='flex flex-1 p-4 md:h-full xl:overflow-y-auto xl:justify-end scrollbar-hide'>
			{/* {Grid Container} */}
			<div
				ref={scope}
				className='grid w-full grid-cols-4 gap-6 xl:py-10 py-6 xl:px-1 auto-rows-[76px] xxl:w-3/5 xl:w-[45rem] scrollbar-hide'>
				{/* {Grid Items} */}
				{siteConfig.items.map((item, index) => {
					return (
						<GridItem key={index} size={item.layout}>
							{item.type === 'social' ? (
								<SocialBox item={item} />
							) : item.type === 'languages' ? (
								<LanguageBox item={item} />
							) : item.type === 'picture' ? (
								<PictureBox item={item} />
							) : item.type === 'project' ? (
								<ProjectBox item={item} />
							) : (
								<div>Need to create new component type.</div>
							)}
						</GridItem>
					);
				})}
			</div>
		</div>
	);
};

export default RightSide;
