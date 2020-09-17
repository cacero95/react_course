import React from 'react';
import '../../Styles/details.css';
const Card = (data) => {
    const info = data.data;
    let output = info.length ? (
        info.map((element)=>{
            return(
                <div className="face face1">
                    <img width="100px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Colombia_locator_map.svg/1200px-Colombia_locator_map.svg.png"></img>
                    <h3>{element.description}</h3>
                    
                </div>
            )
        })
    ) : (
        <div><p>Sin cartas</p></div>
    );
    return(
        <div class="contents">
            {output}
        </div>
    )
}
export default Card;