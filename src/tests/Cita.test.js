import React from 'react'
import Cita from '../components/Cita'
import '@testing-library/jest-dom' 
import { shallow } from 'enzyme'

describe('Test en el componente Cita', () => {

    let wrapper = shallow(<Cita/>)

    test('Snapshot en Cita', () => {
        expect( wrapper ).toMatchSnapshot();
    })
    
})
