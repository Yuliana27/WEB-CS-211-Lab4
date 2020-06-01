import React from 'react';
import { Link } from 'react-router-dom';
import "../css/ThirdBlock.css"

function ThirdBlock(props) {
    return(
    <div className="thirdblock">
        <div className="container">
            <div className="name">
                <p className="blockname2" id="order">Як зробити <span class="pink">замовлення?</span></p>
                <p className="subtitle">начинки на будь-який смак</p>
                <img src="img/block2line.png" alt="" class="line"/>
            </div>
            <div id="itemsblock3">
                <div className="thirdblock_item">
                    <div className="thirdblock_item_case">
                        <div className="icon">
                            <img src="img/notepad.png" alt=""/>
                        </div>
                        <h2 className="item_heading">Підтверджуємо замовлення</h2>
                        <p className="item_subtitle">Приймаємо замовлення та передзвонюємо Вам для уточнення деталей</p>
                    </div>
                </div>
                <div className="thirdblock_item">
                    <div className="thirdblock_item_case">
                        <div className="icon">
                            <img src="img/cupcakeitem.png" alt=""/>
                        </div>
                        <h2 className="item_heading">Готуємо Ваші капкейки</h2>
                        <p className="item_subtitle">Готуємо найсмачніші капкейки, які Ви обрали у меню</p>
                    </div>
                </div>
                <div className="thirdblock_item">
                    <div className="thirdblock_item_case">
                        <div className="icon">
                            <img src="img/car.png" alt=""/>
                        </div>
                        <h2 className="item_heading">Відправляємо замовлення</h2>
                        <p className="item_subtitle">Відправляємо Ваше замовлення Новою Поштою або ж кур'єром до Вашої квартири </p>
                    </div>
                </div>
                <div className="thirdblock_item">
                    <div className="thirdblock_item_case">
                        <div className="icon">
                            <img src="img/courier.png" alt="">
                        </div>
                        <h2 className="item_heading">Отримання замовлення</h2>
                        <p className="item_subtitle">Ви отримаєте смс-сповіщення на телефон або кур'єр зателефонує Вам</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ThirdBlock;