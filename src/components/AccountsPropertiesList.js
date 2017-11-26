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
			<table class="content">
				<thead class="content__header">
					<tr class="content__header-row">
						<th class="content__header-item">Accounts</th>
						<th class="content__header-item">Properties</th>
					</tr>
				</thead>
				<tbody class="content__body">
					<tr class="content__body-row">
						<td class="content__body-item">
							<List itemsArr={this.props.accounts} currAccountName={currAccountName} selectedItemId={this.props.selectedAccountId} onClick={this.props.onAccountClick} />
						</td>
						<td class="content__body-item">
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