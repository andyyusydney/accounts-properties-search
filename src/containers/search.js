import React from 'react'
import { connect } from 'react-redux'
import { search, clearSearch } from '../actions'

let Search = ({ dispatch }) => {
  let input

  return (
    <div>
      <form>
        <input
			type="search"
			name="search"
			ref={node => { input = node; }}
			onChange={e => {
				dispatch(search(e.currentTarget.value))
			}}
        />
        <button type="button" onClick={e => {
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