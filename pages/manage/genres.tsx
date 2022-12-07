import { FC } from 'react'

import UserList from '@/screens/Admin/Home/Genres/GenreList'

import { NextPageAuth } from '@/shared/types/auth.types'

const GenreListPage: NextPageAuth = () => {
	return <UserList />
}

GenreListPage.isOnlyAdmin = true

export default GenreListPage
