import MovieEdit from '@/components/screens/Admin/Home/Movie/MovieEdit'

import { NextPageAuth } from '@/shared/types/auth.types'

const MovieListPage: NextPageAuth = () => {
	return <MovieEdit />
}

MovieListPage.isOnlyAdmin = true

export default MovieListPage
