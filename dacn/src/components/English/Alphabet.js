import React, {Component} from 'react';

class Alphabet extends Component {

    displayElement = () => {
        var Aaudio = new Audio('/music/black.mp3');
        var Baudio = new Audio('/music/blue.mp3');
        var Caudio = new Audio('/music/green.mp3');
        var Daudio = new Audio('/music/oranges.mp3');
        var Eaudio = new Audio('/music/pink.mp3');
        var Faudio = new Audio('/music/red.mp3');
        var Gaudio = new Audio('/music/violet.mp3');
        var Haudio = new Audio('/music/Gray.mp3');
        var Jaudio = new Audio('/music/yellow.mp3');
        var Iaudio = new Audio('/music/brown.mp3');
        switch (this.props.code) {
            case "cam":
                return (
                    <a onClick={() => Daudio.play()}>
                        <h1 className="tu2" style={{marginRight: 150}}>ORANGES</h1>
                    </a>
                )
            case "den":
                return (
                    <a onClick={() => Aaudio.play()}>
                        <h1 className="tu9" style={{marginRight: 100}}>BLACK</h1>
                    </a>
                )
            case "do":
                return (
                    <a onClick={() => Faudio.play()}>
                        <h1 className="tu3" style={{marginRight: 100}}>RED</h1>
                    </a>
                )
            case "hong":
                return (
                    <a onClick={() => Eaudio.play()}>
                        <h1 className="tu4" style={{marginRight: 100}}>PINK</h1>
                    </a>
                )
            case "nau":
                return (
                    <a onClick={() => Iaudio.play()}>
                        <h1 className="tu10" style={{marginRight: 100}}>BROWN</h1>
                    </a>
                )
            case "tim":
                return (
                    <a onClick={() => Gaudio.play()}>
                        <h1 className="tu5" style={{marginRight: 100}}>PURPLE</h1>
                    </a>
                )
            case "vang":
                return (
                    <a onClick={() => Jaudio.play()}>
                        <h1 className="tu6" style={{marginRight: 100}}>YELLOW</h1>
                    </a>
                )
            case "xanhd":
                return (
                    <a onClick={() => Baudio.play()}>
                        <h1 className="tu8" style={{marginRight: 100}}>BLUE</h1>
                    </a>
                )
            case "xanhl":
                return (
                    <a onClick={() => Caudio.play()}>
                        <h1 className="tu1" style={{marginRight: 100}}>GREEN</h1>
                    </a>
                )
            default:
                return (
                    <a onClick={() => Haudio.play()}>
                        <h1 className="tu7" style={{marginRight: 100}}>GRAY</h1>
                    </a>
                )
        }
    }

    render() {
        return (
            <div className="tu">
                {this.displayElement()}
            </div>
        );
    }
}

export default Alphabet;