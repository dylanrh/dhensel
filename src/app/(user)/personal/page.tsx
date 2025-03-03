import { AnimatePage } from '@components/atoms/AnimatePage';
import { Container } from '@components/atoms/Container';
import { ContentBlock } from '@components/atoms/ContentBlock';

import { sanityClient } from '@lib/sanity';

import { postsQuery } from '@queries/posts';

import type { Post } from '@types';
import { format } from 'date-fns';

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
		</AnimatePage>
	);
};

export default PersonalPage;
