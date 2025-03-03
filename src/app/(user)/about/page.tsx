import { AnimatePage } from '@components/atoms/AnimatePage';
import { Button } from '@components/atoms/Button';
import { Container } from '@components/atoms/Container';
import { IconDownload } from '@components/atoms/Icons';
// will be charities Audai and Paws4Life
import { PodcastList } from '@components/molecules/PodcastList';
import { Education } from '@components/organisms/Education';
import { WorkExperience } from '@components/organisms/WorkExperience';

import { sanityClient } from '@lib/sanity';

import { educationQuery } from '@queries/education';
import { jobsQuery } from '@queries/jobs';
import { podcastsQuery } from '@queries/podcasts';

import type { Education as EducationType, Job, Podcast } from '@types';
import Link from 'next/link';

export const metadata = {
	title:
		'About Dylan Hensel. Senior Software Engineer and Engineering Manager in LA. ',
	description:
		'Dylan Hensel is a Senior Software Engineer in LA. She is a passionate about contributing postive changes to the technology landscape throughout the internet.',
};

const getData = async () => {
	const podcasts: Podcast[] = await sanityClient.fetch(podcastsQuery);
	const jobs: Job[] = await sanityClient.fetch(jobsQuery);
	const education: EducationType[] = await sanityClient.fetch(educationQuery);

	return {
		education,
		jobs,
		podcasts,
	};
};

const AboutPage = async () => {
	const { education, jobs, podcasts } = await getData();

	return (
		<AnimatePage>
			<Container>
				<h1 className="headline mt-8 text-3xl md:text-5xl lg:text-6xl">
					Hey, I&apos;m Dylan Hensel
				</h1>
				<h2 className="mt-2 text-xl font-bold md:text-2xl">
					Senior Software Engineer, Engineering Manager, and Systems Architect
				</h2>
				<p className="mt-8">
					I am passionate about building scalable, high-performance
					applications. With years of experience in backend and full-stack
					development, I specialize in designing and optimizing complex systems,
					ensuring security, efficiency, and maintainability across distributed
					infrastructures.
				</p>
				<p className="my-4">
					Most recently, I lead engineering teams at FanFix, where I manage
					cross-functional development efforts across multiple monorepos,
					improve security protocols, and drive strategic technical decisions.
					My expertise lies in backend architecture, cloud computing, security
					enhancements, and automation, leveraging technologies like Nest.js,
					Node.js, TypeORM, GraphQL, Docker, Kubernetes, and Google Cloud
					Platform to optimize application performance and scalability.
				</p>
				<p>
					Over the years, I’ve been instrumental in transitioning monolithic
					applications to microservices architectures, implementing dynamic
					cloud scaling, and ensuring PCI compliance and DDoS protection through
					advanced security measures. My work also involves automating
					workflows, CI/CD pipelines, and testing processes to enhance developer
					efficiency and code quality. I have extensive experience integrating
					OAuth authentication, database optimization (SQL & NoSQL), and API
					development, ensuring robust and high-availability systems.
				</p>
				<p className="mt-8">
					Before stepping into leadership, I honed my skills across industries
					ranging from media and entertainment to fintech and SaaS, gaining
					hands-on experience with Ruby on Rails, PostgreSQL, Python, C#, and
					AWS. I’ve built everything from developer tools and real-time
					collaborative applications to high-traffic consumer platforms that
					serve millions of users.
				</p>
				<h2 className="headline mb-4 mt-12 text-4xl">Beyond Engineering</h2>

				{/* <PodcastList podcasts={podcasts} /> */}
				<p className="mt-4">
					Outside of tech, I’m a passionate supporter of the arts, live music,
					and community-driven initiatives. I believe that creativity and
					technology go hand in hand, and I actively engage in projects that
					merge the two. Whether it's supporting local musicians and artists,
					attending live performances, or collaborating on creative projects in
					film production and music theory, I find inspiration in the
					intersection of art and technology.
				</p>
				<p className="mt-4">
					I also dedicate time to community service and mentorship, working
					closely with charities like{' '}
					<a
						href="https://audai.org"
						target="_blank"
						style={{ color: '#4F46E5' }}
					>
						Audai.org
					</a>{' '}
					, which focuses on social impact through technology, and{' '}
					<a
						href="https://pawsforlifek9.org/"
						target="_blank"
						style={{ color: '#4F46E5' }}
					>
						Paws4Life
					</a>
					, an organization dedicated to rescuing and rehabilitating shelter
					animals. Giving back is important to me, whether through mentoring
					aspiring developers, volunteering, supporting grassroots
					organizations, or working on tech-for-good initiatives that create
					meaningful change.
				</p>
				<p className="mt-4">
					Beyond that, I have a deep personal commitment to fitness, martial
					arts (Krav Maga), bodybuilding, and personal training. I thrive on
					discipline and continuous growth, whether it's pushing limits in the
					gym, learning new self-defense techniques, or cultivating my garden as
					a meditative escape from the fast-paced world of engineering.
				</p>
				<p className="mt-4">
					At the end of the day, I’m always looking to connect with people who
					share a passion for innovation, creativity, and making a difference.
					Whether you’re looking to collaborate on a tech project, discuss
					emerging trends in software development, or just share insights on
					music, film, or community work, I’d love to chat.
				</p>
				<p className="mt-4">Let’s build something impactful together!</p>

				{/* <h2 className="headline mb-4 mt-12 text-4xl">Experience</h2>

				<WorkExperience jobs={jobs} />

				<h2 className="headline mb-4 mt-12 text-4xl">Education</h2>
				<p className="mb-6">
					I am mostly self-taught, but here are some of the most relevant
					certifications I have achieved:
				</p>

				<Education education={education} /> */}

				<section id="cv-download">
					<h2 className="headline mb-4 mt-12 text-4xl">
						Interested in what I have to offer?
					</h2>

					<p>
						I am happy to have a chat about relevant projects to work on. Below
						you find a download link for my up-to-date CV.
					</p>
					<p>
						If you are interested in working with me, please contact me via{' '}
						<Link
							href="/contact"
							className="underlined relative border-b-2 border-grey-300 font-bold hover:border-b-0 dark:border-grey-700"
						>
							the contact form
						</Link>
						.
					</p>

					<div className="mt-8 flex items-baseline justify-start gap-6">
						<Button
							href="/DHensel_2025.03.02_web.pdf"
							className="group flex gap-2 whitespace-nowrap"
							download
						>
							<IconDownload />
							Download my CV
						</Button>

						{/* <Link
							href="/recruiters"
							className="text-sm font-semibold leading-6 text-slate-900 transition-all hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-200"
						>
							Information for recruiters <span aria-hidden="true">→</span>
						</Link> */}
					</div>
				</section>
			</Container>
		</AnimatePage>
	);
};

export default AboutPage;
