import React from 'react'
import Formulario from '../components/Formulario'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'

describe('Test en Formulario', () => {

    let wrapper = shallow(<Formulario/>)

    test('Snapshot en Formulario', () => {
        expect( wrapper ).toMatchSnapshot();
    })
    
})
