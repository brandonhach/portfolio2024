import { siteConfig } from '@/config/site-config';
import Image from 'next/image';
import { MailIcon, MapPin } from 'lucide-react';
import Footer from '@/components/footer';

const LeftSide = () => {
	return (
		<div className='flex-1 w-full h-full pt-8 xl:pl-8 px-4 xl:max-w-md'>
			<div className='flex flex-col h-full space-y-6'>
				{/* {Avatar} */}
				<Image
					src='/image/self.jpg'
					width={120}
					height={120}
					alt='avatar'
					className='rounded-full'
					priority
					loading='eager'></Image>
				{/* {Content Container} */}
				<div>
					{/* { Title} */}
					<div className='text-xl text-primary-content font-semibold'>
						{siteConfig.title}
					</div>
					{/* { Full Name} */}
					<h1 className='text-4xl font-bold mt-2'>{siteConfig.creator}</h1>
					{/* { Bio} */}
					<p className='sm:text-2xl text-lg font-light text-primary-content'>
						{siteConfig.bio}
					</p>
				</div>
				{/* {Buttons Container} */}
				<div className='flex items-center gap-6 justify-between'>
					<a
						className='border border-neutral-800 py-1 px-2 rounded-md flex items-center gap-2 w-full'
						href={siteConfig.locationLink}
						target='_blank'>
						<MapPin size={16}></MapPin>
						{siteConfig.location}
					</a>
					<a
						className='border border-neutral-800 py-1 px-2 rounded-md flex items-center gap-2 w-full'
						href={`mailto:${siteConfig.email}`}>
						<MailIcon size={16}></MailIcon>
						Contact Me
					</a>
				</div>
				{/* {Footer} */}
				<div className='hidden xl:flex'>
					<Footer></Footer>
				</div>
			</div>
		</div>
	);
};

export default LeftSide;
