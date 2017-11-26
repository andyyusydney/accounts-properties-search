const selectedPropertyId = (state = '', action) => {
	switch (action.type) {
		case 'SELECT_PROPERTY':
			return action.id
		default:
			return state
	}
}

export default selectedPropertyId