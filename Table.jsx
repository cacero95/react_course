import React from 'react';

const Table = (data) => {
    const datos = data.data;
    const table = datos.length ? (
        datos.map((element)=>{
            return(
                <tr>
                    <td>{element.title}</td>
                    <td>{element.description}</td>
                </tr>
            )
        })
    ):(
        <div>
        <p> Cargado... </p>
        </div>
    );
    return(
        <table>
            {table}
        </table>
    )
}
export default Table;