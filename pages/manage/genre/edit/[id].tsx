import GenreEdit from '@/components/screens/Admin/Home/Genre/GenreEdit'

import { NextPageAuth } from '@/shared/types/auth.types'

const GenreListPage: NextPageAuth = () => {
	return <GenreEdit />
}

GenreListPage.isOnlyAdmin = true

export default GenreListPage
