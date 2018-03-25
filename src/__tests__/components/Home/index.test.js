import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Home from '../../../App/components/Home'

describe('Home Route', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Home />)
    })

    test('Renders with the "Home" class', () => {
        expect(wrapper.find('.Home').exists()).toBe(true)
    })
    
})
 