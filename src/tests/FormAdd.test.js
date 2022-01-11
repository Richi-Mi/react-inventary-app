import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import FormAdd from '../components/FormAdd';

describe(' * Pruebas sobre el Componente <FormAdd /> ', () => {
    const setCells = jest.fn();
    const cells = [
    {
        name: 'Galletas', 
        units: 4, 
        price: 200
    },
    {
        name: 'Pan Danes', 
        units: 2, 
        price: 50
    },
    {
        name: 'Pastel', 
        units: 1, 
        price: 500
    }]
    let wrapper = shallow( <FormAdd setCells={ setCells } cells={ cells }/> );
    
    beforeEach( () => {
        jest.clearAllMocks()
        wrapper = shallow( <FormAdd setCells={ setCells } cells={ cells }/> );
    })
    
    test(' - Debe Mostrar el Componente Correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });
    test(' - NO Debe de Mandar información el formulario si las condiciones no se cumplen', () => {
        const form = wrapper.find('.form');

        form.simulate('submit', { preventDefault: () => { } } );

        expect( setCells ).not.toHaveBeenCalled();
    })
})