import React from 'react'
import List from './List'

class AccountsPropertiesList extends React.Component { 
	componentDidMount() {
		this.props.fetchData()
	}
	  
	render() {
		let currProperties = [];
		let currAccountName = '';
		console.log("this.props.selectedAccountId=", this.props.selectedAccountId);
		if (this.props.accounts.length > 0) {
			if (this.props.selectedAccountId) {
				let currAccounts = this.props.accounts.filter(acc => acc.AccountId === this.props.selectedAccountId)
				
				if (currAccounts.length > 0) {
					currProperties = currAccounts[0].Properties
					currAccountName = currAccounts[0].AccountName
				} else {
					currProperties = this.props.accounts[0].Properties
					currAccountName = this.props.accounts[0].AccountName
				}
			}
		}
		
		return (
			this.props.accounts.length > 0 ?
			<div>
				<List itemsArr={this.props.accounts} currAccountName={currAccountName} selectedItemId={this.props.selectedAccountId} onClick={this.props.onAccountClick} />
				<List itemsArr={currProperties} currAccountName={currAccountName} selectedItemId={this.props.selectedPropertyId} onClick={this.props.onPropertyClick} />
			</div>
			: <div>No matches</div>
		)
	}
}

export default AccountsPropertiesList