import React from 'react';
import { Link } from 'react-router-dom';
import "../css/FourthBlock.css"

function FourthBlock(props) {
    return(
    <div className="fourthblock" id="photos">
        <div className="container">
            <div className="name">
                <p className="blockname2" id="order">Фото <span className="pink">капкейків</span></p>
                <p className="subtitle">все в одному місці</p>
                <img src="img/block2line.png" alt="" class="line"/>
            </div>
            <div className="photo">
                <a href="###"><img src="img/leftarrow.png" alt="" className="left_arrow"></a>
                <div className="photocase" id="photo1">
                    <a href="####" className="link"></a>
                </div>
                <div className="photocase" id="photo2">
                    <a href="####" className="link"></a>
                </div>
                <div className="photocase" id="photo3">
                    <a href="####" className="link"></a>
                </div>
                <a href="###"><img src="img/arrow.png" alt="" class="right_arrow"/></a>
            </div>
        </div>
    </div>
    )
}

export default FourthBlock;