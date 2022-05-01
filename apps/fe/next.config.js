/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    publicRuntimeConfig: {
        BFF_HOST: process.env.BFF_HOST,
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: [
                {
                    loader: '@svgr/webpack',
                    options: {
                        replaceAttrValues: {
                            '#16182B': 'currentColor',
                        },
                    },
                },
            ],
        });

        return config;
    },
};

module.exports = nextConfig;
