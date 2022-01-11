import React, { useState } from 'react';
import PropTypes from 'prop-types';

const FormAdd = ({ setCells, cells }) => {
    const [inputNameValue, setInputNameValue]   = useState('');
    const [inputPriceValue, setinputPriceValue] = useState('');
    const [inputUnitValue, setinputUnitValue]   = useState('');

    const handleInputName = ( event ) => {
        setInputNameValue( event.target.value );
    }
    const handleInputPrice = ( event ) => {
        setinputPriceValue( event.target.value );
    }
    const handleInputUnit = ( event ) => {
        setinputUnitValue( event.target.value );
    }
    const addCategory = ( event ) => {
        event.preventDefault();

        if( inputNameValue !== '' && inputUnitValue !== '' && inputPriceValue !== '' ) {
            const data = {
                name: inputNameValue,
                units: inputUnitValue,
                price: inputPriceValue
            }
            let newCells = [...cells, data];
            setCells( newCells );
            
            setInputNameValue('');
            setinputPriceValue('');
            setinputUnitValue('');
        }
    } 

    return (
        <form className='form' onSubmit={ addCategory }>
            <h2> Agregar Categoria </h2>
            <section className='form_section' >
                <label> Escribe el Nombre   de la Categoria: </label>
                <input type='text' value={ inputNameValue } placeholder='Nombre' onChange={ handleInputName } id='txt_name'/>
            </section>
            <section className='form_section' >
                <label> Escribe el Precio   de la Categoria: </label>
                <input type='text' value={ inputPriceValue } placeholder='Precio' onChange={ handleInputPrice }/>
            </section>
            <section className='form_section' >
                <label> Escribe la Cantidad de la Categoria: </label>
                <input type='text' value={ inputUnitValue } placeholder='Cantidad' onChange={ handleInputUnit }/>
            </section>
            <section className='form_section_submit'>
                <input type={'submit'} value={'Agregar'} />
            </section>
        </form>
    )
}
FormAdd.propTypes = {
    setCells: PropTypes.func.isRequired,
    cells: PropTypes.array.isRequired
}

export default FormAdd