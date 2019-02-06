
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {

    return (

        <div className="ui secondary pointing menu">
            <NavLink to="/" className="item">Streamer</NavLink>
            <div className="right menu">
                <NavLink to="/" className="item">All Streams</NavLink>
            </div>
        </div>
    );
}
export default Header;