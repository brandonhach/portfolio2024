import { GridItemInterface } from '@/config/site-config';
import Image from 'next/image';
import Link from 'next/link';

const PictureBox = ({ item }: { item: GridItemInterface }) => {
	const videoSrc = `/video/${item.video}`;
	const src = `/image/${item.image}`;

	const content = item.image ? (
		<Image
			className={item.title === 'hanu' ? 'object-contain bg-black brightness-90' : 'object-cover w-full h-full'}
			src={src}
			alt=''
			fill
		/>
	) : (
		<video
			autoPlay
			loop
			muted
			controlsList='nodownload noplaybackrate nofullscreen'
			className='z-0 object-cover w-full h-full'>
			<source
				src={videoSrc}
				type='video/mp4'
			/>
		</video>
	);

	return (
		<div className='relative w-full h-full overflow-hidden rounded-3xl'>
			{item.link ? (
				<Link href={item.link} target='_blank'>
					{content}
				</Link>
			) : (
				content
			)}
		</div>
	);
};

export default PictureBox;
