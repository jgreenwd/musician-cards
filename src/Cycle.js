import React from 'react';

function Cycle(props) {
  return (
    <div>
      <button id="decr" className="cycle" onClick={props.left}>◀</button>
        <label>{props.label + 1} / 5</label>
      <button id="incr" className="cycle" onClick={props.right}>▶</button>
    </div>
  )
}

export default Cycle;
