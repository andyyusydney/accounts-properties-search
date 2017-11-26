const initialData = []

const accounts = (state = initialData, action) => {
	switch (action.type) {
		case 'FETCH_DATA_SUCCESS':
			return action.data
		default:
			return state
	}
}

export default accounts