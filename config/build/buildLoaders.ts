import { type RuleSetRule } from 'webpack'

import { type BuildOptions } from './types/config'
import { buildCssLoaders } from './loaders/buildCssLoaders'

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    }

    const cssLoaders = buildCssLoaders(isDev)

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [fileLoader, svgLoader, typescriptLoader, cssLoaders]
}
