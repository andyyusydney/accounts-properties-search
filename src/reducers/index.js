import { combineReducers } from 'redux'
import accounts from './accounts'
import selectedAccountId from './selectedAccountId'
import selectedPropertyId from './selectedPropertyId'
import search from './search'

/*
	{
		accounts: [
			{
				Id: AccountId,
				name: AccountName,
				properties: [
					{
						Id: Id
						name: Name
					}
				]
			}
			...
		],
		selectedAccountId: AccountId,
		selectedPropertyId: Id,
		search: text
	}
*/
const rootReducer = combineReducers({
  accounts,
  selectedAccountId,
  selectedPropertyId,
  search
})

export default rootReducer