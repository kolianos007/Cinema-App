import ActorEdit from '@/components/screens/Admin/Home/Actor/ActorEdit'

import { NextPageAuth } from '@/shared/types/auth.types'

const ActorListPage: NextPageAuth = () => {
	return <ActorEdit />
}

ActorListPage.isOnlyAdmin = true

export default ActorListPage
