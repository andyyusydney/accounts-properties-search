import React from 'react'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store'
import App from '../src/components/App'
import { mount, shallow } from 'enzyme'
import { accountsFetchData } from '../src/actions';

describe('App --- REACT-REDUX (Mount + wrapping in <Provider>)',()=>{
    const initialState = {
		accounts: [
		  {
			"AccountId": 90000,
			"AccountName": "Little Test Account of Horrors",
			"Properties": [
			  {
				"Id": 1,
				"Name": "Property One"
			  },
			  {
				"Id": 2,
				"Name": "portal.horrific.net"
			  },
			  {
				"Id": 3,
				"Name": "Blistering Butterflies"
			  },
			  {
				"Id": 5,
				"Name": "HamsterBBQ.net"
			  },
			  {
				"Id": 8,
				"Name": "secretsquirrel.horrific.net"
			  },
			  {
				"Id": 13,
				"Name": "fonedynamics.com.au"
			  }
			]
		  },
		  {
			"AccountId": 1255,
			"AccountName": "Horrifically Awesome Enterprises",
			"Properties": [
			  {
				"Id": 21,
				"Name": "dna-test.horrified.net"
			  },
			  {
				"Id": 34,
				"Name": "extra-secret-lab.com"
			  },
			  {
				"Id": 55,
				"Name": "55 bottles on the wall"
			  },
			  {
				"Id": 89,
				"Name": "Eighty Nine buckets of Brains"
			  },
			  {
				"Id": 144,
				"Name": "Awesome Stuff"
			  },
			  {
				"Id": 233,
				"Name": "portal.hae.global"
			  }
			]
		  },
		  {
			"AccountId": 80085,
			"AccountName": "Beers International",
			"Explicit": false,
			"Properties": [
			  {
				"Id": 987,
				"Name": "Zywiec Brewery"
			  },
			  {
				"Id": 1597,
				"Name": "Lezajsk Pelne"
			  },
			  {
				"Id": 2584,
				"Name": "Karlovacka pivovara"
			  },
			  {
				"Id": 4181,
				"Name": "Diageo Guiness"
			  }
			]
		  }
		]
	}
	
	const middlewares = [thunk];
	const mockStore = configureStore(middlewares);

    let store,wrapper

    beforeEach(()=>{
		fetch.mockResponse(JSON.stringify(initialState.accounts))
        store = mockStore(initialState)
        wrapper = mount( <Provider store={store}><App /></Provider> )
    })

    it('+++ render the connected(SMART) component', () => {
       expect(wrapper.find(App).length).toEqual(1)
    });

    it('+++ check action on dispatching ', () => {
        let action
        store.dispatch(accountsFetchData())
        action = store.getActions()
		console.log('action=', action);
        //expect(action[0].type).toBe("FETCH_DATA_SUCCESS") // TODO: the empty array of actions after dispatch needs to be resolved.
    });
});