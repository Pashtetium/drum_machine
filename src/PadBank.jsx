import React from 'react';
import DrumPad from './DrumPad';

class PadBank extends React.Component {        
    constructor(props) {
        super(props);
    }   
    render() {   
        let padBank;
        if (this.props.power) {
            padBank = this.props.currentPadBank.map((item, i, arr) => {
                console.log(this.props);
                return (
                    <DrumPad 
                        power={this.props.power}
                        clip={arr[i].url}
                        keyCode={arr[i].keyCode}
                        keyTrigger={arr[i].keyTrigger}
                        clipId={arr[i].id}
                    />
                )
            })
        } else {
            padBank = this.props.currentPadBank.map((item, i, arr) => {
                return (
                    <DrumPad 
                        power={this.props.power}
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
}

export default PadBank;