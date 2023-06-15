import { type RuleSetRule } from 'webpack'

import { buildBabelLoader } from './loaders/buildBabelLoader'
import { buildCssLoaders } from './loaders/buildCssLoaders'
import { type BuildOptions } from './types/config'

export function buildLoaders(options: BuildOptions): RuleSetRule[] {
    const { isDev } = options
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }

    const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false })
    const tsxCodeabelLoader = buildBabelLoader({ ...options, isTsx: true })

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    }

    const cssLoader = buildCssLoaders(isDev)

    // const typescriptLoader = {
    //     test: /\.tsx?$/,
    //     use: 'ts-loader',
    //     exclude: /node_modules/,
    // }

    return [
        fileLoader,
        svgLoader,
        codeBabelLoader,
        tsxCodeabelLoader,
        cssLoader,
    ]
}
