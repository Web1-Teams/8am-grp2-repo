import React from "react";
import "./Nav.css";

const Nav = () => {
    return (
        <>
            <nav>
                <ul>
                    <li><a href="#"> <i className="fas fa-sign-in-alt">&nbsp;&nbsp;</i>تسجيل الدخول</a></li>
                    <li><a href="#">تواصل معنا<i className="fas fa-envelope"></i></a></li>
                    <li><a href="#">عن الموقع<i className="fas fa-info-circle"></i></a></li>
                    <li><a href="#">الأسئلة المتكررة<i className="fas fa-question-circle"></i></a></li>
                    <li><a href="#">المواد الدراسية<i className="fas fa-book-reader"></i></a></li>
                    <li><a href="#">الصفحة الرئيسية<i className="fas fa-home"></i></a></li>
                </ul>
            </nav>
        </>
    );
};

export default Nav;
