import { FC } from 'react'

import UserList from '@/screens/Admin/Home/Actors/ActorList'

import { NextPageAuth } from '@/shared/types/auth.types'

const ActorListPage: NextPageAuth = () => {
	return <UserList />
}

ActorListPage.isOnlyAdmin = true

export default ActorListPage
