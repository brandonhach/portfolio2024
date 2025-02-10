import Image from 'next/image';

const Icons: {
	[key: string]: JSX.Element;
} = {
	github: (
		<Image
			src={'/logo/github.png'}
			width={48}
			height={48}
			alt='github'></Image>
	),
	spotify: (
		<Image
			src={'/logo/spotify.png'}
			width={48}
			height={48}
			alt='github'></Image>
	),
	resume: (
		<Image
			src={'/logo/resume.png'}
			width={48}
			height={48}
			alt='github'></Image>
	),
	linkedin: (
		<Image
			src={'/logo/linkedin.png'}
			width={48}
			height={48}
			alt='github'></Image>
	),
	yakuza: (
		<Image
			src={'/logo/yakuza.bmp'}
			width={48}
			height={48}
			alt='yakuza'></Image>
	),
	music: <p className='text-4xl'>🎵</p>,
};

const Icon = ({ type }: { type: string }) => {
	return (
		<div
			className={`size-7 sm:size-10 flex items-center justify-center rounded-lg shadow-grid shrink-0`}>
			{Icons[type]}
		</div>
	);
};

export default Icon;
