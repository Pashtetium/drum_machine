import React from 'react';

const activeStyle = {
    backgroundColor: 'orange',
    boxShadow: '0 3px orange',
    height: 35,
    marginTop: 8
};
  
const inactiveStyle = {
    backgroundColor: 'grey',
    marginTop: 5,
    boxShadow: '3px 3px 5px black'
};

class DrumPad extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            padStyle: inactiveStyle
        }
        this.playSound = this.playSound.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.activatePad = this.activatePad.bind(this);
    }
    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyPress);
    }
    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyPress);        
    }
    handleKeyPress(e) {
        if (e.keyCode === this.props.keyCode) {
            this.playSound();
        }        
    }
    playSound() {        
        const sound = document.getElementById(this.props.keyTrigger);
        sound.currentTime = 0;
        sound.play();
        this.props.updateDisplay(this.props.clipId);
        this.activatePad();
        setTimeout(() => this.activatePad(), 100);
    }
    activatePad() {
        if (this.props.power) {
          if (this.state.padStyle.backgroundColor === 'orange') {
            this.setState({
              padStyle: inactiveStyle
            });
          } else {
            this.setState({
              padStyle: activeStyle
            });
          }
        } else if (this.state.padStyle.marginTop === 8) {
          this.setState({
            padStyle: inactiveStyle
          });
        } else {
          this.setState({
            padStyle: {
              height: 35,
              marginTop: 5,
              backgroundColor: 'grey',
              boxShadow: '0 3px grey'
            }
          });
        }
      }

    render() {
        return (
            <div
                className="drum-pad"
                id={this.props.clipId}
                onClick={this.playSound}
                style={this.state.padStyle}
            >
                <audio 
                    className="clip"
                    id={this.props.keyTrigger}
                    src={this.props.clip}
                />
                {this.props.keyTrigger}
            </div>
        )
    }
}

export default DrumPad;