import React from 'react';
import DrumPad from './DrumPad';

const PadBank = (props) => {        
        let padBank;
        if (props.power) {
            padBank = props.currentPadBank.map((item, i, arr) => {
                return (
                    <DrumPad 
                        power={props.power}
                        clip={arr[i].url}
                        keyCode={arr[i].keyCode}
                        keyTrigger={arr[i].keyTrigger}
                        clipId={arr[i].id}
                    />
                )
            })
        } else {
            padBank = props.currentPadBank.map((item, i, arr) => {
                return (
                    <DrumPad 
                        power={props.power}
                        clip='#'
                        keyCode={arr[i].keyCode}
                        keyTrigger={arr[i].keyTrigger}
                        clipId={arr[i].id}
                    />
                )
            })
        }
        return <div className="pad-bank">{padBank}</div>

    
}

export default PadBank;