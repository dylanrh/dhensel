// eslint-disable-next-line @typescript-eslint/no-var-requires
// const { withSentryConfig } = require('@sentry/nextjs');

/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	poweredByHeader: false,
	swcMinify: true,
	productionBrowserSourceMaps: process.env.NODE_ENV === 'production',
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		});

		return config;
	},
	images: {
		domains: ['dev-to-uploads.s3.amazonaws.com', 'cdn.sanity.io'],
	},
	publicRuntimeConfig: {
		sanityProjectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
		sanityDataset: process.env.NEXT_PUBLIC_SANITY_DATASET || '',
		sanityApiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '',
		mailchimpAudienceId: process.env.NEXT_PUBLIC_MAILCHIMP_AUDIENCE_ID || '',
		mailchimpApiServer: process.env.NEXT_PUBLIC_MAILCHIMP_API_SERVER || '',
	},
	serverRuntimeConfig: {
		sanityApiToken: process.env.SANITY_API_TOKEN || '',
		mailchimpApiKey: process.env.MAILCHIMP_API_KEY || '',
		sendgridApiKey: process.env.SENDGRID_API_KEY || '',
	},
};

// module.exports = withSentryConfig(
// 	nextConfig,
// 	{ silent: true },
// 	{ hideSourceMaps: true }
// );

// Injected content via Sentry wizard below

// eslint-disable-next-line @typescript-eslint/no-var-requires
// const { withSentryConfig } = require('@sentry/nextjs');

// module.exports = withSentryConfig(module.exports, {
// 	// For all available options, see:
// 	// https://www.npmjs.com/package/@sentry/webpack-plugin#options

// 	org: 'dylan-hensel',
// 	project: 'portfolio',

// 	// Only print logs for uploading source maps in CI
// 	silent: !process.env.CI,

// 	// For all available options, see:
// 	// https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

// 	// Upload a larger set of source maps for prettier stack traces (increases build time)
// 	widenClientFileUpload: true,

// 	// Route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
// 	// This can increase your server load as well as your hosting bill.
// 	// Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
// 	// side errors will fail.
// 	tunnelRoute: '/monitoring',

// 	// Automatically tree-shake Sentry logger statements to reduce bundle size
// 	disableLogger: true,

// 	// Enables automatic instrumentation of Vercel Cron Monitors. (Does not yet work with App Router route handlers.)
// 	// See the following for more information:
// 	// https://docs.sentry.io/product/crons/
// 	// https://vercel.com/docs/cron-jobs
// 	automaticVercelMonitors: true,
// });

// export default nextConfig;
module.exports = nextConfig;

// Injected content via Sentry wizard below

const { withSentryConfig } = require('@sentry/nextjs');

module.exports = withSentryConfig(module.exports, {
	// For all available options, see:
	// https://www.npmjs.com/package/@sentry/webpack-plugin#options

	org: 'dylan-hensel',
	project: 'portfolio',

	// Only print logs for uploading source maps in CI
	silent: !process.env.CI,

	// For all available options, see:
	// https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

	// Upload a larger set of source maps for prettier stack traces (increases build time)
	widenClientFileUpload: true,

	// Automatically annotate React components to show their full name in breadcrumbs and session replay
	reactComponentAnnotation: {
		enabled: true,
	},

	// Route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
	// This can increase your server load as well as your hosting bill.
	// Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
	// side errors will fail.
	tunnelRoute: '/monitoring',

	// Automatically tree-shake Sentry logger statements to reduce bundle size
	disableLogger: true,

	// Enables automatic instrumentation of Vercel Cron Monitors. (Does not yet work with App Router route handlers.)
	// See the following for more information:
	// https://docs.sentry.io/product/crons/
	// https://vercel.com/docs/cron-jobs
	automaticVercelMonitors: true,
});
