import React from 'react';
import { Link } from 'react-router-dom';
import "../css/Footer.css"

function Footer(props) {
    return(
    <div className="footer">
        <div class="columns">
                <div className="column"><img src="{% static 'image/cupcake.png' %}" alt="logo" id="footlogo"></div>
                <div className="column"><a href="#menu" className="footerlink">Меню</a> <br> <a href="#order" className="footerlink">Як зробити замовлення?</a> <br> <a href="#photos" className="footerlink">Фото</a> <br> </div>
                <div className="column"><span className="tnumber">+380931199063</span><br><a href="#call" className="footerlink">Замовити дзвінок</a></div>
                <div className="column">Політика конфіденційності <br> © 2020-2020 Юліана Лаврик. Усі права застережені.</div>
                <a href="https://www.instagram.com/yulianalavryk/" target="_blank" id="instalogo"><img src="image/instagram.png" alt=""></a>
            </div>
    </div>
    )
}

export default Footer;