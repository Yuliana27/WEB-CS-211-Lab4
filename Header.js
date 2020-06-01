import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import "../css/Header.css"


class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
    return(
        <div className="intro">
        <Navbar dark expand="md">
            <div className="container">
                <div class="header__inner">
                <NavbarToggler onClick={this.toggleNav} />
                <NavbarBrand className="logo" href="/"><img src='assets/images/logo.png' alt="" /></NavbarBrand>
                <Collapse isOpen={this.state.isNavOpen} navbar>
                    <Nav navbar>
                    <NavItem>
                        <NavLink className="nav__link"  to='#menu'>Меню</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav__link" to='#order'>Як зробити замовлення?</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav__link"  to='#photos'>Фото</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav__link" to='../login'>Вхід</NavLink>
                    </NavItem>
                     <NavItem>
                        <NavLink className="nav__link" to='../signup'>Реєстрація</NavLink>
                    </NavItem>
                    </Nav>
                </Collapse>
        </Navbar>
        <Jumbotron>
        </div>
            <div className="introtext">
                <h1 className="intro__name">Обери свій капкейк</h1>
                <h2 className="intro__sname">з найсмачнішою начинкою</h2>
                <p className="text">Капкейки — це порційні тістечка з ніжною текстурою і чудовим смаком. Наша кондитерська пропонує капкейки на замовлення для будь-яких свят і заходів. Вони виділяються серед інших солодощів незвичайним оформленням та є справжніми солодкими шедеврами.</p>
                <div className="button1" id="button2">
                    <Button className="button" type="submit">Хочу капкейк</Button>
                    <img src="img/cupcakebutton.png" alt="cupcake" className="cupcakebutton">
                </div>
            </div>
        </Jumbotron>
    </div>
    </div>
    );
  }
}

export default Header;