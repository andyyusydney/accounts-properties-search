import React from 'react'
import { connect } from 'react-redux'
import { search, clearSearch } from '../actions'
import './search.scss';

let Search = ({ dispatch }) => {
  let input

  return (
    <div>
      <form className="search">
        <input
			type="search"
			className="search__input"
			name="search"
			ref={node => { input = node; }}
			onChange={e => {
				dispatch(search(e.currentTarget.value))
			}}
        />
        <button type="button" className="search__clear" onClick={e => {
			dispatch(clearSearch())
			input.value=""
		}}>
          Clear
        </button>
      </form>
    </div>
  )
}

export default connect()(Search)