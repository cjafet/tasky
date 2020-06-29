import React from "react";
import './Menu.css';

const Menu = user => {
    return (
        <div className="Menu">
            <nav>
                <div className="Logo">
                    <ul>
                        <li>Tasky</li>
                    </ul>
                </div>
                <div>
                    <ul>           
                        <li className="UserIcon"><div className="UserPic"></div></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Menu;