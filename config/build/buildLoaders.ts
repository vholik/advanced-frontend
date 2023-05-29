import { type RuleSetRule } from 'webpack'

import { type BuildOptions } from './types/config'
import { buildCssLoaders } from './loaders/buildCssLoaders'

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }

    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    isDev && require.resolve('react-refresh/babel'),
                ].filter(Boolean),
            },
        },
    }

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    }

    const cssLoader = buildCssLoaders(isDev)

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [fileLoader, babelLoader, svgLoader, typescriptLoader, cssLoader]
}
