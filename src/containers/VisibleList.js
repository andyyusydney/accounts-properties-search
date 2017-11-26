import { connect } from 'react-redux'
import AccountsPropertiesList from '../components/AccountsPropertiesList'
import * as actions from '../actions'
import './visibleList.scss'

const getVisibleList = (accounts, searchText) => {	
	let filteredAccounts = accounts // search for account with matched properties' name
	  .filter((acc) => 
		acc.Properties.some((property) => property.Name.includes(searchText)))
	  .map(acc => {
		let newAcc = Object.assign({}, acc); // copies the filtered account
		newAcc.Properties = newAcc.Properties.filter(property => property.Name.includes(searchText));
		
		return newAcc
	  });
	
	if (filteredAccounts.length < 1) { // search for matched accountName
		filteredAccounts = accounts.filter((acc) => 
		acc.AccountName.includes(searchText))
	}
	
	return filteredAccounts;
}

const mapStateToProps = state => {
	const filteredAccounts = getVisibleList(state.accounts, state.search);
	
	return {
		accounts: filteredAccounts,
		selectedAccountId: state.selectedAccountId,
		selectedPropertyId: state.selectedPropertyId
	}
}

const mapDispatchToProps = dispatch => {
  return {
    onAccountClick: id => {
		dispatch(actions.selectAccount(id))
    },
	onPropertyClick: (id, currAccountName, name) => {
		alert(`You have clicked ${currAccountName} - ${name}`)
		dispatch(actions.selectProperty(id))
	},
	fetchData: () => dispatch(actions.accountsFetchData())
  }
}

const VisibleList = connect(
	mapStateToProps,
	mapDispatchToProps
)(AccountsPropertiesList)

export default VisibleList