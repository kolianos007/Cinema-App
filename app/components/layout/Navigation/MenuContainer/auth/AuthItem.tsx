import React, { FC } from 'react'

import { useAuth } from '@/hooks/useAuth'

import { getAdminHomeUrl } from '@/config/url.config'

import MenuItem from '../MenuItem'

import LogoutButton from './LogoutButton'

const AuthItem: FC = () => {
	const { user } = useAuth()
	console.log('user', user)

	return (
		<>
			{user ? (
				<>
					<MenuItem
						item={{ icon: 'MdSettings', link: '/profile', title: 'Profile' }}
					/>
					<LogoutButton />
				</>
			) : (
				<MenuItem item={{ icon: 'MdLogin', link: '/auth', title: 'Login' }} />
			)}

			{user?.isAdmin && (
				<MenuItem
					item={{
						icon: 'MdOutlineLock',
						link: getAdminHomeUrl(),
						title: 'Admin panel',
					}}
				/>
			)}
		</>
	)
}

export default AuthItem
