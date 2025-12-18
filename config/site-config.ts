export type GridItemLayout = '1x2' | '2x1' | '2x2' | '2x4';
export type GridItemType = 'social' | 'languages' | 'picture' | 'project';
export type LanguagesItem = {
	title: string;
	link: string;
	color?: string;
};
export type ToolsItem = {
	title: string;
	link: string;
	color?: string;
};

export interface GridItemInterface {
	layout: GridItemLayout;
	type: GridItemType;
	title?: string;
	icon?: string;
	username?: string;
	description?: string;
	color?: string;
	buttonTitle?: string;
	buttonLink?: string;
	buttonSecondaryText?: string;
	/* Project */
	stars?: number;
	/* Languages */
	languages?: LanguagesItem[];
	frameworks?: LanguagesItem[];
	dbms?: LanguagesItem[];
	title2?: string;
	title3?: string;
	image?: string;
	video?: string;
	link?: string;
	setBlur?: boolean;
}

const GridItems: GridItemInterface[] = [
	{
		layout: '1x2',
		type: 'social',
		title: 'Resume',
		icon: 'resume',
		image: 'resume.jpg',
		link: '/pdf/resume.pdf',
		username: '',
	},
	{
		layout: '1x2',
		type: 'social',
		title: 'Linkedin',
		icon: 'linkedin',
		username: '',
		image: 'linkedin.jpg',
		link: 'https://www.linkedin.com/in/brandon-hach/',
	},
	{
		layout: '1x2',
		type: 'social',
		title: 'Github',
		icon: 'github',
		username: '@brandonhach',
		image: 'github.jpg',
		link: 'https://github.com/brandonhach',
		setBlur: true,
	},
	{
		layout: '1x2',
		type: 'social',
		title: 'Spotify',
		username: '@norodom',
		icon: 'spotify',
		video: 'drake-spotify.mp4',
		link: 'https://open.spotify.com/user/1z1b1y7vu3j7ntroaf6c7ng84',
	},
	{
		layout: '2x4',
		type: 'languages',
		title: 'Languages:',
		title2: 'Frameworks:',
		title3: 'DBMS',
		image: 'mc.jpg',
		languages: [
			{
				title: 'Python',
				link: '',
			},
			{
				title: 'JavaScript',
				link: '',
			},
			{
				title: 'TypeScript',
				link: '',
			},
			{
				title: 'Java',
				link: '',
			},
			{
				title: 'C#',
				link: '',
			},
			{
				title: 'HTML',
				link: '',
			},
			{
				title: 'CSS',
				link: '',
			},
		],
		frameworks: [
			{
				title: 'Next.js',
				link: '',
			},
			{
				title: 'React.js',
				link: '',
			},
			{
				title: 'Angular',
				link: '',
			},
			{
				title: 'Flask',
				link: '',
			},
			{
				title: '.NET',
				link: '',
			},
			{
				title: 'Supabase',
				link: '',
			},

			{
				title: 'Express.js',
				link: '',
			},
			{
				title: 'TailwindCSS',
				link: '',
			},
		],
		dbms: [
			{
				title: 'PostgreSQL',
				link: '',
			},
			{
				title: 'Prisma',
				link: '',
			},
			{
				title: 'MongoDB',
				link: '',
			},
			{
				title: 'MySQL',
				link: '',
			},
		],
	},
	{
		layout: '2x2',
		type: 'project',
		title: 'quickqollab',
		description:
			'Collaborative whiteboard web application that support real-time sketching and chat designed for professionals and creative minds alike.',
		link: 'https://github.com/ryanshz/quickqollab',
		image: 'quickqollab.png',
		setBlur: true,
	},
	{
		layout: '2x2',
		type: 'project',
		title: 'ForTheBoard',
		description:
			'Reddit-style community forums, customizable live chat game sessions, all accessible in one place from your web browser. ',
		link: 'https://github.com/weiraven/for-the-board',
		image: 'fortheboard.png',
		setBlur: true,
	},
	{
		layout: '2x2',
		type: 'project',
		title: 'repguard.id',
		icon: 'github',
		description:
			'Trust and security platform for the internet. Aim to help fight fraud online by our custom auth methods.',
		link: 'https://github.com/brandonhach/rep',
		image: 'rep.gif',
		setBlur: true,
	},

	{
		layout: '2x2',
		type: 'project',
		title: 'Guidou',
		icon: 'github',
		description:
			'Find or curated a guide to help others plan a perfect experience the best your city has to offer.',
		link: 'https://github.com/brandonhach/guidou',
		image: 'guidou.png',
		setBlur: true,
	},

	{
		layout: '2x2',
		type: 'project',
		title: 'Cheese Ecommerce',
		icon: 'github',
		description:
			'A luxury cheese website for sellers to list their expensive cheese for sale. And buyers can bid their cheese of choice.',
		link: 'https://github.com/brandonhach/Luxury-Cheese-Marketplace',
		image: 'cheese.png',
		setBlur: true,
	},
	{
		layout: '2x2',
		type: 'social',
		title: 'Favorite Game Franchise: Yakuza',
		icon: 'yakuza',
		setBlur: true,
		image: 'kiryu-yakuza.gif',
		link: 'https://www.youtube.com/watch?v=h2Gw01Gl40o',
	},
	{
		layout: '1x2',
		type: 'picture',
		image: 'angkor.jpg',
	},
	{
		layout: '1x2',
		title: 'ferarri steering wheel',
		type: 'picture',
		image: 'ferrari.jpg',
		link: 'https://unsplash.com/photos/black-steering-wheel-in-close-up-photography-t1bJyq-Xfag',
	},
	{
		layout: '1x2',
		title: 'yakuza-dancing',
		type: 'picture',
		image: 'yakuza0-dance.gif',
		link: 'https://www.youtube.com/watch?v=DfEnIFV2-mc',
	},

	{
		layout: '1x2',
		type: 'picture',
		image: 'white-mclaren.jpg',
	},
	{
		layout: '2x4',
		type: 'social',
		title: 'Palms Trax',
		icon: 'music',
		image: 'dj1.gif',
		link: 'https://youtu.be/aRsh0Max12s?si=wLsM-TCM42a8qX0g&t=957',
	},
	{
		layout: '2x4',
		type: 'social',
		title: 'emotion engine',
		icon: 'music',
		image: 'race.gif',
		link: 'https://www.youtube.com/watch?v=eZXKCiUMRlc',
	},
	{
		layout: '1x2',
		title: 'hanu',
		type: 'picture',
		image: 'hanu.jpg',
	},
	{
		layout: '1x2',
		type: 'picture',
		title: 'hanu',
		image: 'hanuman.jpg',
	},

	{
		layout: '1x2',
		title: 'hanu',
		type: 'picture',
		image: 'hanuman2.jpg',
	},

	{
		layout: '1x2',
		title: 'hanu',
		type: 'picture',
		image: 'hanu2.jpg',
	},
];
export const siteConfig = {
	creator: 'Brandon Hach',
	title: 'CS Alumni @ UNC Charlotte',
	bio: 'Always collaborative and working. Connect with me',
	location: 'Charlotte, NC',
	locationLink:
		'https://www.google.com/maps/place/Charlotte,+NC/@35.2027068,-81.1694775,10z/data=!3m1!4b1!4m6!3m5!1s0x88541fc4fc381a81:0x884650e6bf43d164!8m2!3d35.2270869!4d-80.8431267!16zL20vMGZzYjg?entry=ttu',
	email: 'brandonhach5@gmail.com',
	items: GridItems,
} as const;
