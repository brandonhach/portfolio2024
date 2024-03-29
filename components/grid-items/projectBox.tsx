import { GridItemInterface } from '@/config/site-config';
import Icon from '../icon';
import Link from 'next/link';

const ProjectBox = ({ item }: { item: GridItemInterface }) => {
	return (
		<div className='md:p-8 p-4'>
			<Link href={item.link ?? ''} target='_blank'>
				{/* {Header} */}
				<div className='flex items-center justify-between '>
					{/* {Icon} */}
					<Icon type={'github' ?? ''}></Icon>
					<h1>Project</h1>
				</div>
				{/* {Content Container} */}
				<div className='mt-2'>
					{/* {Title} */}
					<div className='text-lg font-semibold'>{item.title}</div>
					{/* {Username} */}
					<div className='text-sm text-neutral-500'>{item.username}</div>
					{/* {Description} */}
					{item.description && <div className='text-sm text-neutral-500'>{item.description}</div>}
				</div>
			</Link>
		</div>
	);
};

export default ProjectBox;
