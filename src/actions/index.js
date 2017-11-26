export const selectAccount = id => {
	return {
		type: 'SELECT_ACCOUNT',
		id
	}
}

export const selectProperty = id => {
	return {
		type: 'SELECT_PROPERTY',
		id
	}
}

export const search = text => {
	return {
		type: 'SEARCH',
		text
	}
}

export const clearSearch = () => {
	return {
		type: 'CLEAR_SEARCH'
	}
}

export const fetchDataSuccess = data => {
	return {
		type: 'FETCH_DATA_SUCCESS',
		data: data
	}
}

export const accountsFetchData = () => {
    return (dispatch) => {
        //dispatch(itemsIsLoading(true)); // TODO

        fetch('https://my-json-server.typicode.com/andyyusydney/accounts-properties-search/accounts') // JSON API to get the data
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                //dispatch(itemsIsLoading(false)); // TODO

                return response;
            })
            .then((response) => response.json())
            .then((accounts) => {
				dispatch(fetchDataSuccess(accounts))
				dispatch(selectAccount(accounts[0].AccountId))
			})
            .catch((err) => {
				console.error(err)
			});
    };
}