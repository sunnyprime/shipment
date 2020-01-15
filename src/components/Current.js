import React from 'react'

export default function Current(props) {
    const data=props.data    
    return (
        <div>
            <table className="table table-sm" border="1">
            <tr>
            <th scope="col">AWN NUMBER</th>
            <th scope="col">TRANSPORTER</th>
            <th scope="col">SOURCE</th>
            <th scope="col">DESTINATION</th>
            <th scope="col">BRAND</th>
            <th scope="col">STARTDATE</th>
            <th scope="col">ETD</th>            
            <th scope="col">STATUS</th> 
                </tr>
                <tr>
                    <td>{data.awbno}</td>
                    <td>{data.carrier}</td>
                    <td>{data.from}</td>
                    <td>{data.to}</td>
                    <td>{data.carrier}</td>
                    <td>{data.pickup_date}</td>
                    <td>{data.extra_fields.expected_delivery_date}</td>
                    <td>{data.current_status}</td>
                    
                </tr>
            </table>
        </div>
    )
}
