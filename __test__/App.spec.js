import React from 'react'
import renderer from 'react-test-renderer'
import { mount, shallow } from 'enzyme'
import ListItem from '../src/components/ListItem'

// Snapshot for ListItem React Component
describe('ListItem\'s Snapshot',()=>{
    it('capturing Snapshot of App', () => {
        const renderedValue =  renderer.create(<ListItem onClick={() => {}} selected={true} currAccountName={'account name'} name={'item name'} Id={1} />).toJSON()
        expect(renderedValue).toMatchSnapshot();
    });

});

describe('Component/ListItem',()=>{
	let wrapper

    beforeEach(()=>{
        wrapper = mount(<ListItem onClick={() => {}} selected={true} currAccountName={'account name'} name={'item name'} Id={1} />)
    })

    it('render the component', () => {
        expect(wrapper.length).toEqual(1)
    });
	
	it('<li> has \'selected\' className', () => {
        expect(wrapper.find('li').prop('className')).toEqual('selected')
    });
	
	it('renders <a> link', () => {
		expect(wrapper.find('a').length).toEqual(1);
	});
	
	it('<a> has name text', () => {
		expect(wrapper.find('a').text()).toEqual('item name');
	});
});