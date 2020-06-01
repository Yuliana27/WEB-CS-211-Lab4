import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Form, FormGroup, Input, Label } from 'reactstrap';
import "../css/FifthBlock.css"

class FifthBlock extends Component {

    constructor(props) {
        super(props);

        this.handleCall = this.handleCall.bind(this);

    }

    handleCall(event) {
        alert("Call is confirmed!");
        event.preventDefault();

    }

    render() {
    return(
    <div className="fifthblock">
        <div className="container">
            <h2 className="heading5" id="call">Замовте капкейки в нас на сайті <br> і ми передзвонимо Вам за 5 хв</h2>
            <p className="subtitle5">для замовлення без реєстрації заповніть форму</p>
        <Form onSubmit={this.handleCall}>
            <FormGroup>
                <Label htmlFor="username"></Label>
                <Input type="text" name="username" class="your_name" placeholder="Ваше ім'я"
                    innerRef={(input) => this.username = input} />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="phone"></Label>
                <Input type="text" name="phone" class="your_phone" placeholder="Ваш телефон"
                    innerRef={(input) => this.phone = input}  />
            </FormGroup>
            <div className="button1">
                <input type="submit" value="Хочу капкейк" className="button">
                <img src="img/cupcakebutton.png" alt="cupcake" class="cupcakebutton"/>
             </Form>
            </div>
        </div>
    </div>
    )
  }
}

export default FifthhBlock;