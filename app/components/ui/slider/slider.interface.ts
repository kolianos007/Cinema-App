import { IMovie } from '@/shared/types/movies.types'

export interface ISlide extends Pick<IMovie, '_id' | 'bigPoster' | 'title'> {
	subTitle: string
	link: string
}
