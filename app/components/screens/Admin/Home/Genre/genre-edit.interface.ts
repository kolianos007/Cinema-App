import { IGenre } from '@/shared/types/movies.types'

export interface IGenreEditInput extends Omit<IGenre, '_id'> {}
