import React from 'react';

function Cycle(props) {
    const button_style = {
        background: 'none',
        color: 'black',
        margin: '0',
        padding: '0',
        fontSize: '2em'
    };

    return (
        <div style={{width: '360px'}}>
            <label for="decrease"></label>
            <button id="decr" className="cycle" onClick={props.left} name="decrease" style={button_style}>◀</button>
            <label className="cycle" style={{fontSize: '2em'}}>{props.label + 1} / 5</label>
            <label for="increase"></label>
            <button id="incr" className="cycle" onClick={props.right} name="increase" style={button_style}>▶</button>
        </div>
    )
}

export default Cycle;
