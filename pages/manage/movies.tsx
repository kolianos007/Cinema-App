import { FC } from 'react'

import UserList from '@/screens/Admin/Home/Movies/MovieList'

import { NextPageAuth } from '@/shared/types/auth.types'

const MovieListPage: NextPageAuth = () => {
	return <UserList />
}

MovieListPage.isOnlyAdmin = true

export default MovieListPage
