import { FC } from 'react'

import UserList from '@/components/screens/Admin/Home/Users/UserList'

import { NextPageAuth } from '@/shared/types/auth.types'

const UserListPage: NextPageAuth = () => {
	return <UserList />
}

UserListPage.isOnlyAdmin = true

export default UserListPage
