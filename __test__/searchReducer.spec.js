import search from '../src/reducers/search'

describe('search reducer', () => {
  it('should handle initial state', () => {
    expect(
      search(undefined, {})
    ).toEqual('')
  })
  
  it('should handle search', () => {
    expect(
      search('', {
		  type: 'SEARCH',
		  text: 'Little'
	  })
    ).toEqual('Little')
  })
  
  it('should handle clear search', () => {
    expect(
      search('Little', {
		  type: 'CLEAR_SEARCH'
	  })
    ).toEqual('')
  })
})
