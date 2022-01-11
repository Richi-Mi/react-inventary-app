import React, { Fragment, useState } from 'react';
import FormAdd from './FormAdd';
import RowCells from './RowCells';

const Table = ({ defaultCells = []}) => {
    const [cells, setCells] = useState( defaultCells );
    // Se hara un map de cells y se agregara un <tr> por cada iteración
    return (
        <Fragment>
            <header className='header'>
                <h1 className='title_principal'> Inventary </h1>
                <img src='./logo_inventary.jpg' alt='inventary' />
            </header>

            <FormAdd setCells={ setCells } cells={ cells } />

            <table className='table' id='table_inventary'>
                <tbody className='tconten'>
                    <tr className='row row_title'>
                        <td> ID </td>
                        <td> Nombre </td>
                        <td> Cantidad </td>
                        <td> Precio </td>
                        <td> Dinero Total </td>
                    </tr>
                    {
                        cells.map(({ name, units, price }, i) => {
                            let unidades = parseInt( units );
                            let precio = parseInt( price );
                            
                            return <RowCells name={ name } 
                                            units={ unidades } 
                                            price={ precio } 
                                            key={`row_cells_${i}`} 
                                            id={i} />
                            
                        })
                    }
                </tbody>
            </table>
        </Fragment>
    )
}
export default Table