import React, {Component} from 'react';

class HomeEnglish extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1 className="game-title">Play-Game</h1>
                </div>
                <div>
                    <h1 className="win" style={{display: 'none', marginTop: 350}}>WIN</h1>
                </div>
                <div className="img1" style={{textAlign: 'center', marginTop: "100px"}}>
                    <a onClick="no.play();">
                        <img src="image/cam.jpg" className="hinh1" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick="no.play();">
                        <img src="image/den.jpg" className="hinh2" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick="no.play();">
                        <img src="image/do.jpg" className="hinh3" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick="no.play();">
                        <img src="image/hong.jpg" className="hinh4" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick="no.play();">
                        <img src="image/nau.png" className="hinh5" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/><br/>
                    </a>
                    <a onClick="no.play();">
                        <img src="image/tim.webp" className="hinh6" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick="no.play();">
                        <img src="image/vang.jpg" className="hinh7" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick="no.play();">
                        <img src="image/xanhd.jpg" className="hinh8" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick="yes.play();">
                        <img src="image/xanhl.png" className="hinh9" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick="no.play();">
                        <img src="image/xám.jpg" className="hinh10" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                </div>
                <button className="next1" style={{
                    backgroundColor: 'greenyellow',
                    display: 'none',
                    borderRadius: 10,
                    width: 100,
                    height: 50,
                    marginLeft: 1300
                }}>NEXT
                </button>
                <div className="img2" style={{textAlign: 'center', display: 'none'}}>
                    <a onClick="yes.play();">
                        <img src="image/cam.jpg" className="hinh11" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50, marginTop: 100}}/>
                    </a>
                    <a onClick="no.play();">
                        <img src="image/den.jpg" className="hinh12" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick="no.play();">
                        <img src="image/do.jpg" className="hinh13" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick="no.play();">
                        <img src="image/hong.jpg" className="hinh14" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick="no.play();">
                        <img src="image/nau.png" className="hinh15" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/><br/>
                    </a>
                    <a onClick="no.play();">
                        <img src="image/tim.webp" className="hinh16" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick="no.play();">
                        <img src="image/vang.jpg" className="hinh17" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick="no.play();">
                        <img src="image/xanhd.jpg" className="hinh18" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick="no.play();">
                        <img src="image/xanhl.png" className="hinh19" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick="no.play();">
                        <img src="image/xám.jpg" className="hinh110" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                </div>
                <button className="next2" style={{
                    backgroundColor: 'greenyellow',
                    display: 'none',
                    borderRadius: 10,
                    width: 100,
                    height: 50,
                    marginLeft: 1300
                }}>NEXT
                </button>
                <div className="img3" style={{textAlign: 'center', display: 'none'}}>
                    <a onClick="no.play();">
                        <img src="image/cam.jpg" className="hinh21" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50, marginTop: 100}}/>
                    </a>
                    <a onClick="no.play();">
                        <img src="image/den.jpg" className="hinh22" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick="yes.play();">
                        <img src="image/do.jpg" className="hinh23" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick="no.play();">
                        <img src="image/hong.jpg" className="hinh24" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick="no.play();">
                        <img src="image/nau.png" className="hinh25" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/><br/>
                    </a>
                    <a onClick="no.play();">
                        <img src="image/tim.webp" className="hinh26" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick="no.play();">
                        <img src="image/vang.jpg" className="hinh27" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick="no.play();">
                        <img src="image/xanhd.jpg" className="hinh28" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick="no.play();">
                        <img src="image/xanhl.png" className="hinh29" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick="no.play();">
                        <img src="image/xám.jpg" className="hinh210" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                </div>
                <button className="next3" style={{
                    backgroundColor: 'greenyellow',
                    display: 'none',
                    borderRadius: 10,
                    width: 100,
                    height: 50,
                    marginLeft: 1300
                }}>NEXT
                </button>
                <div className="img4" style={{textAlign: 'center', display: 'none'}}>
                    <a onClick="no.play();">
                        <img src="image/cam.jpg" className="hinh31" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50, marginTop: 100}}/>
                    </a>
                    <a onClick="no.play();">
                        <img src="image/den.jpg" className="hinh32" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick="no.play();">
                        <img src="image/do.jpg" className="hinh33" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick="yes.play();">
                        <img src="image/hong.jpg" className="hinh34" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick="no.play();">
                        <img src="image/nau.png" className="hinh35" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/><br/>
                    </a>
                    <a onClick="no.play();">
                        <img src="image/tim.webp" className="hinh36" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick="no.play();">
                        <img src="image/vang.jpg" className="hinh37" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick="no.play();">
                        <img src="image/xanhd.jpg" className="hinh38" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick="no.play();">
                        <img src="image/xanhl.png" className="hinh39" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick="no.play();">
                        <img src="image/xám.jpg" className="hinh310" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                </div>
                <button className="next4" style={{
                    backgroundColor: 'greenyellow',
                    display: 'none',
                    borderRadius: 10,
                    width: 100,
                    height: 50,
                    marginLeft: 1300
                }}>NEXT
                </button>
                <div className="img5" style={{textAlign: 'center', display: 'none'}}>
                    <a onClick="no.play();">
                        <img src="image/cam.jpg" className="hinh41" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50, marginTop: 100}}/>
                    </a>
                    <a onClick="no.play();">
                        <img src="image/den.jpg" className="hinh42" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick="no.play();">
                        <img src="image/do.jpg" className="hinh43" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick="no.play();">
                        <img src="image/hong.jpg" className="hinh44" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick="no.play();">
                        <img src="image/nau.png" className="hinh45" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/><br/>
                    </a>
                    <a onClick="yes.play();">
                        <img src="image/tim.webp" className="hinh46" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick="no.play();">
                        <img src="image/vang.jpg" className="hinh47" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick="no.play();">
                        <img src="image/xanhd.jpg" className="hinh48" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick="no.play();">
                        <img src="image/xanhl.png" className="hinh49" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick="no.play();">
                        <img src="image/xám.jpg" className="hinh410" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                </div>
                <button className="next5" style={{
                    backgroundColor: 'greenyellow',
                    display: 'none',
                    borderRadius: 10,
                    width: 100,
                    height: 50,
                    marginLeft: 1300
                }}>NEXT
                </button>
                <div className="img6" style={{textAlign: 'center', display: 'none'}}>
                    <a onClick="no.play();">
                        <img src="image/cam.jpg" className="hinh51" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50, marginTop: 100}}/>
                    </a>
                    <a onClick="no.play();">
                        <img src="image/den.jpg" className="hinh52" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick="no.play();">
                        <img src="image/do.jpg" className="hinh53" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick="no.play();">
                        <img src="image/hong.jpg" className="hinh54" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick="no.play();">
                        <img src="image/nau.png" className="hinh55" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/><br/>
                    </a>
                    <a onClick="no.play();">
                        <img src="image/tim.webp" className="hinh56" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick="yes.play();">
                        <img src="image/vang.jpg" className="hinh57" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick="no.play();">
                        <img src="image/xanhd.jpg" className="hinh58" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick="no.play();">
                        <img src="image/xanhl.png" className="hinh59" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick="no.play();">
                        <img src="image/xám.jpg" className="hinh510" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                </div>
                <button className="next6" style={{
                    backgroundColor: 'greenyellow',
                    display: 'none',
                    borderRadius: 10,
                    width: 100,
                    height: 50,
                    marginLeft: 1300
                }}>NEXT
                </button>
                <div className="img7" style={{textAlign: 'center', display: 'none'}}>
                    <a onClick="no.play();">
                        <img src="image/cam.jpg" className="hinh61" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50, marginTop: 100}}/>
                    </a>
                    <a onClick="no.play();">
                        <img src="image/den.jpg" className="hinh62" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick="no.play();">
                        <img src="image/do.jpg" className="hinh63" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick="no.play();">
                        <img src="image/hong.jpg" className="hinh64" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick="no.play();">
                        <img src="image/nau.png" className="hinh65" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/><br/>
                    </a>
                    <a onClick="no.play();">
                        <img src="image/tim.webp" className="hinh66" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick="no.play();">
                        <img src="image/vang.jpg" className="hinh67" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick="no.play();">
                        <img src="image/xanhd.jpg" className="hinh68" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick="no.play();">
                        <img src="image/xanhl.png" className="hinh69" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick="yes.play();">
                        <img src="image/xám.jpg" className="hinh610" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                </div>
                <button className="next7" style={{
                    backgroundColor: 'greenyellow',
                    display: 'none',
                    borderRadius: 10,
                    width: 100,
                    height: 50,
                    marginLeft: 1300
                }}>NEXT
                </button>
                <div className="img8" style={{textAlign: 'center', display: 'none'}}>
                    <a onClick="no.play();">
                        <img src="image/cam.jpg" className="hinh71" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50, marginTop: 100}}/>
                    </a>
                    <a onClick="no.play();">
                        <img src="image/den.jpg" className="hinh72" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick="no.play();">
                        <img src="image/do.jpg" className="hinh73" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick="no.play();">
                        <img src="image/hong.jpg" className="hinh74" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick="no.play();">
                        <img src="image/nau.png" className="hinh75" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/><br/>
                    </a>
                    <a onClick="no.play();">
                        <img src="image/tim.webp" className="hinh76" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick="no.play();">
                        <img src="image/vang.jpg" className="hinh77" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick="yes.play();">
                        <img src="image/xanhd.jpg" className="hinh78" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick="no.play();">
                        <img src="image/xanhl.png" className="hinh79" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick="no.play();">
                        <img src="image/xám.jpg" className="hinh710" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                </div>
                <button className="next8" style={{
                    backgroundColor: 'greenyellow',
                    display: 'none',
                    borderRadius: 10,
                    width: 100,
                    height: 50,
                    marginLeft: 1300
                }}>NEXT
                </button>
                <div className="img9" style={{textAlign: 'center', display: 'none'}}>
                    <a onClick="no.play();">
                        <img src="image/cam.jpg" className="hinh81" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50, marginTop: 100}}/>
                    </a>
                    <a onClick="yes.play();">
                        <img src="image/den.jpg" className="hinh82" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick="no.play();">
                        <img src="image/do.jpg" className="hinh83" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick="no.play();">
                        <img src="image/hong.jpg" className="hinh84" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick="no.play();">
                        <img src="image/nau.png" className="hinh85" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/><br/>
                    </a>
                    <a onClick="no.play();">
                        <img src="image/tim.webp" className="hinh86" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick="no.play();">
                        <img src="image/vang.jpg" className="hinh87" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick="no.play();">
                        <img src="image/xanhd.jpg" className="hinh88" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick="no.play();">
                        <img src="image/xanhl.png" className="hinh89" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick="no.play();">
                        <img src="image/xám.jpg" className="hinh810" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                </div>
                <button className="next9" style={{
                    backgroundColor: 'greenyellow',
                    display: 'none',
                    borderRadius: 10,
                    width: 100,
                    height: 50,
                    marginLeft: 1300
                }}>NEXT
                </button>
                <div className="img10" style={{textAlign: 'center', display: 'none'}}>
                    <a onClick="no.play();">
                        <img src="image/cam.jpg" className="hinh91" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50, marginTop: 100}}/>
                    </a>
                    <a onClick="no.play();">
                        <img src="image/den.jpg" className="hinh92" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick="no.play();">
                        <img src="image/do.jpg" className="hinh93" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick="no.play();">
                        <img src="image/hong.jpg" className="hinh94" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick="yes.play();">
                        <img src="image/nau.png" className="hinh95" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/><br/>
                    </a>
                    <a onClick="no.play();">
                        <img src="image/tim.webp" className="hinh96" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick="no.play();">
                        <img src="image/vang.jpg" className="hinh97" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick="no.play();">
                        <img src="image/xanhd.jpg" className="hinh98" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick="no.play();">
                        <img src="image/xanhl.png" className="hinh99" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick="no.play();">
                        <img src="image/xám.jpg" className="hinh910" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                </div>
                <button className="next10" style={{
                    backgroundColor: 'greenyellow',
                    display: 'none',
                    borderRadius: 10,
                    width: 100,
                    height: 50,
                    marginLeft: 1300
                }}>NEXT
                </button>
                <div className="tu">
                    <a onClick="Caudio.play();">
                        <h1 className="tu1" style={{marginRight: 100}}>GREEN</h1>
                    </a>
                    <a onClick="Daudio.play();">
                        <h1 className="tu2" style={{marginRight: 150, display: 'none'}}>ORANGES</h1>
                    </a>
                    <a onClick="Faudio.play();">
                        <h1 className="tu3" style={{marginRight: 100, display: 'none'}}>RED</h1>
                    </a>
                    <a onClick="Eaudio.play();">
                        <h1 className="tu4" style={{marginRight: 100, display: 'none'}}>PINK</h1>
                    </a>
                    <a onClick="Gaudio.play();">
                        <h1 className="tu5" style={{marginRight: 100, display: 'none'}}>PURPLE</h1>
                    </a>
                    <a onClick="Jaudio.play();">
                        <h1 className="tu6" style={{marginRight: 100, display: 'none'}}>YELLOW</h1>
                    </a>
                    <a onClick="Haudio.play();">
                        <h1 className="tu7" style={{marginRight: 100, display: 'none'}}>GRAY</h1>
                    </a>
                    <a onClick="Baudio.play();">
                        <h1 className="tu8" style={{marginRight: 100, display: 'none'}}>BLUE</h1>
                    </a>
                    <a onClick="Aaudio.play();">
                        <h1 className="tu9" style={{marginRight: 100, display: 'none'}}>BLACK</h1>
                    </a>
                    <a onClick="Iaudio.play();">
                        <h1 className="tu10" style={{marginRight: 100, display: 'none'}}>BROWN</h1>
                    </a>
                </div>
            </div>
        );
    }
}

export default HomeEnglish;