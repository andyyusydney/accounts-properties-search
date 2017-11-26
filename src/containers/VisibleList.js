import { connect } from 'react-redux'
import AccountsPropertiesList from '../components/AccountsPropertiesList'
import * as actions from '../actions'

const getVisibleList = (accounts, searchText) => {	
	console.log("getVisibleList accounts=", accounts);
	
	console.log("getVisibleList searchText=", searchText);

	let filteredAccounts = accounts // search for account with matched properties' name
	  .filter((acc) => 
		acc.Properties.some((property) => property.Name.includes(searchText)))
	  .map(acc => {
		let newAcc = Object.assign({}, acc); // copies the filtered account
		console.log("getVisibleList newAcc=", newAcc);
		newAcc.Properties = newAcc.Properties.filter(property => property.Name.includes(searchText));
		console.log("newAcc=", newAcc);
		
		return newAcc
	  });
	  
	  
	console.log("getVisibleList filteredAccounts=", filteredAccounts);
	
	if (filteredAccounts.length < 1) { // search for matched accountName
		filteredAccounts = accounts.filter((acc) => 
		acc.AccountName.includes(searchText))
	}
	
	return filteredAccounts;
}

const mapStateToProps = state => {
	const filteredAccounts = getVisibleList(state.accounts, state.search);
	console.log('filteredAccounts=', filteredAccounts)
	
	/*
	if (filteredAccounts.length > 0) {
		dispatch(actions.selectAccount(filteredAccounts[0].AccountId));	
	}
	*/
	
	return {
		accounts: filteredAccounts,
		selectedAccountId: state.selectedAccountId,
		selectedPropertyId: state.selectedPropertyId
	}
}

const mapDispatchToProps = dispatch => {
  return {
    onAccountClick: id => {
		console.log("onAccountClick id =", id)
		dispatch(actions.selectAccount(id))
    },
	onPropertyClick: (id, currAccountName, name) => {
		console.log("onPropertyClick id =", id)
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