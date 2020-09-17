import React from 'react';
import Footer from "../Templates/Footer";
import "../../Styles/details.css";
import Table from '../Molecules/Table';
import Card from '../Molecules/Cards';
class EarthquakeDetail extends React.Component{
    state = {
        todos: [
          {title:'Tiempo de origen', description:new Date().toString()},
          {title:'Ubicación', description:'6.83 - 7.75'}
        ],
        card: [
            {
                description:'Intensidad Instrumental',
            },
            {
                description:'Mapa instensidad Percibida',
            },
            {
                description:'Mecanismo Focal',
            },
            {
                description:'Aceleración'
            },
            {
                description:'Detalles'
            },
            {
                description:'Fases'
            },
            {
                description:'Magnitudes'
            },
            {
                description:'Trazas'
            },
            {
                description:'Descargas'
            },
            {
                description:'Sismicidad Historica'
            },
            {
                description:'Sintió este Sismo'
            }
        ]
      }
    render(){
        return (
            
            <div className="contenedor">
              <div className="banner">
                
              </div>
              <section className="content">
                <div>
                    <ul className="side_bar">
                        <li className="activated">Evento Sismico</li>
                        <li>Evento Sismico</li>
                        <li>Evento Sismico</li>
                        <li>Evento Sismico</li>
                        <li>Evento Sismico</li>
                        <li>Evento Sismico</li>
                        <li>Evento Sismico</li>
                        <li>Evento Sismico</li>
                    </ul>
                </div>
                <div>
                    <h3>Resumen del Evento</h3>
                    <h4>M 3.1 Los Santos, Santander - Colombia</h4>
                    <div>
                    <p> <small>123444</small> </p>
                    <img className="imagenes" width="100%" alt=""></img>
                    </div>
                    <div className="summary">
                        <img className="imagenes" width="100%" alt=""></img>
                        <Table data={this.state.todos}></Table>
                        
                    </div>
                    <h3>Productos Asociados</h3>
                    <Card data={this.state.card}></Card>
                </div>
              </section>
              
              
              
              
              <footer className="footer">
                <Footer></Footer>
              </footer>
            </div>
          );
    }
}
export default EarthquakeDetail;