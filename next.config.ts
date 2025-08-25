import type { NextConfig } from "next";

export const basePath: string = "/bd-git";

const nextConfig: NextConfig = {
    /* config options here */
	basePath: basePath,
	output: "export",
	reactStrictMode: true,

	images: {
		unoptimized: true,
	},
};

export default nextConfig;
