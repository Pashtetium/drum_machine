import React from 'react';
import reactDom from 'react-dom';
import PadBank from './PadBank';

const bankOne = [
    {
      keyCode: 81,
      keyTrigger: 'Q',
      id: 'Heater-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
      keyCode: 87,
      keyTrigger: 'W',
      id: 'Heater-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    {
      keyCode: 69,
      keyTrigger: 'E',
      id: 'Heater-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
      keyCode: 65,
      keyTrigger: 'A',
      id: 'Heater-4',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
      keyCode: 83,
      keyTrigger: 'S',
      id: 'Clap',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
      keyCode: 68,
      keyTrigger: 'D',
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
      keyCode: 90,
      keyTrigger: 'Z',
      id: "Kick-n'-Hat",
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
      keyCode: 88,
      keyTrigger: 'X',
      id: 'Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
      keyCode: 67,
      keyTrigger: 'C',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }
  ];
  
const bankTwo = [
    {
      keyCode: 81,
      keyTrigger: 'Q',
      id: 'Chord-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
    },
    {
      keyCode: 87,
      keyTrigger: 'W',
      id: 'Chord-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
    },
    {
      keyCode: 69,
      keyTrigger: 'E',
      id: 'Chord-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
    },
    {
      keyCode: 65,
      keyTrigger: 'A',
      id: 'Shaker',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
    },
    {
      keyCode: 83,
      keyTrigger: 'S',
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
    },
    {
      keyCode: 68,
      keyTrigger: 'D',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
    },
    {
      keyCode: 90,
      keyTrigger: 'Z',
      id: 'Punchy-Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
    },
    {
      keyCode: 88,
      keyTrigger: 'X',
      id: 'Side-Stick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
    },
    {
      keyCode: 67,
      keyTrigger: 'C',
      id: 'Snare',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
    }
  ];



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            power: true,
            currentPadBank: bankOne,
            currentPadBankId: 'Heater Kit',
            display: ''
        }   
        this.powerSwitch = this.powerSwitch.bind(this);  
        this.bankSwitch = this.bankSwitch.bind(this);  
        this.updateDisplay = this.updateDisplay.bind(this);
    } 
    powerSwitch() {
      this.setState({
        power: !this.state.power,
        display: ''        
      })
    }
    bankSwitch() {
      if (this.state.power) {
        if (this.state.currentPadBankId === 'Heater Kit') {
          this.setState({
            currentPadBank: bankTwo,
            currentPadBankId: 'Smooth Piano Kit',
            display: 'Smooth Piano Kit'
          })
        } else {
          this.setState({
            currentPadBank: bankOne,
            currentPadBankId: 'Heater Kit',
            display: 'Heater Kit'
          })
        }
        
      }
      
    }
    updateDisplay(name) {
      if (this.state.power) {
        this.setState({
        display: name
      })
      }
      
    }
       
    render() {
      const bankSlider = 
      this.state.currentPadBank === bankOne 
      ? {
        float: 'left'
      }
      : {
        float: 'right'
      };
      const pwrControl = 
      this.state.power === true
      ? {
        backgroundImage: 'radial-gradient(red, red 80%);'
        
      } 
      : {
        backgroundImage: 'radial-gradient(black, black 80%);'
        
      };
        return (
            <div className="inner-container" id="drum-machine">
                <div className="controls">
                    
                    <div className="buttonSlider" onClick={this.powerSwitch}>
                        <div className="pwrBtnText"><p>Power</p></div>
                        <div className="pwrBtn" style={pwrControl}>
                           
                        </div>                        
                    </div>
                    <div className="displayBlock">
                        <p id="display">{this.state.display}</p>
                    </div>
                    <div className="buttonSlider" onClick={this.bankSwitch}>
                        <div className="sliderText"><p>Bank</p></div>
                        <div className="sliderOut">
                          <div className="sliderIn" style={bankSlider} />  
                        </div>  
                    </div>
                </div>
                <PadBank 
                  power={this.state.power}
                  currentPadBank={this.state.currentPadBank}
                  updateDisplay={this.updateDisplay}
                />
            </div>
        )
    }
}


export default App;
