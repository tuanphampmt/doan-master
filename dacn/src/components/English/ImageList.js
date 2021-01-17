import React, {Component} from 'react';
// import mp3No from "../../../public/music/no.mp3"
var no = new Audio("");

class ImageList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: "",
            colorsYesPlay: ["xanhl", "cam", "do", "hong", "tim", "vang", "xam", "xanhd", "den", "nau"]
        }
    }

    playAudio = (color) => {
        var no = new Audio("/music/no.mp3");
        var yes = new Audio('/music/yes.mp3');
        var next = document.getElementById("next");
        if (this.props.code === color) {
            yes.play();
            next.style.display = "block"
            for (let i = 0; i < this.state.colorsYesPlay.length; i++) {
                if (this.state.colorsYesPlay[i] === this.props.code) {
                    this.setState({url: `/home-english/${this.state.colorsYesPlay[++i]}`})
                }

            }

        } else {
            no.play();
        }
    }

    render() {

        return (
            <>
                <div id="img1" style={{textAlign: 'center', marginTop: "100px"}}>
                    <a onClick={() => this.playAudio("cam")}>
                        <img src="/image/cam.jpg" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick={() => this.playAudio("den")}>
                        <img src="/image/den.jpg" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick={() => this.playAudio("do")}>
                        <img src="/image/do.jpg" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick={() => this.playAudio("hong")}>
                        <img src="/image/hong.jpg" id="hong" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick={() => this.playAudio("nau")}>
                        <img src="/image/nau.png" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/><br/>
                    </a>
                    <a onClick={() => this.playAudio("tim")}>
                        <img src="/image/tim.webp" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick={() => this.playAudio("vang")}>
                        <img src="/image/vang.jpg" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick={() => this.playAudio("xanhd")}>
                        <img src="/image/xanhd.jpg" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick={() => this.playAudio("xanhl")}>
                        <img src="/image/xanhl.png" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick={() => this.playAudio("xam")}>
                        <img src="/image/xám.jpg" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                </div>
                <a href={this.state.url}>
                    <button id="next" style={{
                        backgroundColor: 'greenyellow',
                        display: 'none',
                        borderRadius: 10,
                        width: 100,
                        height: 50,
                        marginLeft: 1300
                    }}>NEXT
                    </button>
                </a>
            </>
        );
    }
}

export default ImageList;