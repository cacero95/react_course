import React from 'react';
import resumen from '../../assets/icons/Products/icn-ga-01.png';
import mapa from '../../assets/icons/Products/icn-ga-07.png';
import origen from '../../assets/icons/Products/icn-ga-10.png';
import intencidad_percivida from '../../assets/icons/Products/icn-ga-02.png';
import intencidad_instrumental from '../../assets/icons/Products/icn-ga-14.png';
import aceleraciones from '../../assets/icons/Products/icn-ga-04.png';
import sismicidad_historica from '../../assets/icons/Products/icn-ga-09.png';
import mecanimo_focal from '../../assets/icons/Products/icn-ga-11.png';
import momento_tensor from '../../assets/icons/Products/icn-ga-05.png';
import descargas from '../../assets/icons/Products/icn-ga-08.png';

// recive un arreglo de propiedades 
// Devuelve un arreglo con la lista de productos
const assing = (cartas) => {
    
    let items = [];
    for (let product of cartas){
        
        // dependiendo del tipo de producto se le asigna un product o nombre y un icon
        switch(product) {
            case 'origin':
                items.push({
                    product:'Origen',
                    icon:origen,
                    key:'origen',
                    link:'origen'
                });
                break;
            case 'staticmap':
                items.push({
                    product:'Mapa Dinámico',
                    key:product,
                    icon:mapa
                });
                break;
            case 'cdi':
                items.push({
                    product:'Intensidad Percibida',
                    key:product,
                    icon:intencidad_percivida
                });
                break;
            case 'mmi':
                items.push({
                    product:'Intensidad Instrumental',
                    key:product,
                    icon:intencidad_instrumental
                });
                break;
            case 'sm':
                items.push({
                    product:'Aceleraciones',
                    key:product,
                    icon:aceleraciones
                });
                break;
            case 'nearby-seismos':
                items.push({
                    product:'Sismicidad Histórica',
                    key:product,
                    icon:sismicidad_historica
                });
                break;
            case 'focal-mechanism':
                items.push({
                    product:'Mecanismo Focal',
                    key:product,
                    icon:mecanimo_focal
                });
                break;
            case 'moment-tensor':
                items.push({
                    product:'Momento Tensor',
                    key:product,
                    icon:momento_tensor
                });
                break;
            case 'downloads':
                items.push({
                    product:'Descargas',
                    key:product,
                    icon:descargas
                });
                break;
            case 'resumen':
                items.push({
                    product:'Resumen',
                    key:product,
                    icon:resumen,
                    link:'resumen'
                })
        }

    }
    return items;
}
const translate = (param, value) => {
    let output = [];
    switch(param) {
        case 'close_towns':
            output = [{header: 'Municipios Cercanos:'}, {key:param, value}]
            break;
        case 'felt':
            output = [{header:'Sentido:'}, {key:param, value}];
            break;
        case 'gap':
            output = [{header:'Gap:'}, {key:param, value}];
            break;
        case 'rms':
            output = [{header:'RMS:'}, {key:param, value}];
            break;
        case 'mmi':
            output = [{header: 'Intensidad Instrumental:'}, {key:param, value}];
            break;
        case 'place':
            output = [{header:'Ubicación:'}, {key:param, value}];
            break;
        case 'agency':
            output = [{header:'Agencia:'},{key:param, value}];
            break;
        case 'cdi':
            output = [{header:'Intensidad Percibida:'}, {key:param, value}];
            break;
        case 'mag':
            output = [{header:"Magnitud"}, {key:param, value}];
            break;
        case 'status':
            output = [{header:'Estatus:'}, {key:param,value}];
            break;
        case 'fases':
            let phases_count = 0;
            for (let phase of value){
                phases_count += phase["phases"].length;
            }
            output = [{header:'Fases:'}, {key:param, value:phases_count}];
            break;
        case 'updated':
            output = [{header:'Tiempo de origen:'}, {key:param, value}];
            break;
    }
    return output;
}
const table_convert = (data_table) => {
    let output = [];
    data_table.forEach(element => {
        let props = element["properties"];
        output.push([
            output.push([
                {key:'source', value:element["source"]},
                {key:'magnitude', value:props["magnitude"]},
                {key:'eventTime', value:props["eventtime"]},
                {key:'depth', value: props["depth"]},
                {key:'Estatus',value:element["status"]},
                {key:'Ubicación', value:`${props["latitude"] - props["longitude"]}`},
                {key:'Source', value:props["origin-source"]}
            ])
        ])
    });

    output.unshift([
        {header:'Catalogo'},
        {header:'magnitude'},
        {header:'eventtime'},
        {header:'depth'},
        {header:'Estatus'},
        {header:'Ubicación'},
        {header:'Fuente'}
    ]);

    return output
}


export default {assing,translate,table_convert};


