import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from 'sonner';
import { LoadingProvider } from '@/components/loading-provider';
import { LoadingScreen } from '@/components/loading-screen';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Brandon Hach',
	description: 'Brandon personal portfolio website',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='en'
			className='h-full'>
			<body className={`${inter.className} flex flex-col h-full`}>
				<div className='flex flex-col h-full'>
					<LoadingProvider minDuration={1800}>
						{/* Loading screen sits above everything, unmounts after exit anim */}
						<LoadingScreen />
						{children}
					</LoadingProvider>
				</div>
				<Toaster />
			</body>
		</html>
	);
}
