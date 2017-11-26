const search = (state = '', action) => {
	switch (action.type) {
		case 'SEARCH':
			return action.text
		case 'CLEAR_SEARCH':
			return ''
		default:
			return state
	}
}

export default search