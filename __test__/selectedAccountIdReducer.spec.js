import selectedAccountId from '../src/reducers/selectedAccountId'

describe('selectedAccountId reducer', () => {
  it('should handle initial state', () => {
    expect(
      selectedAccountId(undefined, {})
    ).toEqual(null)
  })

  it('should handle select account', () => {
    expect(
      selectedAccountId('', {
		  type: 'SELECT_ACCOUNT',
		  id: 9000
	  })
    ).toEqual(9000)
  })
})
