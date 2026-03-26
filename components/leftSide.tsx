'use client';

import { siteConfig } from '@/config/site-config';
import Image from 'next/image';
import { MailIcon, MapPin } from 'lucide-react';
import Footer from '@/components/footer';
import WebampPlayer from './WebampPlayer';

const LeftSide = () => {
	return (
		<div className='flex-1 w-full h-full pt-8 xl:pl-8 px-4 xl:max-w-md'>
			<div className='flex flex-col h-full space-y-6'>
				{/* Avatar */}
				<Image
					src='/image/self.jpg'
					width={120}
					height={120}
					alt='avatar'
					className='rounded-full'
					priority
					loading='eager'
				/>

				{/* Bio */}
				<div>
					<div className='text-xl text-primary-content font-semibold'>
						{siteConfig.title}
					</div>
					<h1 className='text-4xl font-bold mt-2'>{siteConfig.creator}</h1>
					<p className='sm:text-2xl text-lg font-light text-primary-content'>
						{siteConfig.bio}
					</p>
				</div>

				{/* Location + Contact */}
				<div className='flex items-center gap-6 justify-between'>
					<a
						className='border border-neutral-800 py-1 px-2 rounded-md flex items-center gap-2 w-full'
						href={siteConfig.locationLink}
						target='_blank'
						rel='noreferrer'>
						<MapPin size={16} />
						{siteConfig.location}
					</a>
					<a
						className='border border-neutral-800 py-1 px-2 rounded-md flex items-center gap-2 w-full'
						href={`mailto:${siteConfig.email}`}>
						<MailIcon size={16} />
						Contact Me
					</a>
				</div>

				{/* Footer — desktop only */}
				<div className='hidden xl:flex'>
					<Footer />
				</div>

				{/*
          Webamp — visible on lg+ screens.
          The component handles its own breakpoint visibility and heights:
            lg  (≥1024px) : 340px  (main + EQ)
            xl  (≥1280px) : 420px  (main + EQ + playlist)
        */}
				<WebampPlayer />
			</div>
		</div>
	);
};

export default LeftSide;
