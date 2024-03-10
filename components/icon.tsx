import Image from 'next/image';

const Icons: {
	[key: string]: JSX.Element;
} = {
	github: <Image src={'/logo/github.png'} width={48} height={48} alt='github'></Image>,
	spotify: <Image src={'/logo/spotify.png'} width={48} height={48} alt='github'></Image>,
	resume: <Image src={'/logo/resume.png'} width={48} height={48} alt='github'></Image>,
	linkedin: <Image src={'/logo/linkedin.png'} width={48} height={48} alt='github'></Image>,
};

const Icon = ({ type }: { type: string }) => {
	return (
		<div className={`w-10 h-10 flex items-center justify-center rounded-lg shadow-grid shrink-0`}>
			{Icons[type]}
		</div>
	);
};

export default Icon;
