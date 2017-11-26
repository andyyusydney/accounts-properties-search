import React from 'react'
import PropTypes from 'prop-types'
import ListItem from './ListItem'

const List = ({ itemsArr, currAccountName, selectedItemId, onClick }) => {
	console.log("itemsArr=", itemsArr);
	
	return (
	<ul>
		{itemsArr.map(item => {
			let selected = false
			const Id = item.AccountId||item.Id
			const name = item.AccountName||item.Name
			if (Id === selectedItemId) selected=true
			return (
				<ListItem key={Id} Id={Id} name={name} currAccountName={currAccountName} selected={selected} {...item} onClick={onClick} />
			)
		})}
	</ul>
)}

List.propTypes = {
  itemsArr: PropTypes.arrayOf(
    PropTypes.shape({
      Id: PropTypes.number,
	  AccountId: PropTypes.number,
      name: PropTypes.string,
	  AccountName: PropTypes.string
    }).isRequired
  ).isRequired,
  currAccountName: PropTypes.string.isRequired,
  selectedItemId: PropTypes.oneOfType([
	PropTypes.string,
	PropTypes.number
  ]),
  onClick: PropTypes.func.isRequired
}

export default List