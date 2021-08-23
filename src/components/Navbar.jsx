import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={'navbar'}>
            <Link className={'nav-link'} to='/main'>Основная</Link>
            <Link className={'nav-link'} to='/favorite'>Избранное</Link>
        </div>
    );
};

export default Navbar;