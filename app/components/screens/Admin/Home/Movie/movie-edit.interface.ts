import { IMovie } from '@/shared/types/movies.types'

export interface IMovieEditInput extends Omit<IMovie, '_id'> {}
