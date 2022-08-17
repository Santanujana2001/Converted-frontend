import React from "react";
import "./card.css";
import img from "../../images/1.jpg";
function card() {
    return (
        <div>
            <div className="box">
                <img src={img} alt="" className="box-img" />
                <ul className="one">
                    <li>NAME : Annie Marie</li>
                    <li>FATHER'S NAME : Chris Marie</li>
                    <li>MOTHER'S NAME : Brayn Marie</li>
                    <li>DATE OF BIRTH : 02/11/1990</li>
                    <li>GENDER : Female</li>
                    <li>NATIONALITY : American</li>
                    <li>GRADUATION YEAR : 2012</li>
                    <li>RELIGION : Christian</li>
                    <li>QUALIFICATION : B.Tech (Computer Science)</li>
                    <li>EMAIL : annie455afk@gmail.com</li>
                    <li>PHONE NO. : +1-2217281029</li>
                    <li>ADDRESS : Washington , D.C. ,USA</li>
                    <li>ADDRESS : Washington , D.C. ,USA</li>
                </ul>
            </div>

        </div>
    );
}
export default card;