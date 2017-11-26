import React from 'react'
import PropTypes from 'prop-types'

const ListItem = ({ onClick, selected, currAccountName, name, Id }) => {
	return (
		<li
			className={selected?'selected':''}
		>
			<a href="#" onClick={e => {
				e.preventDefault()
				onClick(Id, currAccountName, name)}
			}>{name}</a>
		</li>
	)
}

ListItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  currAccountName: PropTypes.string.isRequired,
  Id: PropTypes.number.isRequired
}

export default ListItem