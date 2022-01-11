import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import Table from '../components/Table';

describe(' * Pruebas en el componente <Table /> ', () => {
    // Usar beforeEach()
    test(' - Debe Mostrar el Componente Table Correctamente', () => {
        const wrapper = shallow( <Table /> ); 
        expect( wrapper ).toMatchSnapshot();
    });
    test(' - Debe Mostrar las Celdas Correctamente ', () => {
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
            }
        ]
        const wrapper = shallow( <Table defaultCells={ cells }/> ); 
        const rowsCells = wrapper.find('RowCells');

        expect( rowsCells.length ).toBe( cells.length );

    })
})