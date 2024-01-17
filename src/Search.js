
import './Search.css'
import { useState } from "react";


function Search({search}) {
   const [firstValue, setValue] = useState('')
   const handleFormSubmit = (event) => {
    event.preventDefault();
    search(firstValue);
   }
   const handleChange = (event) =>{
      setValue(event.target.value)
   }
    return ( 
    <div className='searchDiv'>
         <form onSubmit={handleFormSubmit}>
            <label>Search Image</label>
            <input value={firstValue} onChange={handleChange}></input>
         </form>
    </div>
 );
}

export default Search;