import React from 'react';
import { Button } from 'reactstrap';
import "../css/MyOrders.css"

function RenderCard({item}) {
    this.props {
					<Button onClick={() => history.push('/myorders')} className="enter">Замовити</Button>
	);

}

function RenderMyOrders(orders, onClick) {
    return(
	<Button onClick={() => history.push('/index#menu')} className="enter" >+</Button>
            <br>
                <ul className="l1">
                    <li style="color: white"><p className="namecake3">- {user_dish.dish.name}</p><br>
                    <p>Калорійність : {user_dish.dish.kkal}</p>
                        <p>Ціна : {user_dish.dish.price} грн</p>
                    </li>
                </ul>
                <Button onClick={() => history.push('/dish_delete/${user_dish.dish.id}')} className="enter">Видалити</Button>
                <br><br>
            <Button onClick={() => history.push('/user_dish_delete')} className="enter22" >Підтвердити</Button>
    );
}

const MyOrders = (props) => {

        const myorders = props.orders.orders.map((orders) =>{

            return(
                <div key={orders.id} >
                    <RednerMyOrders orders={orders}/>
                </div>
                )
            });

        else if (props.orders.errMess) {
            return(
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h4>{props.orders.errMess}</h4>
                        </div>
                    </div>
                </div>
            );
        }
        else
            return(
            <div className="intro" id="menu">
        <div className="container">
           {myorders}
            </div>
            </div>
            );
    }

export default MyOrders;
