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
		username: '@doob',
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
		image: 'jordan.jpg',
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
				title: 'Flask',
				link: '',
			},
			{
				title: 'React.js',
				link: '',
			},
			{
				title: 'Next.js',
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
		title: 'Cheese Ecommerce',
		icon: 'github',
		description:
			'A luxury cheese website for sellers to list their expensive cheese for sale. And buyers can bid their cheese of choice.',
		link: 'https://github.com/brandonhach/Luxury-Cheese-Marketplace',
		image: 'cheese.png',
		setBlur: true,
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
		title: 'ferarri steering wheel',
		type: 'picture',
		image: 'ferrari.jpg',
		link: 'https://unsplash.com/photos/black-steering-wheel-in-close-up-photography-t1bJyq-Xfag',
	},
	{
		layout: '1x2',
		title: 'rolex',
		type: 'picture',
		image: 'rolex.png',
		link: 'https://www.youtube.com/watch?v=Prtzy3hEJ2w',
	},
	{
		layout: '1x2',
		title: 'mclaren',
		type: 'picture',
		image: 'mclaren.jpg',
		link: 'https://unsplash.com/photos/red-ferrari-458-italia-on-road-2ihYdRZgyWw',
	},
	{
		layout: '2x2',
		type: 'social',
		title: 'Favorite Game Franchise: Yakuza',
		icon: 'yakuza',
		setBlur: true,
		image: 'kiryu-yakuza.gif',
		link: 'https://www.youtube.com/watch?v=MJbE3uWN9vE',
	},
	{
		title: 'ferrari',
		layout: '2x4',
		type: 'picture',
		video: 'ferrari-media.mp4',
	},
	{
		layout: '2x4',
		type: 'picture',
		image: 'blue-jordans.jpg',
	},
	{
		layout: '2x4',
		type: 'picture',
		image: 'city.jpg',
		link: 'https://unsplash.com/photos/a-view-of-a-city-at-night-from-a-window-KVa4WFUiQk4',
	},
	{
		layout: '2x4',
		type: 'picture',
		image: 'buddha.jpg',
	},

	{
		layout: '2x2',
		title: 'charlotte',
		type: 'picture',
		image: 'charlotte.jpg',
		link: 'https://unsplash.com/photos/aerial-photography-of-city-ABIBm48VYfQ',
	},
	{
		layout: '1x2',
		title: 'jewelry',
		type: 'picture',
		image: 'jewelry.png',
		link: 'https://www.youtube.com/watch?v=WqfZB_bKdRI',
	},
	{
		layout: '1x2',
		title: 'vlone',
		type: 'picture',
		image: 'vlone.png',
		link: 'https://www.youtube.com/watch?v=haUi0A4WYqo',
	},
];
export const siteConfig = {
	creator: 'Brandon Hach',
	title: 'CS Alumni @ UNC Charlotte',
	bio: 'Building websites and learning new technology everyday.',
	location: 'Charlotte, NC',
	locationLink:
		'https://www.google.com/maps/place/Charlotte,+NC/@35.2027068,-81.1694775,10z/data=!3m1!4b1!4m6!3m5!1s0x88541fc4fc381a81:0x884650e6bf43d164!8m2!3d35.2270869!4d-80.8431267!16zL20vMGZzYjg?entry=ttu',
	email: 'brandonhach5@gmail.com',
	items: GridItems,
} as const;
