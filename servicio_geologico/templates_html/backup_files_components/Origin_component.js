import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import Tabla from '../Molecules/Table';
import {connect} from 'react-redux';


const Origin = (props) =>{
    console.log(props)
    const items = props["items"].origins["origin"];
    console.log(items)
    const useStyles = makeStyles((theme) => ({
        root: {
          width: '100%',
          marginTop:'50px'
        },
        heading: {
          fontSize: theme.typography.pxToRem(15),
          fontWeight: theme.typography.fontWeightRegular,
        },
      }));
    const classes = useStyles();
    let body = [];
    let summary = []; // lleva la cuenta de todos los valores del origen
    items.forEach((element)=>{
      let props = element["properties"];
      body.push([
        {key:'source', value:element["source"]},
        {key:'magnitude', value:props["magnitude"]},
        {key:'eventTime', value:props["eventtime"]},
        {key:'depth', value: props["depth"]},
        {key:'Estatus',value:element["status"]},
        {key:'Ubicación', value:`${props["latitude"] - props["longitude"]}`},
        {key:'Source', value:props["origin-source"]}
      ]);
      summary.push({
        properties:props,
        status:element["status"],
        source:element["source"],
        location: `${props["latitude"] - props["longitude"]}`
      });
    })
    body.unshift([
        {header:'Catalogo'},
        {header:'magnitude'},
        {header:'eventtime'},
        {header:'depth'},
        {header:'Estatus'},
        {header:'Ubicación'},
        {header:'Fuente'}
    ])
    console.log(body)
    return(
    <div>
    <div>
    
    <ExpansionPanel>
      <ExpansionPanelSummary
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading}>Mirar todos los origenes ({body.length} en total)</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Tabla data={body}></Tabla>
      </ExpansionPanelDetails>
    </ExpansionPanel>
    
</div>
    </div>
    );
}
const mapStateToProps = state =>(
	{
		items: state.detailEvents
	} 
)

export default connect(mapStateToProps)(Origin);