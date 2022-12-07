import { NextPage } from 'next'

import Profile from '@/components/screens/Profile/Profile'

import { NextPageAuth } from '../app/shared/types/auth.types'

const ProfilePage: NextPageAuth = () => {
	return <Profile />
}

ProfilePage.isOnlyUser = true

export default ProfilePage
