import React from 'react';
import Headers from "./components/Headers"
import Home from "./Pages/Home"
import './App.css';
import data from "./resource/data"
import axios from 'axios';

const token = "tTU3gFVUdP"
const url ="https://93870v1pgk.execute-api.ap-south-1.amazonaws.com/latest/shipments/vivek"

function App() {
  const company = data.data[0].carrier
  // axios
  // .get("https://93870v1pgk.execute-api.ap-south-1.amazonaws.com/latest/shipments/mayank", {
  //   headers: {
  //     Authorization: `Bearer ${token}`
  //   },
  //   body:{
  //     email: "mayankmittal@intugine.com"
  //   }
  // })
  // .then(response => {
  //   // Handle success.
  //   console.log('Data: ', response.data);
  // })
  // .catch(error => {
  //   // Handle error.
  //   console.log('An error occurred:', error);
  // });

  // axios.post('https://93870v1pgk.execute-api.ap-south-1.amazonaws.com/latest/shipments/mayank', 
  // {
  //       headers: {
  //     Authorization: `Bearer ${token}`,
  //   },params:{"email":"mayankmittal@intugine.com"

  //   }
  // }
  // )
  // .then(function (response) {
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });

//   var config = {
//     headers: {'Authorization': "bearer " + token}
// };

// var bodyParameters = {
//   body:{
//    "email":"vivekprime.cse@gmail.com"}
//   }


axios.post( 
  'https://93870v1pgk.execute-api.ap-south-1.amazonaws.com/latest/shipments/vivek',
  {body:{"email":"vivekprime.cse@gmail.com"},
  headers:{'Authorization': "bearer " + token}}
   

  
).then((response) => {
  console.log(response)
}).catch((error) => {
  console.log(error)
});




  return (
    <div className="App">
      <Headers company={company} />
      <Home {...data}/>
    </div>
  );
}

export default App;
