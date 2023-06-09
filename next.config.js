/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	productionBrowserSourceMaps: true,
	images: {
		unoptimized: true,
		loader: "akamai",
		path: ""
	},
};

module.exports = nextConfig;
