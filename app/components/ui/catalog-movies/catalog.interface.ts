import { IMovie } from '../../../shared/types/movies.types'

export interface ICatalog {
	title: string
	description?: string
	movies: IMovie[]
}
