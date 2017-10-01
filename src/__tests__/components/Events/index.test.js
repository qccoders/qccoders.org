import React from 'react'
import Enzyme, {shallow} from 'enzyme';
import Events from '../../../components/Events'
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Events Route', () => {
    let wrapper;

    beforeEach(() => {
        
        wrapper = shallow(<Events />)

    })

    test('Render the full component', () => {
        
        expect(wrapper.find('.Events').exists()).toBe(true)

    })
})