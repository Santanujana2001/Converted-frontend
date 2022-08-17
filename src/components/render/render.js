import React, { useState } from "react";
function render() {
    const [num, setnum] = useState(-1);
    const numchange=(e)=>{
        setnum=e.target.value;
    }
    const numsubmit=(e)=>{
        e.preventDefault();
    }
  return (
    <div>
        <form onSubmit={numsubmit}>
            <input type="number" value={num} onChange={numchange}/>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default render;