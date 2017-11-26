import React from 'react'
import List from './List'

class AccountsPropertiesList extends React.Component { 
	componentDidMount() {
		this.props.fetchData()
	}
	  
	render() {
		let currProperties = [];
		let currAccountName = '';

		if (this.props.accounts.length > 0) {
			if (this.props.selectedAccountId) {
				let currAccounts = this.props.accounts.filter(acc => acc.AccountId === this.props.selectedAccountId)
				
				if (currAccounts.length > 0) { // found selected account
					currProperties = currAccounts[0].Properties
					currAccountName = currAccounts[0].AccountName
				} else { // Not found, set the first item as selected
					currProperties = this.props.accounts[0].Properties
					currAccountName = this.props.accounts[0].AccountName
				}
			}
		}
		
		return (
			this.props.accounts.length > 0 ?
			<table className="content">
				<thead className="content__header">
					<tr className="content__header-row">
						<th className="content__header-item">Accounts</th>
						<th className="content__header-item">Properties</th>
					</tr>
				</thead>
				<tbody className="content__body">
					<tr className="content__body-row">
						<td className="content__body-item">
							<List itemsArr={this.props.accounts} currAccountName={currAccountName} selectedItemId={this.props.selectedAccountId} onClick={this.props.onAccountClick} />
						</td>
						<td className="content__body-item">
							<List itemsArr={currProperties} currAccountName={currAccountName} selectedItemId={this.props.selectedPropertyId} onClick={this.props.onPropertyClick} />
						</td>
					</tr>
				</tbody>
			</table>
			: <div>No matches</div>
		)
	}
}

export default AccountsPropertiesList