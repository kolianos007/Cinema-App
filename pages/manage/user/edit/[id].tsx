import UserEdit from '@/components/screens/Admin/Home/User/UserEdit'

import { NextPageAuth } from '@/shared/types/auth.types'

const UserListPage: NextPageAuth = () => {
	return <UserEdit />
}

UserListPage.isOnlyAdmin = true

export default UserListPage
