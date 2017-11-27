import accounts from '../src/reducers/accounts'

describe('accounts reducer', () => {
  it('should handle initial state', () => {
    expect(
      accounts(undefined, {})
    ).toEqual([])
  })

  it('should handle get accounts', () => {
    expect(
      accounts('', {
		  type: 'FETCH_DATA_SUCCESS',
		  data: {"accounts": []}
	  })
    ).toEqual({"accounts": []})
  })
})
