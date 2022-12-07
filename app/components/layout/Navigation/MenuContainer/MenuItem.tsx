import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FC } from 'react'

import MaterialIcon from '@/components/ui/MaterialIcon'

import styles from './Menu.module.scss'
import { IMenuItem } from './menu.interface'

const MenuItem: FC<{ item: IMenuItem }> = ({ item: { icon, link, title } }) => {
	const { asPath } = useRouter()

	return (
		<li
			className={cn({
				[styles.active]: asPath === link,
			})}
		>
			<Link href={link}>
				<a>
					<MaterialIcon name={icon} />
					<span>{title}</span>
				</a>
			</Link>
		</li>
	)
}

export default MenuItem
