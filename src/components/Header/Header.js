import React from "react";
import img from '../../img/mb1 1.svg'

const Header = () => {

    return (
            <div className="header">
                <div className="container">
                    <div className="content">
                        <div className="content--logo">
                            <img className="mx-3" src={img} alt=""/>
                            <a href="#" className="content--logo--web">MOTION WEB</a>
                        </div>
                        <div className="content--logo--web--nav">
                            <a href="#">Услуги</a>
                            <a href="#">О нас</a>
                            <a href="#">Проекты</a>
                            <a href="#">Клиенты</a>
                            <a href="#">Наш команда</a>
                        </div>
                        <div>
                            <button className="btn">Contact</button>
                        </div>
                    </div>

                </div>
            </div>
    );
};

export default Header;