import { GridItemInterface } from '@/config/site-config';
import Image from 'next/image';
import Link from 'next/link';

const LanguageBox = ({ item }: { item: GridItemInterface }) => {
	const src = `/image/${item.image}`;
	const langContainer = 'flex flex-wrap items-center sm:gap-3 gap-2';
	const langBadge =
		'badge sm:text-sm text-xs font-primary-content rounded-lg bg-base-300';
	return (
		<div className='relative flex flex-col items-center justify-end w-full h-full overflow-hidden rounded-3xl'>
			{/* Overlay */}
			{/* <div className='absolute inset-0 z-10 bg-gradient-to-b from-transparent via-neutral-950/60 to-neutral-950/90' /> */}
			{/* Image */}
			<Image
				className='z-0 object-cover w-full h-full'
				src={src ?? ''}
				alt='LanguagesBox'
				fill
			/>

			<div className='flex flex-col justify-between items-center h-full'>
				{/* Language Content */}
				<div className='relative z-20 w-full p-4 space-y-3 md:px-8 md:py-4'>
					<div className='xl:backdrop-blur-lg backdrop-blur-md rounded-lg w-fit pr-1'>
						<div className='text-sm font-medium text-white'>{item.title}</div>
					</div>
					<div className={langContainer}>
						{item.languages?.map((language, index) => {
							return (
								<Link
									className={langBadge}
									key={language.link + index}
									href={language.link}>
									{language.title}
								</Link>
							);
						})}
					</div>
				</div>
				{/* DBMS*/}
				<div className='relative z-20 w-full p-4 space-y-3 md:px-8 md:py-4'>
					<div className='xl:backdrop-blur-sm backdrop-blur-md rounded-lg w-fit pr-1'>
						<div className='text-sm font-medium text-white'>{item.title3}</div>
					</div>
					<div className={langContainer}>
						{item.dbms?.map((framework, index) => {
							return (
								<Link
									className={langBadge}
									key={framework.link + index}
									href={framework.link}>
									{framework.title}
								</Link>
							);
						})}
					</div>
				</div>
				{/* Frameworks Content */}
				<div className='relative z-20 w-full p-4 space-y-3 md:px-8 md:py-4'>
					<div className='xl:backdrop-blur-lg backdrop-blur-md rounded-lg w-fit pr-1'>
						<div className='text-sm font-medium text-white'>{item.title2}</div>
					</div>

					<div className={langContainer}>
						{item.frameworks?.map((framework, index) => {
							return (
								<Link
									className={langBadge}
									key={framework.link + index}
									href={framework.link}>
									{framework.title}
								</Link>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default LanguageBox;
