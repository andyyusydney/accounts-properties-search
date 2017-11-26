const selectedAccountId = (state = null, action) => {
	switch (action.type) {
		case 'SELECT_ACCOUNT':
			return action.id
		default:
			return state
	}
}

export default selectedAccountId