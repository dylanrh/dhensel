import { AnimatePage } from '@components/atoms/AnimatePage';
import { Container } from '@components/atoms/Container';
import { ContentBlock } from '@components/atoms/ContentBlock';

import { sanityClient } from '@lib/sanity';

import { postsQuery } from '@queries/posts';

import type { Post } from '@types';
import { format } from 'date-fns';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
	title: 'Personal life of Dylan Hensel',
	description:
		'About my personal life.',
};

const getData = async () => {
	const posts: Post[] = await sanityClient.fetch(postsQuery());

	return posts;
};

const PartyInvite = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center">
				<a href="https://partiful.com/e/52URjVM64mve5ulHrFbJ" target='_blank' rel='noopener noreferrer'>
        	<img src="/DyKal_engagement.png" alt="Dylan and Kal engagement" className="mb-4" />
				</a>
        <a
          href="https://partiful.com/e/52URjVM64mve5ulHrFbJ"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-purple-600 text-white font-bold rounded-lg shadow-md hover:bg-purple-700"
        >
          Join the Party 🎉
        </a>
      </div>
    </div>
  );
};

const PersonalPage = async () => {
	const posts = await getData();

	return (
		<AnimatePage>
			<Container>
				<h1 className="headline mt-8 pb-8 text-3xl md:text-5xl lg:text-6xl">
					Personal Life
				</h1>
				{posts.map((post) => {
					return (
						<article key={post.slug} className="mb-16">
							<h2 className="mb-2 text-xl font-bold md:text-2xl lg:text-3xl">
								<a href={`/personal/${post.slug}`}>{post.title}</a>
							</h2>
							<ContentBlock value={post.intro} />
							<em className="mt-2 block">
								Published on{' '}
								{format(new Date(post.publishedAt), 'do MMMM yyyy - HH:mm')}
							</em>
						</article>
					);
				})}
				<PartyInvite />
			</Container>
			<Container className="flex justify-center">
				<div className="mx-auto max-w-4xl grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6">
          <div className="max-w-xl justify-self-center flex items-center flex-col">
            <p className="text-lg leading-8 text-slate-600 dark:text-off-white">
							I am a Software Engineer with a drive to serve people and the
							world. I like to work on tech that positievely impacts society and our
							planet. I advocate for conscious and responsible technology to
							help everyone; making the internet and the world a better place.
							<br />
						</p>
						<div className="mt-10 flex items-center gap-x-6">
							<Link
								href="/contact"
								className="rounded-md bg-blue-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
							>
								Get in touch
							</Link>
							<Link
								href="/about"
								className="text-sm font-semibold leading-6 text-slate-900 transition-all hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-200"
							>
								Read more <span aria-hidden="true">→</span>
							</Link>
						</div>
					</div>
					<div className="flex justify-center items-center">
						<Image
							src="/assets/dylanhensel_beach_dog.jpeg"
							alt="Photo of Dylan Hensel"
							height={300}
							width={450}
							priority
							className="mt-10 aspect-[6/5] max-w-full rounded-2xl object-cover sm:mt-16 lg:ml-20 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36 mx-auto"
						/>
					</div>
				</div>
			</Container>
		</AnimatePage>
	);
};

export default PersonalPage;
