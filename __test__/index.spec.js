import React from 'react'
import renderer from 'react-test-renderer'

// Snapshot for App React Component
describe('App --- Snapshot',()=>{
    it('+++capturing Snapshot of App', () => {
        const renderedValue =  renderer.create(<div>aaa</div>).toJSON()
        expect(renderedValue).toMatchSnapshot();
    });

});