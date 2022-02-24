import React from "react";
import './index.scss';

const Layout = (props) => {
    return (
        <div className="layout">
            {props.children}
        </div>
    )
}

export default Layout;