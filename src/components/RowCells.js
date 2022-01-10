import React from 'react';
import PropTypes from 'prop-types';

const RowCells = ({ name, units, price, id }) => {
    return (
        <tr className='row row_content'>
            <td className='col_id'> { id } </td>
            <td className='col_name'> { name } </td>
            <td className='col_units'> { units } </td>
            <td className='col_price'> $ { price } </td>
            <td className='col_total'> $ { price * units} </td>
        </tr>
    )
}

RowCells.propTypes = {
    name: PropTypes.string.isRequired,
    units: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired
}
export default RowCells