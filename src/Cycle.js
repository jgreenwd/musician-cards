import React from 'react';

function Cycle(props) {
    return (
        <div style={{width: '360px'}}>
            <button id="decr" className="cycle" onClick={props.left}>◀</button>
            <label className="cycle">{props.label + 1} / 5</label>
            <button id="incr" className="cycle" onClick={props.right}>▶</button>
        </div>
    )
}

export default Cycle;
