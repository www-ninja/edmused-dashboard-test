import React, { useState } from 'react';

import Logo from '../../assets/img/logo.png'

import './index.scss';

const MENU_ITEMS = [
    {
        name: 'Dashboard',
        icon: 'fa fa-line-chart'
    },
    {
        name: 'Lessons',
        icon: 'fa fa-briefcase'
    },
    {
        name: 'Teachers',
        icon: 'fa fa-users'
    },
    {
        name: 'Calendar',
        icon: 'fa fa-calendar'
    },
    {
        name: 'Chat',
        icon: 'fa fa-commenting'
    },
    {
        name: 'Settings',
        icon: 'fa fa-cog'
    },    
]

const Sidebar = () => {
    const [selected, setSelected] = useState(0);

    return (
        <div className='side-bar'>
            <div className='app-logo'>
                <img src={Logo} alt="logo" />
            </div>
            <ul>
                {MENU_ITEMS.map((el, index) => 
                    <li className={`${selected === index && 'active'}`} onClick={() => setSelected(index)}>
                        <i className={el.icon} />
                        {el.name}
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Sidebar;