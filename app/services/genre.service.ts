import axios, { axiosClassic } from 'api/interseptors'

import { ICollection } from '@/components/screens/Collections/collections.interface'

import { IGenreEditInput } from '@/screens/Admin/Home/Genre/genre-edit.interface'

import { IGenre } from '@/shared/types/movies.types'

import { getGenresUrl } from '../config/api.config'

export const GenreService = {
	async getAll(searchTerm?: string) {
		return axiosClassic.get<IGenre[]>(getGenresUrl(''), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		})
	},
	async getBySlug(slug: string) {
		return axiosClassic.get<IGenre>(getGenresUrl(`/by-slug/${slug}`))
	},
	async getCollections() {
		return axiosClassic.get<ICollection[]>(getGenresUrl('/collections'))
	},
	async getById(_id: string) {
		return axios.get<IGenreEditInput>(getGenresUrl(`/${_id}`))
	},
	async create() {
		return axios.post<string>(getGenresUrl(``))
	},
	async updateGenre(_id: string, data: IGenreEditInput) {
		return axios.put<string>(getGenresUrl(`/${_id}`), data)
	},
	async deleteGenre(_id: string) {
		return axios.delete<string>(getGenresUrl(`/${_id}`))
	},
}
