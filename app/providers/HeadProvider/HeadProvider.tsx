import Head from 'next/head'
import NextNProgress from 'nextjs-progressbar'
import React, { FC } from 'react'

import { accentColor } from '../../config/constants'

import FavIcons from './Favicons'

const HeadProvider: FC = ({ children }) => {
	return (
		<>
			<NextNProgress
				color={accentColor}
				startPosition={0.3}
				stopDelayMs={200}
				height={3}
			/>
			<Head>
				<meta charSet="UTF-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, maximum-scale=1.0"
				/>

				<FavIcons />

				<meta name="theme-color" content={'#181b1e'} />
				<meta name="msapplication-navbutton-color" content={'#181b1e'} />
				<meta
					name="apple-mobile-web-app-status-bar-style"
					content={'#181b1e'}
				/>
			</Head>
			{children}
		</>
	)
}

export default HeadProvider
