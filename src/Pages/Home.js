import React from 'react'
// import data from "../resource/data"
import Scan from '../components/Scan';
import Current from '../components/Current';

export default function Home(props) { 
    var data = props.data[0] 
    return (
        <div className="containers"> 
            <div className="row">
                <div className="col-lg-3 col-sm-12 p-2 text-left">
            <Scan scandata={data}/>
            </div>
            <div className="col-lg-9 col-sm-12  p-5">
            <Current data={data}/>
            </div>            
            </div>            
        </div>
    )
}
