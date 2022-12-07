export const getContentType = () => ({
	'Content-Type': 'application/json',
})

export const errorCatch = (error: any): string => {
	if (error.response && error.response.data) {
		if (typeof error.response.data.message === 'object') {
			return error.response.data.message[0]
		} else {
			return error.response.data.message
		}
	} else {
		return error.message
	}
	// return error.response && error.response.data
	// 	? typeof error.repsonse.data.message === 'object'
	// 		? error.response.data.message[0]
	// 		: error.response.data.message
	// 	: error.message
}
