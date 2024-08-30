import { GridItemInterface } from '@/config/site-config';
import Icon from '../icon';
import Link from 'next/link';
import Image from 'next/image';

const SocialBox = ({ item }: { item: GridItemInterface }) => {
	const videoSrc = `/video/${item.video}`;
	const src = `/image/${item.image}`;

	return (
		<div className='relative w-full h-full overflow-hidden rounded-3xl'>
			<Link href={item.link ?? ''} target='_blank'>
				<div
					className={`absolute inset-0 z-10 flex flex-col justify-center items-start px-8 py-4 ${
						item.setBlur ? 'bg-gradient-to-b from-transparent via-neutral-950/80 to-neutral-950/90' : ''
					}`}>
					{/* {Header} */}
					<div
						className={`flex items-center justify-between ${
							item.layout === '2x4' ? 'absolute bottom-10' : ''
						}`}>
						{/* {Icon} */}
						<Icon type={item.icon ?? ''}></Icon>

						{/* {Button} */}
						{item.layout === '2x2' && <div></div>}
					</div>

					{/* {Content Container} */}
					<div className={`${item.layout === '2x4' ? 'absolute bottom-2' : ''} mt-2 `}>
						{/* {Title} */}
						<div className='text-lg font-semibold text-white'>{item.title}</div>

						{/* {Username} */}
						<div className='text-sm lg:text-md text-neutral-400'>{item.username}</div>
					</div>
				</div>
				{item.image ? (
					<Image className='object-cover w-full h-full' src={src} alt='' fill />
				) : (
					<video
						autoPlay
						loop
						muted
						controlsList='nodownload noplaybackrate nofullscreen'
						className='z-0 object-cover w-full h-full'>
						<source src={videoSrc} type='video/mp4' />
					</video>
				)}
			</Link>
		</div>
	);
};

export default SocialBox;
