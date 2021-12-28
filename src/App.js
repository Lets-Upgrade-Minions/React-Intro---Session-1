import React from "react"
import "./style.css"
import ButtonDisplay from "./Button/ButtonDisplay"

// this is a component , HTML => JSX
 const App = ()=>{
    return(
      <div>
        <h1 style={{textAlign: "center"}}> Hello World </h1> 
        <h2> Hi, I am here </h2>
        <ButtonDisplay />
      </div>

    )
  }

//   export const Yup = ()=>{
//     return(
//       <div>
//         <h1> YUp is here </h1>
//       </div>
//     )
//   }

  export default App