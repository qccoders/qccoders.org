import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Home from '../../../components/Home'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new Adapter()})

describe('Home Route', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Home />)
    })

    test('Renders with the "Home" class', () => {
        expect(wrapper.find('.Home').exists()).toBe(true)
    })
    
})
 