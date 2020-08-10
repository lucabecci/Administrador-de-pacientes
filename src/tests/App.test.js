import React from 'react'
import App from '../App'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'

describe('Tests en App', () => {
    let wrapper = shallow( <App /> )
    test('Snapshot en App.js', () => {
        expect( wrapper ).toMatchSnapshot();
    })
    
})
