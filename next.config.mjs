/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"],
		});

		return config;
	},
	images: {
		remotePatterns: [],
	},
	async rewrites() {
		return [
			{
				source: "/assets/:path*",
				destination: "/src/app/assets/:path*",
			},
		];
	},
};

export default nextConfig;
