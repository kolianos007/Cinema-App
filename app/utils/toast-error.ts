import { toastr } from 'react-redux-toastr'

import { errorCatch } from '../api/api.helpers'

export const toastError = (error: any, title?: string) => {
	const message = errorCatch(error)
	console.log('ee', message)
	toastr.error(title || 'Error request', message)
	// throw new Error(message)
	throw error
}
