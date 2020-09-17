import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import BuildMmi from '../Molecules/BuildMmi';
import convert from '../Atoms/product_assign';

const Tabla = (info) => {
    const {data, origins} = info;
    const {table_convert} = convert;
    console.log(data)
    let key = 1;
    let count = 0
    let rows = [];

    
    let table_data = origins ? table_convert(data) : data;
    
    
    const useStyles = makeStyles({
        table: {
          minWidth: '100%',
          color:'#646464',
          fontSize:'14px'
        },
        blanco: {
          background:'#ffffff',
          border:'none',
          borderLeft:'3px solid #ffffff'
        },
        gris: {
          background:'#F9F9F9',
          border:'none',
          borderLeft:'3px solid #ffffff'
        }
      });
    const classes = useStyles();
    
    // verifica que la primera propiedad no sea undefined
    if ( table_data !== undefined ){
      
      table_data.forEach(element => {
        
        let columna = [];
        
        for(let props of element){

          let clase = '';
          clase = count%2==0 ? clase=classes.blanco : clase=classes.gris
          key++
          // si se presenta un header la celda es key cambia el estilo
          if (props.header){
            columna.push(
              <TableCell className={clase} align="left" key={`columna${key}`}>
                <h5>{props.header}</h5>
            </TableCell>
            )
          }
          else {
            let cell = props.key === 'mmi' ? (
              <TableCell className={clase} align="right" key={`columna${key}`}>
                <BuildMmi mmi={props.value} />
              </TableCell>
            ) : (
              <TableCell className={clase} align="left" key={`columna${key}`}>
                <p>{props.value}</p>
              </TableCell>
            );
            columna.push(cell);
          }          
         
        }

        count++;
        rows.push(
          
            columna.map((template)=>{
              return (
                {template}
              )
            })
          
        );
      });
      
      
    }
    

    /**
     * for (let information in data){
        rows.push(createData(information,data[information]))
    }
     */
    
    key = 0;
    
    return (
        <Fragment>
          
          <div className="detail_table">
          
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="aller">

            <TableBody>
              {rows.map((row) => (
              <TableRow key={`Fila${key}`}>
              {row.map((element)=>{
                key++;
                return (
                  element["template"]
                  )
                })}
              </TableRow>
              ))}
            
            
            </TableBody>
            </Table>
            </TableContainer>
          </div>
        </Fragment>
      );
}
export default Tabla;