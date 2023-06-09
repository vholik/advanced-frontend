import babelRemovePropsPlugin from '../../babel/babelRemovePropsPlugin'
import { type BuildOptions } from '../types/config'

interface buildBabelLoaderProps extends BuildOptions {
    isTsx: boolean
}

export function buildBabelLoader({ isDev, isTsx }: buildBabelLoaderProps) {
    return {
        test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    isDev && require.resolve('react-refresh/babel'),
                    ['@babel/plugin-transform-typescript', { isTsx }],
                    '@babel/plugin-transform-runtime',
                    isTsx && [
                        babelRemovePropsPlugin(),
                        {
                            props: ['data-testid'],
                        },
                    ],
                ].filter(Boolean),
            },
        },
    }
}
