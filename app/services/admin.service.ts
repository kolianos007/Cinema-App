import axios from 'api/interseptors'

import { getUsersUrl } from '@/config/api.config'

export const AdminService = {
	async getCountUsers() {
		return await axios.get<number>(getUsersUrl('/count'))
	},
}
