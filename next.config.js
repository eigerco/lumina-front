/** @type {import('next').NextConfig} */

const withTM = require('next-transpile-modules')(['gsap']);
const CopyPlugin = require("copy-webpack-plugin");

const nextConfig = {
	...withTM,
	output: 'export',
	images: {
		loader: 'custom',
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
	},
	transpilePackages: ['next-image-export-optimizer'],
	env: {
		nextImageExportOptimizer_imageFolderPath: 'public/images',
		nextImageExportOptimizer_exportFolderPath: 'out',
		nextImageExportOptimizer_quality: '75',
		nextImageExportOptimizer_storePicturesInWEBP: 'true',
		nextImageExportOptimizer_exportFolderName: 'nextImageExportOptimizer',

		// If you do not want to use blurry placeholder images, then you can set
		// nextImageExportOptimizer_generateAndUseBlurImages to false and pass
		// `placeholder="empty"` to all <ExportedImage> components.
		nextImageExportOptimizer_generateAndUseBlurImages: 'true',
	},
	reactStrictMode: true,
	trailingSlash: true,
	images: {
		unoptimized: true,
		disableStaticImages: false,
		domains: ['picsum.photos', 'placehold.it', 'datocms-assets.com'],
	},
	compiler: {
		// see https://styled-components.com/docs/tooling#babel-plugin for more info on the options.
		styledComponents: true,
	},
	webpack: (config, { dev, isServer }) => {
		config.experiments = {
			asyncWebAssembly: true,
			topLevelAwait: true,
			layers: true,
		};
		// workaround for wasm from https://github.com/vercel/next.js/issues/29362#issuecomment-1973553746
		if (!dev && isServer) {
			webassemblyModuleFilename = "./../server/chunks/[modulehash].wasm";

			const patterns = [];

			const destinations = [
				"../static/wasm/[name][ext]", // -> .next/static/wasm
				"./static/wasm/[name][ext]",  // -> .next/server/static/wasm
				"."                           // -> .next/server/chunks (for some reason this is necessary)
			];
			for (const dest of destinations) {
				patterns.push({
					context: ".next/server/chunks",
					from: ".",
					to: dest,
					filter: (resourcePath) => resourcePath.endsWith(".wasm"),
					noErrorOnMissing: true
				});
			}

			config.plugins.push(new CopyPlugin({ patterns }));
		}
		return config;
	}
};

module.exports = nextConfig;
