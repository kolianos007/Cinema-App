import { IMovieEditInput } from '@/components/screens/Admin/Home/Movie/movie-edit.interface'

import { IMovie } from '@/shared/types/movies.types'

import { getMoviesUrl } from '@/config/api.config'

import axios, { axiosClassic } from '../api/interseptors'

export const MovieService = {
	async getAll(searchTerm?: string) {
		return axiosClassic.get<IMovie[]>(getMoviesUrl(``), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		})
	},
	async getByGenres(genreIds: string[]) {
		return axiosClassic.post<IMovie[]>(getMoviesUrl('/by-genres/'), {
			genreIds,
		})
	},
	async getByActor(actorId: string) {
		return axiosClassic.get<IMovie[]>(getMoviesUrl(`/by-actor/${actorId}`))
	},
	async getBySlug(slug: string) {
		return axiosClassic.get<IMovie>(getMoviesUrl(`/by-slug/${slug}`))
	},
	async create() {
		return axios.post<string>(getMoviesUrl(``))
	},
	async getById(_id: string) {
		return axios.get<IMovieEditInput>(getMoviesUrl(`/${_id}`))
	},
	async updateMovie(_id: string, data: IMovieEditInput) {
		return axios.put<string>(getMoviesUrl(`/${_id}`), data)
	},
	async deleteMovie(_id: string) {
		return axios.delete<string>(getMoviesUrl(`/${_id}`))
	},
	async getPopularMovies() {
		const { data: movies } = await axiosClassic.get<IMovie[]>(
			getMoviesUrl('/most-popular')
		)

		return movies
	},
	async updateCountOpened(slug: string) {
		return axiosClassic.post(getMoviesUrl('update-count-opened'), {
			slug,
		})
	},
}
