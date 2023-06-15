import React, { Component } from 'react'
import loading from './loading.gif'

//class based
// export class Spinner extends Component {
//   render() {
//     return (
//       <div className='text-center my-5'>
//         <img src={loading} alt="loading" />
//       </div>
//     )
//   }
// }

//function based
const Spinner =()=>{
    return (
      <div className='text-center my-5'>
        <img src={loading} alt="loading" />
      </div>
    )
  
}
export default Spinner