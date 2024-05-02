import { GridItemInterface } from '@/config/site-config';
import Icon from '../icon';
import Link from 'next/link';
import Image from 'next/image';

const ProjectBox = ({ item }: { item: GridItemInterface }) => {
	const src = `/image/${item.image}`;
	return (
		<div className='md:p-8 p-4 relative w-full h-full overflow-hidden rounded-3xl'>
			<Link href={item.link ?? ''} target='_blank'>
				<div
					className={`absolute inset-0 z-10 flex flex-col justify-center items-start px-8 py-4 ${
						item.setBlur ? 'bg-gradient-to-b from-transparent via-neutral-950/80 to-neutral-950/90' : ''
					}`}>
					{/* {Header} */}
					<div className='flex items-center justify-between '>
						{/* {Icon} */}
						<Icon type={'github' ?? ''}></Icon>
						<h1 className='text-white'>Project</h1>
					</div>
					{/* {Content Container} */}
					<div className='mt-2'>
						{/* {Title} */}
						<div className='text-lg font-semibold text-white'>{item.title}</div>
						{/* {Username} */}
						<div className='text-sm text-neutral-500'>{item.username}</div>
						{/* {Description} */}
						{item.description && <div className='text-sm text-neutral-300'>{item.description}</div>}
					</div>
				</div>
				{item.image && <Image className='object-cover w-full h-full' src={src} alt='' fill />}
			</Link>
		</div>
	);
};

export default ProjectBox;
