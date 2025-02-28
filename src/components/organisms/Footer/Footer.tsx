import { Container } from '@components/atoms/Container';
import {
	IconBsky,
	IconGithub,
	IconInstagram,
	IconLinkedin,
	IconThreads,
	IconX,
} from '@components/atoms/Icons';
import { SocialIcons } from '@components/molecules/SocialIcons';

const Footer = () => {
	return (
		<footer className="mt-8 py-8 md:mt-20">
			<Container className="flex flex-col-reverse gap-4 md:flex-row md:justify-between">
				<span className="text-center md:text-left">
					&copy; {new Date().getFullYear()} Dylan Hensel
				</span>
				<SocialIcons
					profiles={[
						{
							name: 'Github',
							url: 'https://github.com/dylanrh',
							icon: <IconGithub />,
						},
						{
							name: 'LinkedIn',
							url: 'https://www.linkedin.com/in/dylanhensel',
							icon: <IconLinkedin />,
						},
						{
							name: 'Instagram',
							url: 'https://www.instagram.com/dylanhensel',
							icon: <IconInstagram />,
						},
						// {
						// 	name: 'X.com',
						// 	url: 'https://twitter.com/jakeherp',
						// 	icon: <IconX />,
						// },
						// {
						// 	name: 'Threads',
						// 	url: 'https://www.threads.net/@jakeherp',
						// 	icon: <IconThreads />,
						// },
						// {
						// 	name: 'Bluesky Social',
						// 	url: 'https://bsky.app/profile/jakeherp.com',
						// 	icon: <IconBsky />,
						// },
					]}
					className="justify-center md:justify-end"
				/>
			</Container>
		</footer>
	);
};

export { Footer };
