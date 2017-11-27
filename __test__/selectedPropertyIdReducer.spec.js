import selectedPropertyId from '../src/reducers/selectedPropertyId'

describe('selectedPropertyId reducer', () => {
  it('should handle initial state', () => {
    expect(
      selectedPropertyId(undefined, {})
    ).toEqual('')
  })

  it('should handle select property', () => {
    expect(
      selectedPropertyId('', {
		  type: 'SELECT_PROPERTY',
		  id: 1
	  })
    ).toEqual(1)
  })
})
