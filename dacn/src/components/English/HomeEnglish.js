import React, {Component} from 'react';
import ImageList from "./ImageList";
import Alphabet from "./Alphabet";

class HomeEnglish extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: ["cam", "den", "do", "hong", "nau", "tim", "vang", "xanhd", "xanhl", "xam"],
            color: ""

        }
    }

    componentDidMount() {
        const presentColor = this.state.colors.find(color => color === this.props.match.params.color);
        if (presentColor) {
            this.setState({
                color: presentColor
            })
        }
    }

    render() {
        return (
            <div>
                <div>
                    <h1 className="game-title">Play-Game</h1>
                </div>
                <div>
                    <h1 className="win" style={{display: 'none', marginTop: 350}}>WIN</h1>
                </div>
                <ImageList
                    code={this.state.color}
                />
                <Alphabet
                    code={this.state.color}
                />
            </div>
        );
    }
}

export default HomeEnglish;