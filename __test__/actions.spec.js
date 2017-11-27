import * as actions from '../src/actions/index'

describe('app actions', () => {
  it('selectAccount should create SELECT_ACCOUNT action', () => {
    expect(actions.selectAccount(9000)).toEqual({
      type: 'SELECT_ACCOUNT',
      id: 9000
    })
  })
  
  it('selectProperty should create SELECT_PROPERTY action', () => {
    expect(actions.selectProperty(1)).toEqual({
      type: 'SELECT_PROPERTY',
      id: 1
    })
  })
  
  it('search should create SEARCH action', () => {
    expect(actions.search('Little')).toEqual({
      type: 'SEARCH',
      text: 'Little'
    })
  })
  
  it('clearSearch should create CLEAR_SEARCH action', () => {
    expect(actions.clearSearch()).toEqual({
      type: 'CLEAR_SEARCH'
    })
  })
  
  it('fetchDataSuccess should create FETCH_DATA_SUCCESS action', () => {
    expect(actions.fetchDataSuccess({})).toEqual({
      type: 'FETCH_DATA_SUCCESS',
	  data: {}
    })
  })
})