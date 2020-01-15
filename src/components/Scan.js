import React from 'react'
// import uuid from 'uuid/v4'
import Warehouse from "../resource/warehouse.svg"
import destination from "../resource/destination.svg"

export default function Scan(props) {    
    const data=props.scandata
    const scandata = props.scandata.scan  
    
    return (
        <div className="container justify-content-end">
            <img src={destination} alt="destination" />

{scandata.map((item,index)=>{   
    return(
        <div className="ml-5">
        <nav aria-label="breadcrumb">
  <ol className="breadcrumb">
<li key={index} className="breadcrumb-item active" aria-current="page"> 
<p className="alignleft">{item.location}</p> 
<p className="alignright"> {item.time}</p>
</li>
  </ol>
</nav>
</div>
    )
})}
 
<img src={Warehouse} alt="Warehouse" />
            
            
        </div>
    )
}
