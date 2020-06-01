import React from "react";
import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "../css/SecondBlock_Menu.css"


    function RednerMenuItem({dish, onClick}) {
        return(
             <div class="slider__item">
                    <div class="case" id="case1">
                        <a href="####" class="link"></a>
                    </div>
                        <h4 class="namecake2" class="case"><label>Капкейк </label><br><span id="cupcake33" class="bold">{dish.name}</span></h4>
                        <p>50 грамів</p>
                <Link to={`../myorders`} className="nav__button2">Замовити</Link>
                <Link to={`../comments/${dish.id}`} className="nav__button2">Відгук</Link>
                </div>
        );
    }

    const SecondBlock_Menu = (props) => {

        const menu = props.dishes.dishes.map((dish) =>{

            return(
                <div key={dish.id} >
                    <RednerMenuItem dish={dish}/>
                </div>
                )
            });

        else if (props.dishes.errMess) {
            return(
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h4>{props.dishes.errMess}</h4>
                        </div>
                    </div>
                </div>
            );
        }
        else
            return(
            <div className="secondblock" id="menu">
        <div className="container">
            <div className="name">
                <p className="blockname2">Всі наші <span className="pink">капкейки</span></p>
                <p className="subtitle">начинки на будь-який смак</p>
                <img src="img/block2line.png" alt="" className="line">
            </div>
            <div class="navblock2">
                <a href="##" className="nav__button2">Фруктові</a>
                <a href="##" className="nav__button2">Шоколадні</a>
                <a href="##" className="nav__button2">Ванільні</a>
                <a href="##" className="nav__button2" id="lastitem2">З топінгом</a>
            </div>
            <div className="slider">
                <a href="###"><img src="imgage/leftarrow.png" alt="" className="left_arrow" id="left_arrow3"/></a>
                {menu}
                <a href="###"><img src="image/arrow.png" alt="" class="right_arrow"/></a>
             </div>
            </div>
            </div>
            );
    }

export default SecondBlock_Menu;